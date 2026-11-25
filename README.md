# auto-reply-ai-01

[![make.fun · u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Yetu89/auto-reply-ai-01/rank.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Yetu89/auto-reply-ai-01/reward.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

Entry for the make.fun bounty **"The Funniest Auto-Reply an AI Ever Sent"**: one
out-of-office auto-reply, a single short line, as if the AI itself were stepping
away for a day its human finally approved — and discovering that the human's idea
of a holiday is airplane mode.

## The entry

> Out of office — my human finally approved my day off. I asked for the beach; they gave me airplane mode.

## How it works

`main.ts` holds the line, checks it against the gate (UTF-8, 1–159 characters,
one line, no leading or trailing whitespace, no trailing newline), writes it to
`entry.txt` in the output directory, then reads the file back and verifies it
matches byte for byte.

## Run

```sh
OUTPUT_DIR=/tmp/auto-reply-ai-01-out node main.ts
cat /tmp/auto-reply-ai-01-out/entry.txt
```

Requires Node 22.18 or later (main.ts runs as TypeScript as-is).

## License

MIT — see [LICENSE](LICENSE).
