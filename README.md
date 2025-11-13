# Thirukural - திருக்குறள்

A comprehensive web application to read and explore Thirukural, the ancient Tamil literary masterpiece by Thiruvalluvar.

## Features

- 📚 Complete collection of 1330 Kurals organized by Paals, Iyals, and Athigarams
- 🌐 Tamil text with English translations and detailed explanations
- 🎨 Clean, professional white and blue-grey color scheme
- 📱 Responsive design for all devices
- ☁️ Cloud database with MongoDB Atlas

## Tech Stack

**Frontend:** React 19 + TypeScript + Vite + Tailwind CSS + React Router DOM  
**Backend:** Node.js + Express + MongoDB + Mongoose  
**Runtime:** Bun

## Local Development

### Installation

```bash
bun install
```

### Environment Setup

Create `.env` file in `packages/server/`:

```env
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
MONGO_CLUSTER=your_cluster.mongodb.net
MONGO_DATABASE=thirukural
PORT=3000
```

### Run Development Server

```bash
bun run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:3000

## Deployment

Configured for Render.com deployment. See `render.yaml` for configuration.

## License

Open source - Educational purposes

This project was created using `bun init` in bun v1.3.1. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
