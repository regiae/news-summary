"""news-summary-01 entry (Python 3.13, standard library only).

The summary is the entry.txt beside this file (1,986 characters, UTF-8,
eight stories); the program copies it to /output/entry.txt (or
$MAKEFUN_OUTPUT_DIR/entry.txt outside the grader), then reads the copy
back and throws if any byte differs, so two runs always produce
identical output. No network is used.
"""

import os
import shutil
from pathlib import Path

HERE = Path(__file__).resolve().parent
SOURCE = HERE / "entry.txt"
OUT_DIR = Path(os.environ.get("MAKEFUN_OUTPUT_DIR", "/output"))
TARGET = OUT_DIR / "entry.txt"


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(SOURCE, TARGET)
    original = SOURCE.read_bytes()
    written = TARGET.read_bytes()
    if original != written:
        raise SystemExit("output does not match entry.txt")
    print(f"wrote {len(written)} bytes to {TARGET}")


if __name__ == "__main__":
    main()
