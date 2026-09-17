# TempQue Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the MoeMail brand to TempQue across the entire application while keeping the moemail.app domain unchanged, and replace the logo with a black-and-white pixel-style envelope + @ symbol design.

**Architecture:** Update all user-facing brand text, metadata, CLI/MCP package naming, and PWA manifest. Replace the existing gradient envelope SVG with a pixel-art style logo using black/white square blocks that echoes the reference pixel character aesthetic.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, next-intl, React, SVG

## Global Constraints

- Keep all domain references as `moemail.app`
- New brand name is exactly `TempQue`
- Logo must be black-and-white pixel style with envelope + @ symbol
- Preserve all existing functionality

---

### Task 1: Core Brand Text Replacement

**Files:**
- Modify: `app/[locale]/layout.tsx`
- Modify: `app/components/ui/logo.tsx`
- Modify: `app/components/ui/brand-header.tsx`
- Modify: `app/i18n/messages/en/metadata.json`
- Modify: `app/i18n/messages/en/common.json`
- Modify: `app/i18n/messages/zh-CN/metadata.json`
- Modify: `app/i18n/messages/zh-CN/common.json`
- Modify: `app/i18n/messages/zh-TW/metadata.json`
- Modify: `app/i18n/messages/zh-TW/common.json`
- Modify: `app/i18n/messages/ja/metadata.json`
- Modify: `app/i18n/messages/ja/common.json`
- Modify: `app/i18n/messages/ko/metadata.json`
- Modify: `app/i18n/messages/ko/common.json`

**Interfaces:**
- Consumes: Existing i18n message structure
- Produces: Consistent `TempQue` brand text across all locales

- [ ] **Step 1: Replace brand text in layout metadata**

Update `siteName`, `application-name`, `apple-mobile-web-app-title`, and `authors` to use `TempQue`.

- [ ] **Step 2: Replace brand text in logo components**

Update visible `MoeMail` text in `logo.tsx` and `brand-header.tsx` to `TempQue`.

- [ ] **Step 3: Update i18n metadata and common messages**

Replace `MoeMail` with `TempQue` in all locale JSON files.

- [ ] **Step 4: Verify no visible `MoeMail` text remains in UI files**

Run: `grep -r "MoeMail" app/ --include="*.tsx" --include="*.json"`

### Task 2: Pixel Logo Redesign

**Files:**
- Modify: `app/components/ui/logo.tsx`
- Modify: `app/components/ui/brand-header.tsx`
- Modify: `public/manifest.json`
- Modify: `app/favicon.ico`
- Modify: `public/icons/icon-192x192.png`
- Modify: `public/icons/icon-512x512.png`

**Interfaces:**
- Consumes: Existing Tailwind `text-primary` theming
- Produces: Pixel-art black/white envelope + @ logo with floating square particles

- [ ] **Step 1: Redesign logo SVG as pixel art**

Replace the smooth gradient envelope SVG with square-block pixel art using only black/white colors, incorporating floating pixel squares similar to the reference image.

- [ ] **Step 2: Update PWA manifest name**

Change `name` and `short_name` in `public/manifest.json` from `MoeMail` to `TempQue`.

- [ ] **Step 3: Regenerate favicon and PNG icons**

Create new black-white pixel style `favicon.ico`, `icon-192x192.png`, and `icon-512x512.png`.

### Task 3: Package and CLI Naming

**Files:**
- Modify: `package.json`
- Modify: `packages/core/package.json`
- Modify: `packages/core/src/config.ts`
- Modify: `packages/core/src/api.ts`
- Modify: `wrangler.example.json`
- Modify: `wrangler.email.example.json`
- Modify: `wrangler.cleanup.example.json`

**Interfaces:**
- Consumes: Existing package structure
- Produces: `TempQue` naming in package metadata and CLI config

- [ ] **Step 1: Update root package name**

Change `name` in `package.json` from `moemail` to `tempque`.

- [ ] **Step 2: Update core package naming**

Change `@moemail/core` to `@tempque/core` and update description text.

- [ ] **Step 3: Update CLI config directory and env vars**

Change `.moemail` config directory to `.tempque` while keeping `MOEMAIL_API_URL` and `MOEMAIL_API_KEY` environment variable names for backward compatibility.

- [ ] **Step 4: Update wrangler project names**

Change `name` fields in wrangler configs from `moemail` to `tempque` while keeping database names unchanged.

### Task 4: Documentation Update

**Files:**
- Modify: `README.md`
- Modify: `README.zh-CN.md`
- Modify: `packages/cli/README.md`
- Modify: `packages/mcp/README.md`

**Interfaces:**
- Consumes: Existing documentation structure
- Produces: Updated brand name in documentation

- [ ] **Step 1: Replace brand name in README files**

Update all `MoeMail` / `moemail` brand references to `TempQue` while preserving `moemail.app` domain references.

### Task 5: Verification

**Files:**
- None (verification only)

**Interfaces:**
- Consumes: All modified files
- Produces: Confirmed rebrand with no broken references

- [ ] **Step 1: Search for remaining brand references**

Run: `grep -r "MoeMail\|moemail" . --exclude-dir=node_modules --exclude-dir=.git`

- [ ] **Step 2: Build the project**

Run: `npm run build`

- [ ] **Step 3: Confirm domain references remain moemail.app**

Verify `moemail.app` still appears in API config and layout files.
