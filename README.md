# 📘 DevelopMe - Portfolio

A clean and responsive personal portfolio website built with **Next.js** and **Tailwind CSS**.

---

## 🚀 Live Preview

https://dev-me-portfolio.vercel.app/

---

## 🛠️ Tech Stack

| Tool / Framework     | Purpose                          |
|----------------------|----------------------------------|
| **Next.js**          | React Framework for SSR + Routing |
| **TypeScript**       | Optional Static Typing           |
| **Tailwind CSS**     | Utility-first CSS Styling        |
| **PostCSS**          | CSS transformation pipeline      |

---

## 📦 Installation & Setup

> _Follow these steps to run it locally._

```bash
# 1. Clone the repository
git clone https://github.com/your-username/developme-portfolio.git
cd developme-portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---


## 📁 Project Structure

```
/pages
  index.tsx          → Homepage
  portfolio.tsx      → Portfolio Page
/public
  /images            → Static assets (e.g. bg.jpg)
/styles
  globals.css        → Global CSS
tailwind.config.js   → Tailwind config
tsconfig.json        → TypeScript config
```

---

## 📱 Responsive Design

- Fully responsive across mobile, tablet, and desktop.
- Navbar collapses and scales smoothly.
- Typography adapts using Tailwind's utility classes.

---

## ⚠️ Known Limitations & Tradeoffs

- ❌ No dynamic CMS/content support — everything is static.
- ❌ No contact form / API — only frontend.
- ⚠️ If JavaScript fails, layout degrades gracefully but features like button icons may not show.

---

## ✨ Future Improvements

- Add dynamic blog pages.
- Integrate a contact form with backend (e.g. Formspree).
- Add light/dark mode toggle.

---

## 💡 Credits

Design inspired by provided UI mockup.  
Built with ❤️ by [Ria].
