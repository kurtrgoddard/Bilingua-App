# 🚀 Bilingua.app - Path B Project Plan
## Quality Launch: Fall 2025

**Plan Created**: January 18, 2026
**Launch Strategy**: Path B - Quality Launch
**Timeline**: 26 weeks (6 months)
**Target Private Beta**: May 2025
**Target Public Beta**: July 2025
**Target Official Launch**: September 2025

---

## 📅 LAUNCH MILESTONES

| Milestone | Target Date | Description |
|-----------|-------------|-------------|
| **Foundation Complete** | Week 4 (Mid-Feb) | Database, auth, config ready |
| **MVP Features Complete** | Week 12 (Mid-Apr) | Core features functional |
| **Private Beta Launch** | Week 16 (Mid-May) | 50 users in Moncton |
| **Testing & Security Complete** | Week 20 (Mid-Jun) | All tests passing, security hardened |
| **Public Beta Launch** | Week 22 (Early-Jul) | 500 users NB-wide |
| **Legal & Compliance Complete** | Week 24 (Late-Jul) | Lawyer-reviewed docs |
| **Official Launch** | Week 26 (Early-Sep) | Public release |

---

## 📊 PHASE 1: FOUNDATION (Weeks 1-4)
**Goal**: Unblock development, establish infrastructure

### Week 1: Project Setup & Configuration
**Dates**: Jan 20-26
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `tsconfig.json` with strict mode
- [ ] Create `.env.example` with all required variables
- [ ] Create `drizzle.config.ts` for database migrations
- [ ] Create `tailwind.config.js` with custom theme
- [ ] Create `postcss.config.js`
- [ ] Create `.eslintrc.js` with TypeScript rules
- [ ] Create `.prettierrc` for code formatting
- [ ] Create `.env` locally (DO NOT COMMIT)
- [ ] Set up PostgreSQL database on Neon.tech (free tier)
- [ ] Test database connection
- [ ] Update README.md with setup instructions

**Testing Criteria**:
- ✅ `npm run check` passes (TypeScript compiles)
- ✅ Can connect to database
- ✅ ESLint runs without errors

**Blockers to Resolve**: None

---

### Week 2: Database Schema Design
**Dates**: Jan 27 - Feb 2
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `db/` directory structure
- [ ] Design complete ER diagram for database
- [ ] Create `db/schema/users.ts` (User accounts table)
- [ ] Create `db/schema/profiles.ts` (User profiles, languages, preferences)
- [ ] Create `db/schema/conversations.ts` (Conversation/thread table)
- [ ] Create `db/schema/messages.ts` (Individual messages)
- [ ] Create `db/schema/matches.ts` (User matches/connections)
- [ ] Create `db/schema/regions.ts` (Geographic regions)
- [ ] Create `db/schema/meetups.ts` (Meetup proposals)
- [ ] Create `db/schema/reports.ts` (Safety reports)
- [ ] Create `db/schema/admin.ts` (Admin accounts)
- [ ] Create initial migration
- [ ] Run migration: `npm run db:push`
- [ ] Create `db/seed.ts` with sample data for development
- [ ] Document schema in `db/README.md`

**Testing Criteria**:
- ✅ Migration runs successfully
- ✅ Can insert and query test data
- ✅ Foreign keys and constraints work

**Database Tables Summary**:
```
users (id, email, password_hash, created_at, last_login)
profiles (user_id, first_name, native_language, learning_language, proficiency_level, bio, region, avatar_url)
conversations (id, user1_id, user2_id, created_at, last_message_at)
messages (id, conversation_id, sender_id, content, translated_content, created_at, read_at)
matches (id, user1_id, user2_id, status, matched_at)
regions (id, name_en, name_fr, code, user_count_en, user_count_fr)
meetups (id, conversation_id, proposed_by, location, datetime, status)
reports (id, reporter_id, reported_user_id, message_id, reason, status)
admins (id, email, password_hash, role, created_at)
```

---

### Week 3: Backend Foundation
**Dates**: Feb 3-9
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `server/` directory structure
- [ ] Create `server/index.ts` - Express server setup
- [ ] Set up middleware (CORS, body-parser, cookie-parser, helmet)
- [ ] Create error handling middleware
- [ ] Create request logging middleware
- [ ] Set up session management (express-session + connect-pg-simple)
- [ ] Create `server/routes/` directory
- [ ] Create basic route structure (auth, users, conversations, matches, regions, admin)
- [ ] Create `server/middleware/auth.ts` - Authentication middleware placeholder
- [ ] Create `server/middleware/validation.ts` - Request validation middleware
- [ ] Create `server/utils/logger.ts` - Logging utility
- [ ] Create `server/utils/errors.ts` - Custom error classes
- [ ] Test server starts successfully
- [ ] Test basic route responds
- [ ] Update `package.json` scripts

**Testing Criteria**:
- ✅ Server starts on port 5000
- ✅ Health check endpoint works (`GET /api/health`)
- ✅ CORS configured correctly
- ✅ Error handling returns proper JSON

**Server Structure**:
```
server/
├── index.ts
├── routes/
│   ├── auth.ts
│   ├── users.ts
│   ├── conversations.ts
│   ├── matches.ts
│   ├── regions.ts
│   └── admin.ts
├── middleware/
│   ├── auth.ts
│   ├── validation.ts
│   └── error-handler.ts
├── services/
│   └── (will add in later weeks)
└── utils/
    ├── logger.ts
    └── errors.ts
```

---

