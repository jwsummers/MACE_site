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
      plate,
      message,
      website, // Honeypot field
      formTimestamp,
    } = body

    // 1. Honeypot check
    // If 'website' is filled out, return 200 OK silently so the bot thinks it succeeded
    if (website) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    }

    // 2. Time-based validation
    // If submitted under 2.5 seconds, return 200 OK silently
    const now = Date.now()
    if (formTimestamp && now - parseInt(formTimestamp, 10) < 2500) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    }

    // 3. Send Email via SendGrid
    const msg = {
      to: "maceautomotive@gmail.com",
      from: "maceautomotive@gmail.com",
      subject: "New Website Lead - M.A.C.E. Contact Form",
      text: `
New Pickup Request Received:

Name: ${name}
Phone: ${phone}
Email: ${email}
VIN: ${vin || "N/A"}
License Plate: ${plate || "N/A"}

Message / Request:
${message}
      `.trim(),
    }

    await sgMail.send(msg)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}