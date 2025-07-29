# AI Website Builder 🧠💻

An AI-powered tool that generates fully responsive HTML/CSS websites based on natural language prompts using Gemini API and Convex backend.

## 🚀 Features

- ✨ Build custom websites from text prompts
- 🔮 Uses Gemini AI for code generation
- 📦 Stores project data using Convex
- 🧑‍💻 Live preview of generated websites
- 📥 Copy or download generated code
- 🆓 Fully free to use with your own API keys

## 🛠️ Tech Stack

- **Next.js** (Frontend)
- **Convex.dev** (Backend)
- **Gemini AI API** (Code generation)
- **Tailwind CSS** (Styling)

## 🔐 Setup Environment Variables

In your `.env.local`:

```env
CONVEX_DEPLOYMENT=dev:capable-magpie-329
NEXT_PUBLIC_CONVEX_URL=https://capable-magpie-329.convex.cloud
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
