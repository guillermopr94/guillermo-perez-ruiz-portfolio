# Security Guidelines

## Environment Variables

This project follows secure environment variable practices:

### ✅ Safe for Client-Side (VITE\_ prefix)

Variables prefixed with `VITE_` are explicitly designed for client-side exposure:

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service identifier (public)
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template identifier (public)
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key (safe to expose)

### ❌ Never Expose in Client Code

The following should **NEVER** be exposed in frontend code:

- API keys for AI services (OpenAI, Gemini, Claude, etc.)
- Database credentials
- Private API tokens
- OAuth secrets
- Encryption keys

## Best Practices

### For Sensitive Operations

If you need to integrate AI features or other sensitive APIs:

1. Create a serverless function (Vercel/Netlify Functions)
2. Store secrets in environment variables on the serverless platform
3. Make API calls from the backend, never from the client
4. Return only necessary data to the frontend

### Example: AI Integration

```
Frontend (React) → Serverless Function (api/generate.ts) → AI API (OpenAI/Gemini)
                      ↑ Secrets stored here
```

### Local Development

- Copy `.env.local.example` to `.env.local`
- Never commit `.env.local` to git (already in `.gitignore` via `*.local`)
- Use placeholder values for local testing
- Get real credentials from project maintainer or create your own

## Security Audit History

### 2026-02-03: Environment Variables Security Audit (#59)

**Issue**: `vite.config.ts` was exposing `GEMINI_API_KEY` in client bundle via `define`  
**Status**: ✅ Fixed  
**Actions taken**:

- Removed unused `GEMINI_API_KEY` exposure from `vite.config.ts`
- Cleaned up `.env.local` with proper documentation
- Confirmed no secrets in production bundle
- Documented security best practices

**Verification**:

```bash
npm run build
# Bundle size: 851.03 kB (gzipped: 256.77 kB)
# No GEMINI references found in dist/
```

## Reporting Security Issues

If you discover a security vulnerability:

1. **DO NOT** open a public issue
2. Email: guillermoperezruiz94@gmail.com
3. Include detailed steps to reproduce
4. Allow reasonable time for a fix before public disclosure
