# Krishna Enterprises website

Prestige Authorised Service Center, Bhopal. Plain HTML, CSS and JavaScript (no build step, no dependencies).

## Run
Open `index.html` in a browser (Chrome recommended). For a local server in VS Code use the Live Server extension.
Google Fonts (Plus Jakarta Sans) needs an internet connection.

## Folder
- index.html  : page structure and all text content
- css/styles.css : all styling (navbar glass, hero, sections, footer)
- js/script.js : all behaviour (hero wave canvas, brand grid, journey scroll, reviews carousel, forms, footer logo reveal)
- assets/logo.jpg : K logo used in the navbar and footer
- assets/brands/ : 24 brand logos used in the "Brands we work with" grid
- assets/collage.jpg : brand collage revealed inside the big KRISHNA text in the footer

## Things you will edit often
- Phone / WhatsApp number: search for 919425681719 in index.html and js/script.js.
- Forms: they open WhatsApp with a ready message (no backend). Message format is in function `wa()` in js/script.js.
- Reviews: cards with class `rk` in index.html (section id="reviews"). Copy a card, change name, text and the Google review link.
- Brands: replace images in assets/brands/ (keep the same file names) or edit the `.bt` buttons in index.html.
- Social links: footer section at the bottom of index.html (Instagram is added; add YouTube the same way).

## Deploy
Upload the whole folder to Netlify, Vercel or GitHub Pages (drag and drop the folder).

## Rules for content
Only Prestige is an authorised brand. Do not claim authorisation for other brands. Keep the disclaimer text in the brands section and footer.