### Week 4: Authentication System
**Dates**: Feb 10-16
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Implement Passport.js local strategy
- [ ] Create JWT token generation utility
- [ ] Create JWT token verification utility
- [ ] Implement password hashing with bcrypt (salt rounds: 10)
- [ ] Create `POST /api/auth/signup` endpoint
- [ ] Create `POST /api/auth/login` endpoint
- [ ] Create `POST /api/auth/logout` endpoint
- [ ] Create `GET /api/auth/me` endpoint (get current user)
- [ ] Create `POST /api/auth/refresh` endpoint (refresh JWT)
- [ ] Implement auth middleware (protect routes)
- [ ] Add input validation with Zod schemas
- [ ] Test all auth endpoints with Postman/Thunder Client
- [ ] Document auth API in `docs/API.md`

**Testing Criteria**:
- ✅ Can create new user account
- ✅ Password is hashed (not stored plain text)
- ✅ Can login with correct credentials
- ✅ Login fails with wrong credentials
- ✅ JWT token is returned on login
- ✅ Protected routes require valid token
- ✅ Can logout and invalidate session

**Security Checklist**:
- ✅ Passwords hashed with bcrypt (10+ salt rounds)
- ✅ JWT secret is strong and from environment variable
- ✅ Token expiration set (24 hours)
- ✅ SQL injection prevented (using Drizzle ORM properly)
- ✅ Input validation on all fields

**Validation Schemas**:
```typescript
// Signup
{ email: z.string().email(), password: z.string().min(8), firstName: z.string().min(1) }

// Login
{ email: z.string().email(), password: z.string().min(1) }
```

---

## 📊 PHASE 2: CORE FEATURES (Weeks 5-12)
**Goal**: Implement MVP features (matching, messaging, profiles)

### Week 5: Missing Utilities & Hooks (Part 1)
**Dates**: Feb 17-23
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Create `client/src/lib/utils.ts` - Utility functions
  - [ ] `cn()` function for className merging
  - [ ] Date formatting helpers
  - [ ] Validation helpers
- [ ] Create `client/src/lib/queryClient.ts` - React Query configuration
- [ ] Create `client/src/hooks/use-auth.ts` - Authentication hook
  - [ ] Login function
  - [ ] Logout function
  - [ ] Signup function
  - [ ] Current user state
- [ ] Create `client/src/hooks/use-user.ts` - User data hook
- [ ] Create `client/src/hooks/use-toast.ts` - Toast notification hook
- [ ] Create toast notification component system
- [ ] Test all hooks with mock data

**Testing Criteria**:
- ✅ Can login from frontend
- ✅ Can logout from frontend
- ✅ User state persists on page reload
- ✅ Toast notifications display correctly

---

### Week 6: UI Component Library Completion
**Dates**: Feb 24 - Mar 2
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Install missing Shadcn components via CLI
  - [ ] `npx shadcn@latest add button`
  - [ ] `npx shadcn@latest add input`
  - [ ] `npx shadcn@latest add card`
  - [ ] `npx shadcn@latest add form`
  - [ ] `npx shadcn@latest add select`
  - [ ] `npx shadcn@latest add textarea`
  - [ ] `npx shadcn@latest add checkbox`
  - [ ] `npx shadcn@latest add radio-group`
  - [ ] `npx shadcn@latest add tabs`
  - [ ] `npx shadcn@latest add dialog`
  - [ ] `npx shadcn@latest add dropdown-menu`
  - [ ] `npx shadcn@latest add scroll-area`
  - [ ] `npx shadcn@latest add separator`
  - [ ] `npx shadcn@latest add progress`
  - [ ] `npx shadcn@latest add label`
- [ ] Create `client/src/components/LanguageToggle.tsx`
- [ ] Create `client/src/components/ui/SkipToContent.tsx`
- [ ] Create `client/src/components/ErrorBoundary.tsx`
- [ ] Create `client/src/components/ui/version-footer.tsx`
- [ ] Test all components render correctly
- [ ] Create component showcase page (dev only)

**Testing Criteria**:
- ✅ All components render without errors
- ✅ Components are accessible (keyboard navigation, ARIA)
- ✅ Dark mode works for all components

---

### Week 7: Translation System
**Dates**: Mar 3-9
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Create `client/src/lib/translations.ts` - Translation system
- [ ] Create `client/src/locales/en.json` - English translations
- [ ] Create `client/src/locales/fr.json` - French translations
- [ ] Create `client/src/hooks/use-language.ts` - Language preference hook
- [ ] Translate all existing page content (HomePage, AuthPage, etc.)
- [ ] Translate all UI components
- [ ] Add language switcher to navigation
- [ ] Store language preference in localStorage
- [ ] Test language switching works globally

**Translation Coverage**:
- [ ] All page titles
- [ ] All button labels
- [ ] All form labels and placeholders
- [ ] All error messages
- [ ] All validation messages
- [ ] All navigation items
- [ ] All static content

**Testing Criteria**:
- ✅ Can switch between EN/FR
- ✅ Language preference persists
- ✅ All text translates correctly
- ✅ No missing translation keys

---

### Week 8: User Profile Management
**Dates**: Mar 10-16
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Create `POST /api/users/profile` endpoint (create/update profile)
- [ ] Create `GET /api/users/profile/:id` endpoint (get profile)
- [ ] Create `GET /api/users/me/profile` endpoint (get own profile)
- [ ] Create `PUT /api/users/me/profile` endpoint (update own profile)
- [ ] Create `DELETE /api/users/me` endpoint (delete account)
- [ ] Complete ProfilePage.tsx implementation
  - [ ] Profile picture upload (future: use Cloudinary/S3)
  - [ ] Bio editing
  - [ ] Language preferences
  - [ ] Location/region selection
  - [ ] Learning goals
  - [ ] Interests
