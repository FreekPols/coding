import os
import re
import yaml
from pathlib import Path

directory = Path(".")

def get_frontmatter(src_path: Path):
    try:
        text = src_path.read_text(encoding="utf-8")
        match = re.search(r"^---\s*(.*?)---", text, re.DOTALL)
        if not match:
            return None
        return yaml.safe_load(match.group(1))
    except Exception:
        return None

def find_markdown_frontmatter(directory: Path):
    for root, dirs, files in os.walk(directory):
        for name in files:
            if name.endswith(".md"):
                path = Path(root) / name   
                fm = get_frontmatter(path) 
                print(path, fm)

find_markdown_frontmatter(directory)
