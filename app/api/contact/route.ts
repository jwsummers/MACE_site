import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      vin,
      message,
      website, // Honeypot field
      formTimestamp,
      "g-recaptcha-response": recaptchaResponse,
    } = body

    // 1. Honeypot check
    if (website) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 })
    }

    // 2. Time-based validation (under 3 seconds = bot)
    const now = Date.now()
    if (formTimestamp && now - parseInt(formTimestamp, 10) < 3000) {
      return NextResponse.json({ message: "Form submitted too quickly" }, { status: 400 })
    }

    // 3. Verify reCAPTCHA
    if (!recaptchaResponse) {
      return NextResponse.json({ message: "reCAPTCHA validation failed" }, { status: 400 })
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`,
      { method: "POST" }
    )
    const recaptchaData = await recaptchaRes.json()

    if (!recaptchaData.success) {
      return NextResponse.json({ message: "reCAPTCHA validation failed" }, { status: 400 })
    }

    // 4. Send Email via SendGrid
    const msg = {
      to: "maceautomotive@gmail.com",
      from: "maceautomotive@gmail.com", // Must be a verified Sender Identity in SendGrid
      subject: "New Website Lead - M.A.C.E. Contact Form",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nVIN: ${vin || "N/A"}\nMessage: ${message}`,
    }

    await sgMail.send(msg)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}