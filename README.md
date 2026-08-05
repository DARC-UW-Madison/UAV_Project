# DroneWeb

Static project website for the drone-induced distraction construction safety research project.

The publishable GitHub Pages site is in `docs/`.

## Preview

```bash
python3 -m http.server 8787 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8787`.

## GitHub Pages

Use GitHub Pages with `Deploy from a branch`, then select the target branch and `/docs` as the publishing folder.

`Defense Slides.pptx` is intentionally ignored because it is too large for a normal GitHub commit.
