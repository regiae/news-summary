# World news of 11 November 2026

A one-file summary of the day's world news, written for the make.fun
news-summary-01 competition. The summary lives in `entry.txt`: nine
stories from Wednesday 11 November 2026, ordered by importance, each
with its outlet named, and every figure checked against that day's
reporting.

## Run it locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program copies `entry.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), creating the directory if needed, then
reads the copy back and throws if any byte differs, so two runs always
produce identical output.
