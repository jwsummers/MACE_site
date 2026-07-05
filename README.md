# M.A.C.E. Website Management Guide 🛠️

Welcome to the code repository for **My Auto Care Expert (M.A.C.E.)**. This guide is designed to help you run the website on your own computer, make text or price updates, and push those changes live to the internet.

Because the site is hosted on Vercel, **any time you save and "push" your changes to GitHub, the live website will automatically update within about 60 seconds.**

---

## 📋 First-Time Setup (Do this once)

Before you can work on the site, you need three free tools installed on your computer. If you already have these, you can skip to Step 4.

1. **Download VS Code:** [Download here](https://code.visualstudio.com/). This is the text editor where you will view and edit the website files.
2. **Download Node.js:** [Download here](https://nodejs.org/). (Choose the "LTS" version). This allows the website to run locally on your machine.
3. **Download Git:** [Download here](https://git-scm.com/). This handles sending your changes to GitHub.
4. **Get the code onto your computer:**
   * Open your computer's terminal (or Command Prompt).
   * Run the following command to download the website folder:
     ```bash
     git clone [https://github.com/jwsummers/MACE_site.git](https://github.com/jwsummers/MACE_site.git)
     ```
   * Open **VS Code**, go to `File > Open Folder`, and select the newly created `MACE_site` folder.

---

## 🚀 Everyday Workflow (How to make updates)

Whenever you want to change text, images, or info on the site, follow these 3 steps:

### Step 1: Start the Local Preview
Before making changes live, you want to see how they look on your computer.
1. Inside VS Code, open the terminal by pressing `Ctrl + ` ` ` (or go to `Terminal > New Terminal` at the top menu).
2. Type this command to install the website's building blocks (you only need to do this the very first time, or if new features are added):
   ```bash
   npm install
   ```
3. Type this command to start the local preview website:
   ```bash
   npm run dev
   ```
4. Open your web browser and go to: **`http://localhost:3000`**
   * *You will see your website. Leave this terminal running while you edit; it will update automatically every time you hit Save.*

---

### Step 2: Edit the Text or Services
* Most of your main website text, service lists, and hours will be in the `app/page.tsx` file (or inside a `components` folder). 
* Click on the file in the left sidebar of VS Code to open it.
* Use `Ctrl + F` (or `Cmd + F` on Mac) to search for the specific text you want to change (like a price, phone number, or service description).
* Change the text inside the quotes or tags. 
* **Save the file** (`Ctrl + S`). Check your browser at `localhost:3000` to make sure it looks right.

---

### Step 3: Push Your Changes Live 🚀
Once you are happy with how the local website looks, it’s time to publish it to the real internet. 

Go to your terminal at the bottom of VS Code, press `Ctrl + C` to stop the local preview server, and run these **three exact commands** in order:

```bash
# 1. Tell Git to gather up all the files you edited
git add .

# 2. Lock in your changes with a short note explaining what you did
git commit -m "Updated service prices and phone number"

# 3. Send the changes to GitHub (this automatically triggers the live website update!)
git push origin main
```

> 💡 **Quick Tip:** When editing the `app/page.tsx` file, code can look overwhelming. You can completely ignore the technical code tags (like `<div>`, `<section>`, or `className="..."`) and **only** change the plain text sitting between them. If you ever make a mistake and break something, type `git stash` in the terminal to completely wipe away your unsaved mistakes and start fresh from the last successful save.