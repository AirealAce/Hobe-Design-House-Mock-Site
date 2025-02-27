# Hobe Design House Website

A modern business website built with React, TypeScript, and Tailwind CSS.

## CloudFlare Deployment

1. Prerequisites:
   - A CloudFlare account
   - Wrangler CLI installed globally: `npm install -g wrangler`

2. Configure Environment:
   - Copy `.env.example` to `.env`
   - Add your CloudFlare credentials:
     - CLOUDFLARE_ACCOUNT_ID
     - CLOUDFLARE_API_TOKEN
     - CLOUDFLARE_ZONE_ID

3. Deploy:
   ```bash
   # Build the project
   npm run build

   # Deploy using CloudFlare (the output directory is already set to 'dist')
   wrangler deploy
   ```

4. Verify:
   - Check your CloudFlare dashboard
   - Your site should be live at your configured domain

## Local Development Setup

1. Clone the repository:
```bash
git clone git@github.com:AirealAce/Hobe-Design-House-Mock-Site.git
cd Hobe-Design-House-Mock-Site
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and fill in the required values.

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## VS Code Setup

1. Recommended Extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

2. Set up auto-formatting (create `.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Technology Stack

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Express.js backend
- Memory storage (can be extended to use PostgreSQL)

## Project Structure

- `/client` - Frontend React application
- `/server` - Express.js backend
- `/shared` - Shared types and schemas

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/hobe_design
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `wrangler deploy` - Deploy to CloudFlare

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT License - see LICENSE file for details