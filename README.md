# DroneWeb

Static project website for the drone-induced distraction construction safety research project.

The publishable GitHub Pages site is in `docs/`.

## Preview

```bash
python3 -m http.server 8787 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8787`.

## GitHub Pages

The publish branch has already been prepared as `gh-pages`, with the website files at the branch root.

In GitHub repository settings, use GitHub Pages with `Deploy from a branch`, then select:

- Branch: `gh-pages`
- Folder: `/ (root)`

`Defense Slides.pptx` is intentionally ignored because it is too large for a normal GitHub commit.
