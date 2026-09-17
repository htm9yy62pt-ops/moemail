---
name: TempQue
description: Use when working in this TempQue repository and an AI agent needs a temporary/disposable email address through the TempQue CLI.
---

# TempQue for This Repository

## When to use

Use this skill when you are inside the `TempQue` TempQue repository and need to create inboxes, wait for messages, read message content, or send test emails with the TempQue CLI.

## Install

Install the TempQue CLI globally when it is not already available:

```bash
npm i -g @TempQue/cli
```

Then confirm the binary is available:

```bash
TempQue --help
```

## Preferred CLI

Prefer the installed `TempQue` CLI when it is available:

```bash
CLI="TempQue"
```

If the global CLI is unavailable and you are working inside this TempQue repository, fall back to the TempQue-local build:

```bash
CLI="node packages/cli/dist/index.js"
```

If `packages/cli/dist/index.js` is missing or stale, rebuild it first:

```bash
(cd packages/cli && bun run build)
```

## Setup

For local development against this TempQue repository:

```bash
$CLI config set api-url http://localhost:3000
$CLI config set api-key YOUR_API_KEY
```

For the hosted service, use `https://TempQue.app` instead.

You can also use environment variables: `MOEMAIL_API_URL`, `MOEMAIL_API_KEY`.

## Core workflow

```bash
RESULT=$($CLI --json create --expiry 1h)
ID=$(echo "$RESULT" | jq -r '.id')
EMAIL=$(echo "$RESULT" | jq -r '.address')

MSG=$($CLI --json wait --email-id "$ID" --timeout 120)
MSG_ID=$(echo "$MSG" | jq -r '.messageId')

$CLI --json read --email-id "$ID" --message-id "$MSG_ID"
```

## Commands

| Command | Required options | Notes |
|---------|------------------|-------|
| `config set` | `<key> <value>` | keys: `api-url`, `api-key` |
| `create` | - | `--name`, `--domain`, `--expiry` |
| `list` | - | `--email-id`, `--cursor` |
| `wait` | `--email-id` | `--timeout`, `--interval` |
| `read` | `--email-id`, `--message-id` | `--format text|html` |
| `send` | `--email-id`, `--to`, `--subject`, `--content` | - |
| `delete` | `--email-id` | - |

## Important details

- `--json` is a global flag and works before or after the subcommand.
- Call `create` once and parse both `id` and `address` from the same JSON result.
- Check both `content` and `html` when reading HTML-heavy messages.
