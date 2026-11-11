"""Copy the sibling summary (entry.txt) to the output directory.

Deterministic: the same input file always produces the same bytes.
Standard library only, no network access.
"""

import os


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(here, "entry.txt"), "r", encoding="utf-8") as fh:
        text = fh.read()
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "entry.txt"), "w", encoding="utf-8", newline="") as fh:
        fh.write(text)


if __name__ == "__main__":
    main()
