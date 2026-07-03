#!/bin/bash

# Portfolio Setup Script
# This script helps you set up your portfolio quickly

echo "🚀 Portfolio Harshita Verma - Setup"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org"
    exit 1
fi

echo "✓ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✓ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Edit src/data/portfolio.js with your information"
echo "2. Add your profile picture"
echo "3. Update skills, projects, and experience"
echo "4. Run: npm run dev (to start development server)"
echo ""
echo "📤 To deploy:"
echo "1. Run: npm run build"
echo "2. Choose your hosting platform:"
echo "   - GitHub Pages: npm run deploy"
echo "   - Vercel: Push to GitHub and connect to Vercel"
echo "   - Netlify: Push to GitHub and connect to Netlify"
echo ""
