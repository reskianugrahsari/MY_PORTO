# 🚀 Portfolio Setup Guide

## Prerequisites Fixed ✅

Your portfolio has been updated with the following improvements:

### 1. **Tailwind CSS Production Ready** ✅
- Removed CDN dependency
- Installed `tailwindcss`, `postcss`, and `autoprefixer` as dev dependencies
- Created `tailwind.config.ts` and `postcss.config.ts` for proper build setup
- Updated `index.html` to use CSS imports instead of CDN
- This eliminates the production warning

### 2. **Gemini API Key Setup** ⚙️
You need to get a Gemini API key to enable the chatbot feature:

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Get API Key" 
3. Copy your API key
4. Open `.env.local` in the root directory (created for you)
5. Replace `your_gemini_api_key_here` with your actual key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```
6. Save the file

**Important:** Never commit `.env.local` to git - it's already in `.gitignore` by default.

### 3. **React DevTools** (Optional)
- Install [React DevTools browser extension](https://react.dev/link/react-devtools) for better debugging in development

## Running Your Portfolio

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

The app will be available at `http://localhost:3000`

## What Changed

- ✅ Tailwind CSS now uses proper build process
- ✅ Gemini API key errors are now gracefully handled
- ✅ Environment variables properly configured
- ✅ Ready for production deployment

## Troubleshooting

**Still seeing API Key error?**
- Make sure `VITE_GEMINI_API_KEY` is in `.env.local`
- Restart dev server after updating `.env.local`
- Check the value doesn't have extra spaces

**Tailwind styles not showing?**
- Make sure `npm install` completed successfully
- Clear browser cache and refresh
- Restart dev server
