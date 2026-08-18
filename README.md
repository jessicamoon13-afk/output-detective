# Output Detective

**Output Detective** is a single-page interactive review game for Unit 8: Integration & Application in Statistical Analysis.

Students practice interpreting statistical output across common analyses, including descriptives, p-values, t-tests, ANOVA, regression, confidence intervals, and reliability statistics.

## Files

- `index.html` — page structure
- `style.css` — visual design and responsive layout
- `script.js` — question bank and game logic

## How to publish with GitHub Pages

1. Create a new GitHub repository. Suggested name: `output-detective`.
2. Upload `index.html`, `style.css`, `script.js`, and this `README.md` to the root of the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save and wait for GitHub to publish the live site.

Your game link will look similar to:

```text
https://yourusername.github.io/output-detective/
```

## Canvas embed code

Replace the `src` value with your live GitHub Pages URL:

```html
<iframe
  src="https://yourusername.github.io/output-detective/"
  width="100%"
  height="900"
  style="border: 0; border-radius: 12px;"
  loading="lazy"
  title="Output Detective: Interpreting Statistical Output">
</iframe>
```

## Instructor notes

The game includes four modes:

- Mixed Case File
- Find the Evidence
- Interpret the Output
- Spot the Problem

Each question provides immediate feedback. The end screen includes a review of each answer.