- [ ] Create profile completion tracking
- [ ] Add profile validation
- [ ] Test profile CRUD operations

**Testing Criteria**:
- ✅ Can create profile after signup
- ✅ Can update profile information
- ✅ Profile changes persist
- ✅ Profile picture uploads work (if implemented)
- ✅ Validation prevents invalid data

**Profile Data**:
```typescript
{
  firstName: string
  lastName?: string
  nativeLanguage: 'en' | 'fr'
  learningLanguage: 'en' | 'fr'
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced'
  bio: string
  region: string
  interests: string[]
  learningGoals: string
  avatarUrl?: string
}
```

---

### Week 9: Matching Algorithm & Endpoints
**Dates**: Mar 17-23
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Design matching algorithm logic
- [ ] Create `server/services/matching.ts` - Matching service
- [ ] Create `GET /api/matches/suggestions` endpoint
- [ ] Create `POST /api/matches/accept/:userId` endpoint
- [ ] Create `POST /api/matches/reject/:userId` endpoint
- [ ] Create `GET /api/matches` endpoint (get all matches)
- [ ] Create `DELETE /api/matches/:matchId` endpoint (unmatch)
- [ ] Implement matching criteria:
  - [ ] Language pair (EN↔FR)
  - [ ] Region proximity
  - [ ] Proficiency level compatibility
  - [ ] Mutual learning goals
- [ ] Create MatchesPage.tsx UI
- [ ] Create match card component
- [ ] Test matching algorithm with seed data

**Matching Algorithm**:
```
Score Calculation:
- Language pair match: 40 points
- Same region: 30 points
- Compatible proficiency: 20 points
- Shared interests: 10 points

Minimum score to suggest: 50 points
Maximum suggestions per request: 10
```

**Testing Criteria**:
- ✅ Suggestions exclude already matched users
- ✅ Suggestions exclude rejected users
- ✅ Mutual match creates conversation
- ✅ Can accept/reject suggestions
- ✅ Match status updates correctly

---

### Week 10: Real-Time Messaging (Part 1: Infrastructure)
**Dates**: Mar 24-30
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Set up WebSocket server (ws library)
- [ ] Create `server/services/websocket.ts` - WebSocket service
- [ ] Implement WebSocket connection authentication
- [ ] Create connection management (track active connections)
- [ ] Create room/conversation management
- [ ] Create `client/src/hooks/use-websocket.ts` - WebSocket hook
- [ ] Test WebSocket connection establishment
- [ ] Test connection recovery on disconnect

**WebSocket Events**:
```
Client → Server:
- authenticate (token)
- join_conversation (conversationId)
- send_message (conversationId, content)
- typing_start (conversationId)
- typing_stop (conversationId)
- mark_read (messageId)

Server → Client:
- authenticated
- message_received (message)
- typing_indicator (userId, conversationId)
- user_online (userId)
- user_offline (userId)
- error (message)
```

**Testing Criteria**:
- ✅ WebSocket connects successfully
- ✅ Authentication required before sending messages
- ✅ Connection survives page refresh
- ✅ Reconnects automatically on disconnect

---

### Week 11: Real-Time Messaging (Part 2: Features)
**Dates**: Mar 31 - Apr 6
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `POST /api/conversations` endpoint (start conversation)
- [ ] Create `GET /api/conversations` endpoint (list conversations)
- [ ] Create `GET /api/conversations/:id/messages` endpoint
- [ ] Create `POST /api/messages` endpoint (send message)
- [ ] Create `PUT /api/messages/:id/read` endpoint (mark as read)
- [ ] Implement WebSocket message broadcasting
- [ ] Implement typing indicators
- [ ] Implement read receipts
- [ ] Complete MessagesPage.tsx implementation
- [ ] Create message bubble component
- [ ] Create conversation list component
- [ ] Add message persistence to database
- [ ] Test messaging end-to-end

**Testing Criteria**:
- ✅ Can send message to matched user
- ✅ Message appears in real-time for recipient
- ✅ Message persists in database
- ✅ Typing indicators work
- ✅ Read receipts update
- ✅ Message history loads correctly
- ✅ Works with multiple concurrent conversations

**Message Features**:
- Real-time delivery
- Typing indicators
- Read receipts
- Message history
- Conversation list with last message preview
- Unread message count

---

### Week 12: Regional Features & Data
**Dates**: Apr 7-13
**Status**: 🟡 Medium Priority

**Deliverables**:
- [ ] Create `GET /api/regions` endpoint
- [ ] Create `GET /api/regions/:id` endpoint
- [ ] Create `GET /api/regions/:id/stats` endpoint
- [ ] Seed regions database with NB cities:
  - [ ] Fredericton
  - [ ] Moncton
  - [ ] Saint John
  - [ ] Dieppe
  - [ ] Bathurst
  - [ ] Edmundston
  - [ ] Virtual/Remote
- [ ] Create RegionDetailPage.tsx
- [ ] Implement user count tracking by region/language
- [ ] Add region selection to profile
- [ ] Test region filtering in matches

**Region Data Structure**:
```json
{
  "id": 1,
  "name_en": "Moncton",
  "name_fr": "Moncton",
  "code": "moncton",
  "description_en": "New Brunswick's most bilingual city...",
  "description_fr": "La ville la plus bilingue du N.-B...",
  "user_count_en": 42,
  "user_count_fr": 38,
  "coffee_shops": [...],
  "cultural_notes": "..."
}
```

**Testing Criteria**:
- ✅ Can view all regions
- ✅ User counts update automatically
- ✅ Region detail page displays correctly
- ✅ Can filter matches by region

