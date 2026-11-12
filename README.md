# News Summary — 11 November 2026

This entry is a short English summary of the world news of Wednesday,
11 November 2026. The summary lives in `entry.txt`: seven stories, in
order of importance, each with its source named — a prisoner exchange
between Russia and Ukraine, oil prices after the Hormuz attacks, the
Ebola outbreak in Congo, the opening of COP31, US inflation figures,
the Hegseth impeachment vote in the US House, and a bus crash in
Seongnam, South Korea.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads the `entry.txt` sitting next to it and writes it
unchanged into the output directory (or `/output` when
`MAKEFUN_OUTPUT_DIR` is not set). The output is byte-identical to the
file in this repository, so running it twice always gives the same
result. It uses only the Node standard library.
