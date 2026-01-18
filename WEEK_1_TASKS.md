# Week 1: Project Setup & Configuration
**Dates**: Jan 20-26, 2026
**Status**: 🔴 CRITICAL PATH - START HERE

## Overview
This week focuses on creating all necessary configuration files to unblock development. These are prerequisites for everything else.

---

## Task Checklist

### 1. TypeScript Configuration
- [ ] Create `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@db/*": ["./db/*"]
    }
  },
  "include": ["client/src", "db", "server"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] Create `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.js"]
}
```

**Test**: Run `npm run check` - should compile without errors

---

### 2. Environment Variables
- [ ] Create `.env.example`

```bash
# Server Configuration
NODE_ENV=development
PORT=5000

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/bilingua_dev

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
SESSION_SECRET=your-super-secret-session-key-change-this-in-production

# Email Configuration (Optional for now)
# SENDGRID_API_KEY=your-sendgrid-key
# SUPPORT_EMAIL=support@bilingua.app

# Error Monitoring (Optional for now)
# SENTRY_DSN=your-sentry-dsn

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5000
```

- [ ] Create `.env` locally (copy from .env.example)
- [ ] **IMPORTANT**: Never commit `.env` to git (already in .gitignore)

---

### 3. Database Configuration
- [ ] Sign up for Neon.tech (free PostgreSQL hosting)
  - Go to: https://neon.tech
  - Create account
  - Create new project: "bilingua-dev"
  - Copy connection string
  - Paste into `.env` as `DATABASE_URL`

- [ ] Create `drizzle.config.ts`

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema/*",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

**Test**: Connection will be tested once we create schema in Week 2

---

### 4. Tailwind Configuration
- [ ] Create `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

- [ ] Install missing dependency: `npm install -D tailwindcss-animate`

---

### 5. PostCSS Configuration
- [ ] Create `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### 6. ESLint Configuration
- [ ] Create `.eslintrc.js`

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}
```

- [ ] Install missing dependencies:
```bash
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
```

---

### 7. Prettier Configuration
- [ ] Create `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

- [ ] Create `.prettierignore`

```
dist
node_modules
*.md
package-lock.json
```

- [ ] Install Prettier: `npm install -D prettier`

---

### 8. Git Configuration
- [ ] Verify `.gitignore` includes:

```
node_modules
dist
.env
.DS_Store
*.log
```

(This should already be there, just verify)

---

### 9. README Update
- [ ] Update `README.md` with proper setup instructions

```markdown
# Bilingua.app

A language exchange platform connecting English and French speakers in New Brunswick, Canada.

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (Drizzle ORM)
- **Real-time**: WebSockets
- **Authentication**: Passport.js, JWT

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (we use Neon.tech)
- Git

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Bilingua-App
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Set up database
```bash
npm run db:push
```

5. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes
- `npm run lint` - Run ESLint

## Project Structure

```
/
├── client/          # Frontend React app
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       └── lib/
├── server/          # Backend Express API
│   ├── routes/
│   ├── middleware/
│   └── services/
├── db/              # Database schema and migrations
│   └── schema/
└── docs/            # Documentation
```

## Contributing

See [PROJECT_PLAN.md](./PROJECT_PLAN.md) for development roadmap.

## License

MIT License - see [LICENSE](./LICENSE)
```

---

### 10. Database Setup
- [ ] Set up Neon.tech account (if not done in step 3)
- [ ] Create database project
- [ ] Copy connection string to `.env`
- [ ] Test connection (will do in Week 2 when we create schema)

---

## Verification Checklist

Before moving to Week 2, verify:

- [ ] `npm run check` passes (TypeScript compiles)
- [ ] `npm install` completes without errors
- [ ] All config files created
- [ ] `.env` file exists locally (NOT committed to git)
- [ ] Database connection string in `.env`
- [ ] README updated
- [ ] Can run `npm run dev` (might have errors since server/ doesn't exist yet - that's OK)

---

## Estimated Time

- Configuration files: 1-2 hours
- Database setup: 30 minutes
- README update: 30 minutes
- Testing: 30 minutes

**Total**: ~3-4 hours

---

## Need Help?

- TypeScript errors? Check `tsconfig.json` paths match your structure
- Database connection issues? Verify `DATABASE_URL` format
- npm install errors? Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

---

## Next Week Preview

Week 2 will focus on designing and implementing the complete database schema. You'll create all the tables needed for users, profiles, messages, matches, regions, etc.

---

**Let's get started!** 🚀