---

## 📊 PHASE 3: SAFETY & ADMIN (Weeks 13-16)
**Goal**: Implement safety features and admin panel

### Week 13: Safety Features (Part 1: Reporting)
**Dates**: Apr 14-20
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `POST /api/reports` endpoint (create report)
- [ ] Create `GET /api/reports` endpoint (admin only)
- [ ] Create `PUT /api/reports/:id` endpoint (update report status)
- [ ] Create report form component
- [ ] Add report button to messages
- [ ] Add report button to profiles
- [ ] Create report categories:
  - [ ] Inappropriate content
  - [ ] Harassment
  - [ ] Spam
  - [ ] Safety concern
  - [ ] Other
- [ ] Send email notification to admin on new report
- [ ] Test reporting flow

**Report Data**:
```typescript
{
  reporter_id: number
  reported_user_id: number
  message_id?: number
  reason: ReportReason
  description: string
  status: 'pending' | 'reviewed' | 'action_taken' | 'dismissed'
}
```

**Testing Criteria**:
- ✅ Can report user
- ✅ Can report specific message
- ✅ Report saves to database
- ✅ Admin receives notification

---

### Week 14: Safety Features (Part 2: Block/Unmatch)
**Dates**: Apr 21-27
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Create `POST /api/users/block/:userId` endpoint
- [ ] Create `DELETE /api/users/block/:userId` endpoint (unblock)
- [ ] Create `GET /api/users/blocked` endpoint (list blocked users)
- [ ] Create block user functionality in UI
- [ ] Prevent messaging blocked users
- [ ] Hide blocked users from matches
- [ ] Create unmatch functionality
- [ ] Create SafetyTips component
- [ ] Add safety tips to messaging page
- [ ] Add safety tips to meetup proposals
- [ ] Create safety guidelines page
- [ ] Test blocking flow

**Safety Tips Content**:
- Meet in public coffee shops
- Tell a friend where you're going
- Stay in public areas
- Trust your instincts
- Report concerns immediately
- Don't share personal information early

**Testing Criteria**:
- ✅ Can block user
- ✅ Blocked user can't send messages
- ✅ Blocked user doesn't appear in matches
- ✅ Can unblock user
- ✅ Safety tips display correctly

---

### Week 15: Admin Panel (Part 1: Authentication)
**Dates**: Apr 28 - May 4
**Status**: 🟡 Medium Priority

**Deliverables**:
- [ ] Create `POST /api/admin/auth/login` endpoint
- [ ] Create admin authentication middleware
- [ ] Create AdminLoginPage.tsx
- [ ] Create `client/src/hooks/use-admin.ts` hook
- [ ] Create admin role system (admin, super_admin)
- [ ] Seed admin account in database
- [ ] Protect all admin routes
- [ ] Create `client/src/components/admin/AdminLayout.tsx`
- [ ] Test admin login

**Admin Roles**:
- `admin`: Can view reports, moderate content, view analytics
- `super_admin`: All admin permissions + user management, region management

**Testing Criteria**:
- ✅ Can login as admin
- ✅ Non-admin users can't access admin pages
- ✅ Admin token separate from user token
- ✅ Admin layout renders correctly

---

### Week 16: Admin Panel (Part 2: Core Features)
**Dates**: May 5-11
**Status**: 🟡 Medium Priority
**🎯 MILESTONE: PRIVATE BETA LAUNCH**

**Deliverables**:
- [ ] Create UsersPage.tsx (admin)
  - [ ] User list with search/filter
  - [ ] User detail view
  - [ ] Suspend/unsuspend user
  - [ ] Delete user
- [ ] Create ModerationPage.tsx
  - [ ] Report queue
  - [ ] Review reports
  - [ ] Take action on reports
- [ ] Create AnalyticsPage.tsx (basic)
  - [ ] Total users
  - [ ] Active users
  - [ ] Total matches
  - [ ] Total messages
  - [ ] Users by region
  - [ ] Users by language
- [ ] Create `GET /api/admin/analytics` endpoint
- [ ] Create `PUT /api/admin/users/:id/suspend` endpoint
- [ ] Create `DELETE /api/admin/users/:id` endpoint
- [ ] Test admin features

**Testing Criteria**:
- ✅ Can view all users
- ✅ Can suspend user
- ✅ Suspended user can't login
- ✅ Can review reports
- ✅ Analytics display correctly

---

## 🚀 PRIVATE BETA LAUNCH (Week 16)
**Target Date**: May 12, 2025
**Location**: Moncton, New Brunswick
**Target Users**: 50 beta testers

**Pre-Launch Checklist**:
- [ ] All core features functional (auth, profiles, matching, messaging)
- [ ] Safety features implemented (reporting, blocking)
- [ ] Admin panel functional
- [ ] Basic legal docs in place (interim Privacy Policy & Terms)
- [ ] Database backup configured
- [ ] Error monitoring set up (Sentry free tier)
- [ ] Beta feedback form created
- [ ] Support email set up

**Beta Recruitment**:
- [ ] University of Moncton outreach
- [ ] Local coffee shop partnerships
- [ ] French immersion program outreach
- [ ] Social media announcement (limited)
- [ ] Friends and family

**Beta Success Metrics**:
- 50 signups
- 25+ active users (50% activation)
- 15+ matches made
- 50+ messages sent
- 5+ in-person meetups
- NPS score collected

---

## 📊 PHASE 4: TESTING & POLISH (Weeks 17-20)
**Goal**: Achieve production-quality code

### Week 17: Unit Testing (Part 1)
**Dates**: May 12-18
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Set up Vitest configuration
- [ ] Create testing utilities and mocks
- [ ] Write tests for authentication hooks
  - [ ] `use-auth.test.ts`
  - [ ] `use-user.test.ts`
- [ ] Write tests for utility functions
  - [ ] `utils.test.ts`
- [ ] Write tests for UI components
  - [ ] Button, Input, Card, Form components
  - [ ] LanguageToggle
  - [ ] ErrorBoundary
- [ ] Write tests for page components
  - [ ] AuthPage.test.tsx
  - [ ] SignupPage.test.tsx
- [ ] Target: 40%+ code coverage

**Testing Criteria**:
- ✅ All tests pass
- ✅ Coverage report generated
- ✅ No critical uncovered code paths

---

### Week 18: Integration & E2E Testing
**Dates**: May 19-25
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Set up API testing with Supertest
- [ ] Write API integration tests
  - [ ] Auth endpoints test
  - [ ] User/profile endpoints test
  - [ ] Matching endpoints test
  - [ ] Messaging endpoints test
  - [ ] Admin endpoints test
- [ ] Set up Playwright or Cypress for E2E
- [ ] Write E2E tests for critical flows
  - [ ] Signup → Profile creation → Matching → Messaging
  - [ ] Login → View matches → Accept match → Send message
  - [ ] Report user flow
  - [ ] Block user flow
- [ ] Test WebSocket connections
- [ ] Target: All critical paths covered

**Testing Criteria**:
- ✅ All API tests pass
- ✅ All E2E tests pass
- ✅ WebSocket tests pass
- ✅ 60%+ overall code coverage

---

### Week 19: Security Hardening
**Dates**: May 26 - Jun 1
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Implement rate limiting on all endpoints
  - [ ] Auth endpoints: 5 attempts/15 min
  - [ ] API endpoints: 100 requests/15 min
  - [ ] WebSocket: 50 messages/min
- [ ] Add input sanitization (XSS prevention)
- [ ] Implement CSRF protection
- [ ] Add SQL injection prevention audit
- [ ] Set up security headers (helmet.js)
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] Strict-Transport-Security
  - [ ] Content-Security-Policy
- [ ] Implement password strength requirements
  - [ ] Min 8 characters
  - [ ] Require uppercase, lowercase, number
  - [ ] Check against common passwords
- [ ] Add account lockout after 5 failed login attempts
- [ ] Implement session timeout (24 hours)
- [ ] Add audit logging for sensitive actions
- [ ] Run security audit with npm audit
- [ ] Test all security measures

**Security Checklist**:
- [ ] OWASP Top 10 reviewed
- [ ] All passwords hashed
- [ ] No secrets in code
- [ ] All inputs validated
- [ ] Rate limiting active
- [ ] HTTPS enforced (production)
- [ ] CORS properly configured
- [ ] Error messages don't leak sensitive info

**Testing Criteria**:
- ✅ Rate limiting blocks excessive requests
- ✅ XSS attempts fail
- ✅ CSRF protection works
- ✅ Account locks after failed attempts
- ✅ npm audit shows no high/critical vulnerabilities

---

### Week 20: Accessibility Audit & Improvements
**Dates**: Jun 2-8
**Status**: 🟠 High Priority

**Deliverables**:
- [ ] Run axe DevTools on all pages
- [ ] Fix all critical accessibility issues
- [ ] Test keyboard navigation on all pages
- [ ] Test with screen reader (NVDA or JAWS)
- [ ] Ensure all images have alt text
- [ ] Ensure all forms have proper labels
- [ ] Test color contrast ratios (WCAG AA minimum)
- [ ] Add skip navigation links
- [ ] Test with browser zoom (200%+)
- [ ] Create accessibility statement page
- [ ] Document accessibility features
- [ ] Test with users who have disabilities (if possible)

**WCAG 2.1 AA Compliance Checklist**:
- [ ] Perceivable: Text alternatives, captions, adaptable content
- [ ] Operable: Keyboard accessible, enough time, seizure prevention
- [ ] Understandable: Readable, predictable, input assistance
- [ ] Robust: Compatible with assistive technologies

**Testing Criteria**:
- ✅ Zero critical axe violations
- ✅ All pages keyboard navigable
- ✅ Screen reader announces all content correctly
- ✅ Color contrast meets WCAG AA
- ✅ Forms are fully accessible

---

## 📊 PHASE 5: DEPLOYMENT & LEGAL (Weeks 21-24)
**Goal**: Production deployment and legal compliance

### Week 21: Deployment Infrastructure
**Dates**: Jun 9-15
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Choose production hosting platform
  - [ ] Recommended: Railway, Render, or Fly.io
  - [ ] Alternative: DigitalOcean App Platform
- [ ] Create production PostgreSQL database
  - [ ] Recommended: Neon, Supabase, or Railway Postgres
- [ ] Set up production environment variables
- [ ] Create `Dockerfile` for containerization
- [ ] Create `docker-compose.yml` for local production testing
- [ ] Set up CI/CD pipeline (GitHub Actions)
  - [ ] Run tests on PR
  - [ ] Deploy to staging on merge to `develop`
  - [ ] Deploy to production on merge to `main`
- [ ] Configure SSL certificate (Let's Encrypt)
- [ ] Set up custom domain (bilingua.app)
- [ ] Configure DNS
- [ ] Set up CDN (Cloudflare)
- [ ] Create staging environment
- [ ] Test production build locally
- [ ] Deploy to staging
- [ ] Test staging deployment

**GitHub Actions Workflow**:
```yaml
name: CI/CD
on: [push, pull_request]
jobs:
  test:
    - npm run check
    - npm run test
  deploy-staging:
    - if: branch == develop
    - deploy to staging
  deploy-production:
    - if: branch == main
    - deploy to production
```

**Testing Criteria**:
- ✅ Production build succeeds
- ✅ Staging environment works
- ✅ CI/CD pipeline runs successfully
- ✅ SSL certificate valid
- ✅ Custom domain resolves

---

### Week 22: Production Launch & Monitoring
**Dates**: Jun 16-22
**Status**: 🔴 Critical Path
**🎯 MILESTONE: PUBLIC BETA LAUNCH**

**Deliverables**:
- [ ] Deploy to production
- [ ] Set up error monitoring (Sentry)
- [ ] Set up application monitoring
- [ ] Set up database backup automation (daily)
- [ ] Configure log aggregation
- [ ] Set up uptime monitoring (UptimeRobot or similar)
- [ ] Create status page (status.bilingua.app)
- [ ] Set up alert notifications (email/Slack)
- [ ] Load testing (Artillery or k6)
- [ ] Create incident response plan
- [ ] Create rollback procedure
- [ ] Test database backup restore
- [ ] Document production architecture

**Monitoring Setup**:
- [ ] Sentry: Error tracking
- [ ] LogTail or Papertrail: Log aggregation
- [ ] UptimeRobot: Uptime monitoring
- [ ] Status page: Public status
- [ ] Database automated backups

**Testing Criteria**:
- ✅ Production application accessible
- ✅ Errors logged to Sentry
- ✅ Uptime monitoring active
- ✅ Backups running daily
- ✅ Can restore from backup

---

## 🚀 PUBLIC BETA LAUNCH (Week 22)
**Target Date**: June 23, 2025
**Location**: New Brunswick-wide
**Target Users**: 500 users

**Pre-Launch Checklist**:
- [ ] All features tested in production
- [ ] Monitoring and logging active
- [ ] Database backups configured
- [ ] Legal docs reviewed (interim)
- [ ] Support system ready
- [ ] Marketing materials prepared
- [ ] Beta feedback system in place
- [ ] Performance tested under load

**Public Beta Recruitment**:
- [ ] Social media campaign (Facebook, Instagram, Twitter)
- [ ] University partnerships (UNB, U de Moncton, Mount Allison)
- [ ] Government outreach (ONB - Office of the New Brunswick Official Languages Commissioner)
- [ ] Coffee shop partnerships (posters, QR codes)
- [ ] Local media (radio, newspapers)
- [ ] Community centers and libraries
- [ ] Language schools and programs

**Public Beta Success Metrics**:
- 500 signups
- 250+ active users (50% activation)
- 100+ matches made
- 500+ messages sent
- 25+ in-person meetups
- <1% error rate
- <2s page load time
- NPS score 40+

---

### Week 23: Performance Optimization
**Dates**: Jun 23-29
**Status**: 🟡 Medium Priority

**Deliverables**:
- [ ] Analyze production performance data
- [ ] Optimize database queries (add indexes)
- [ ] Implement database connection pooling
- [ ] Add caching layer (Redis if needed)
- [ ] Optimize bundle size (code splitting)
- [ ] Optimize images (WebP format, lazy loading)
- [ ] Add service worker for offline support
- [ ] Implement pagination for large lists
- [ ] Optimize WebSocket performance
- [ ] Run Lighthouse audit
- [ ] Achieve Lighthouse scores:
  - [ ] Performance: 90+
  - [ ] Accessibility: 95+
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+

**Performance Targets**:
- Page load time: <2s
- Time to Interactive: <3s
- First Contentful Paint: <1.5s
- API response time: <200ms (p95)
- WebSocket latency: <100ms

**Testing Criteria**:
- ✅ Lighthouse scores meet targets
- ✅ Page load time <2s
- ✅ API responses <200ms
- ✅ Database queries optimized

---

### Week 24: Legal & Compliance
**Dates**: Jun 30 - Jul 6
**Status**: 🔴 Critical Path

**Deliverables**:
- [ ] Hire lawyer for legal review (budget: $1,000-2,000)
- [ ] Complete Privacy Policy
  - [ ] PIPEDA compliance (Canada)
  - [ ] Data collection disclosure
  - [ ] Data usage disclosure
  - [ ] Data retention policy
  - [ ] User rights (access, deletion, portability)
  - [ ] Third-party services disclosure
  - [ ] Contact information
- [ ] Complete Terms of Service
  - [ ] User obligations
  - [ ] Prohibited conduct
  - [ ] Liability limitations
  - [ ] Dispute resolution
  - [ ] Governing law
  - [ ] Account termination
- [ ] Create Cookie Policy
- [ ] Add cookie consent banner
- [ ] Implement data export feature (GDPR/PIPEDA)
- [ ] Implement account deletion feature
- [ ] Add age verification (18+)
- [ ] Create content moderation guidelines
- [ ] Translate all legal docs to French
- [ ] Get legal docs reviewed and approved
- [ ] Publish legal docs

**Legal Compliance Checklist**:
- [ ] PIPEDA (Canada privacy law)
- [ ] GDPR (if any EU users)
- [ ] CASL (Canadian anti-spam)
- [ ] Age verification (18+)
- [ ] Liability limitations
- [ ] User content ownership
- [ ] Data breach notification plan

**Testing Criteria**:
- ✅ Lawyer approves all documents
- ✅ Cookie banner works
- ✅ Users can export their data
- ✅ Users can delete their accounts
- ✅ All legal docs translated

---

## 📊 PHASE 6: LAUNCH PREP (Weeks 25-26)
**Goal**: Final polish and official launch

### Week 25: Documentation & Support
**Dates**: Jul 7-13
**Status**: 🟡 Medium Priority

**Deliverables**:
- [ ] Create comprehensive README.md
- [ ] Create CONTRIBUTING.md
- [ ] Create user documentation
  - [ ] How to create a profile
  - [ ] How to find matches
  - [ ] How to send messages
  - [ ] How to propose meetups
  - [ ] Safety guidelines
  - [ ] FAQ
- [ ] Create admin documentation
  - [ ] How to moderate content
  - [ ] How to review reports
  - [ ] How to manage users
- [ ] Create API documentation (if exposing API)
- [ ] Set up customer support system
  - [ ] Support email (support@bilingua.app)
  - [ ] Email templates (welcome, password reset, etc.)
  - [ ] Support ticket system (simple: email-based)
- [ ] Create onboarding tutorial
- [ ] Create help center
- [ ] Create video tutorials (optional)

**Documentation Coverage**:
- User guide
- Admin guide
- Developer documentation
- API documentation
- Setup guide
- Deployment guide
- Troubleshooting guide

**Testing Criteria**:
- ✅ Documentation is complete and clear
- ✅ Support email works
- ✅ Email templates formatted correctly
- ✅ Help center accessible

---

### Week 26: Final QA & Official Launch
**Dates**: Jul 14-20
**Status**: 🔴 Critical Path
**🎯 MILESTONE: OFFICIAL LAUNCH**

**Deliverables**:
- [ ] Full regression testing
  - [ ] Test all user flows
  - [ ] Test all admin features
  - [ ] Test all API endpoints
  - [ ] Test WebSocket connections
  - [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
  - [ ] Test on mobile devices (iOS, Android)
  - [ ] Test on different screen sizes
- [ ] Security audit (final)
- [ ] Performance testing (load test with expected traffic)
- [ ] Accessibility audit (final)
- [ ] Legal review (final)
- [ ] Content review (copy, translations)
- [ ] Create launch announcement
- [ ] Prepare press release for local media
- [ ] Prepare social media content (2 weeks worth)
- [ ] Set up analytics tracking
- [ ] Create launch day plan
- [ ] Create post-launch monitoring plan
- [ ] **LAUNCH** 🚀

**Launch Day Checklist**:
- [ ] Deploy to production
- [ ] Run smoke tests
- [ ] Send launch email to beta users
- [ ] Post on social media
- [ ] Send press release to local media
- [ ] Monitor error rates
- [ ] Monitor server performance
- [ ] Be available for support

**Launch Success Metrics (First Week)**:
- 1,000+ signups
- 500+ active users (50% activation)
- 200+ matches made
- 1,000+ messages sent
- 50+ in-person meetups
- <0.5% error rate
- <2s page load time
- 99%+ uptime
- NPS score 50+

---

## 🚀 OFFICIAL LAUNCH
**Target Date**: July 21, 2025 (or September 2025 with buffer)
**Location**: New Brunswick-wide
**Target**: General public

---

## 📊 POST-LAUNCH (Weeks 27-30)
**Goal**: Monitor, iterate, improve

### Week 27-28: Monitor & Iterate
- [ ] Monitor user feedback
- [ ] Fix critical bugs immediately
- [ ] Address user complaints
- [ ] Iterate on features based on feedback
- [ ] Analyze user behavior
- [ ] Optimize conversion funnel
- [ ] Improve onboarding based on drop-off points

### Week 29-30: Growth & Marketing
- [ ] Implement referral program
- [ ] Create content marketing strategy
- [ ] Partner with local organizations
- [ ] Plan feature roadmap for next quarter
- [ ] Consider expansion to other provinces

---

## 📈 KEY PERFORMANCE INDICATORS (KPIs)

### Product Metrics
- **User Activation**: 50%+ (completed profile)
- **Matching Rate**: 60%+ (users who get matched)
- **Messaging Rate**: 40%+ (matched users who message)
- **Meetup Rate**: 20%+ (users who meet in person)
- **7-Day Retention**: 40%+
- **30-Day Retention**: 25%+
- **NPS Score**: 40+

### Technical Metrics
- **Uptime**: 99.5%+
- **Error Rate**: <1%
- **Page Load Time**: <2s
- **API Response Time**: <200ms (p95)
- **WebSocket Latency**: <100ms

### Business Metrics
- **Total Users**: 2,000+ (6 months post-launch)
- **Active Users**: 800+ (40% of total)
- **Matches Created**: 500+
- **Messages Sent**: 10,000+
- **In-Person Meetups**: 100+

---

## 🛠️ TOOLS & SERVICES RECOMMENDATIONS

### Development
- **IDE**: VS Code with extensions (ESLint, Prettier, Tailwind CSS IntelliSense)
- **API Testing**: Thunder Client or Postman
- **Database Tool**: TablePlus or DBeaver
- **Version Control**: Git + GitHub

### Hosting & Infrastructure
- **Application Hosting**: Railway (recommended), Render, or Fly.io
- **Database**: Neon (recommended), Supabase, or Railway PostgreSQL
- **Domain**: Namecheap or Google Domains
- **CDN**: Cloudflare (free tier)
- **Email**: SendGrid (free tier), Resend, or AWS SES

### Monitoring & Logging
- **Error Tracking**: Sentry (free tier: 5K events/month)
- **Analytics**: Plausible Analytics (privacy-focused) or Umami
- **Uptime Monitoring**: UptimeRobot (free tier)
- **Logs**: LogTail or Papertrail (free tier)

### Communication
- **Customer Support**: Email-based initially, then Intercom or Crisp
- **Email Marketing**: Mailchimp (free tier: 500 contacts) or ConvertKit

### Legal
- **Privacy Policy Generator**: iubenda or TermsFeed (starting point)
- **Lawyer**: Local New Brunswick lawyer familiar with tech/privacy

---

## 💰 ESTIMATED COSTS

### One-Time Costs
| Item | Cost |
|------|------|
| Domain (1 year) | $15 |
| Legal review (lawyer) | $1,000-2,000 |
| **Total One-Time** | **$1,015-2,015** |

### Monthly Costs (First 6 Months)
| Item | Cost |
|------|------|
| Hosting (Railway) | $25-50 |
| Database (Neon) | $0-25 |
| Error Monitoring (Sentry) | $0 (free tier) |
| Email (SendGrid) | $0 (free tier) |
| CDN (Cloudflare) | $0 (free tier) |
| Analytics | $0-9 |
| **Total Monthly** | **$25-84** |

### Monthly Costs (After Growth - 500+ users)
| Item | Cost |
|------|------|
| Hosting | $50-200 |
| Database | $25-100 |
| Error Monitoring | $26 |
| Email | $10-50 |
| CDN | $0-20 |
| Analytics | $9 |
| Support | $0-50 |
| **Total Monthly** | **$120-455** |

**First Year Total**: ~$2,500-6,000

---

## ⚠️ RISK MITIGATION

### Technical Risks
| Risk | Mitigation |
|------|------------|
| Database failure | Daily backups, tested restore procedure |
| Server downtime | Uptime monitoring, incident response plan |
| Security breach | Regular security audits, penetration testing |
| WebSocket reliability | Fallback to polling, reconnection logic |
| Scaling issues | Start small, monitor performance, plan for growth |

### Business Risks
| Risk | Mitigation |
|------|------------|
| Low user adoption | Start hyper-local, partner with organizations |
| Safety incidents | Clear guidelines, reporting system, moderation |
| Legal issues | Lawyer review, liability waivers, insurance |
| Competitor launch | Focus on local differentiation, cultural angle |
| Funding shortage | Bootstrap, keep costs low, consider grants |

### Project Risks
| Risk | Mitigation |
|------|------------|
| Timeline slippage | Weekly check-ins, adjust scope if needed |
| Developer burnout | Sustainable pace, buffer weeks, ask for help |
| Scope creep | Stick to plan, defer non-MVP features |
| Technical blockers | Budget extra time, ask community/AI for help |

---

## 📞 SUPPORT & RESOURCES

### Getting Help
- **Technical Questions**: Stack Overflow, Reddit (r/webdev, r/reactjs)
- **Legal Questions**: Consult local lawyer
- **Design Questions**: r/web_design, Designer News
- **Community**: Indie Hackers, Startup School

### Learning Resources
- **WebSockets**: socket.io documentation
- **Authentication**: Passport.js docs, Auth0 blog
- **Drizzle ORM**: Drizzle documentation
- **Testing**: Vitest documentation, Kent C. Dodds blog
- **Accessibility**: WebAIM, A11y Project

---

## ✅ WEEKLY PROGRESS TRACKING

Use this template for weekly check-ins:

```markdown
### Week X Progress Report
**Date**: [Date Range]
**Status**: On Track / At Risk / Blocked

**Completed**:
- [x] Task 1
- [x] Task 2

**In Progress**:
- [ ] Task 3 (50% complete)

**Blocked**:
- [ ] Task 4 (Reason: waiting for X)

**Next Week**:
- [ ] Task 5
- [ ] Task 6

**Risks**:
- Risk 1 and mitigation

**Learnings**:
- Key learning or insight

**Help Needed**:
- Specific question or blocker
```

---

## 🎯 SUCCESS CRITERIA

### Private Beta (Week 16)
- [ ] 50 signups
- [ ] 25+ active users
- [ ] 15+ matches
- [ ] 50+ messages
- [ ] 5+ meetups
- [ ] <5% error rate
- [ ] Positive beta feedback

### Public Beta (Week 22)
- [ ] 500 signups
- [ ] 250+ active users
- [ ] 100+ matches
- [ ] 500+ messages
- [ ] 25+ meetups
- [ ] <1% error rate
- [ ] NPS 40+

### Official Launch (Week 26)
- [ ] 1,000+ signups (first week)
- [ ] 500+ active users
- [ ] 200+ matches
- [ ] 1,000+ messages
- [ ] 50+ meetups
- [ ] <0.5% error rate
- [ ] 99%+ uptime
- [ ] NPS 50+

---

## 📅 IMPORTANT DATES

| Date | Milestone |
|------|-----------|
| Jan 26, 2026 | Week 1 Complete: Configuration done |
| Feb 16, 2026 | Week 4 Complete: Auth system working |
| Apr 13, 2026 | Week 12 Complete: MVP features done |
| May 12, 2026 | **PRIVATE BETA LAUNCH** (50 users, Moncton) |
| Jun 22, 2026 | **PUBLIC BETA LAUNCH** (500 users, NB-wide) |
| Jul 20, 2026 | **OFFICIAL LAUNCH** (General public) |

**Note**: Dates assume starting January 20, 2026. Adjust based on actual start date.

---

## 🚀 LET'S BUILD THIS!

This plan is your roadmap. Adjust as needed, but stay focused on the goal: launching a quality product that serves New Brunswick's bilingual community.

**Remember**:
- Quality over speed
- User safety is paramount
- Iterate based on feedback
- Don't be afraid to ask for help
- Celebrate small wins

**You've got this!** 💪

---

*Last Updated: January 18, 2026*
