AI Income Systems Lab — Lead Magnet Landing Page
This is the lead magnet landing page for AI Income Systems Lab — hosted on Netlify at ai-income-systems.netlify.app.
What this page does
Visitors land on this page and enter their name and email to receive the free guide: "The 5-Tool AI Stack That Builds Real Income Systems" — a 12-page PDF delivered instantly via Google Drive redirect.
Emails are captured and stored in Kit (ConvertKit) under the form: Lead Magnet - Free AI Stack Guide (Form ID: 9525954).
How it works

Visitor submits name and email on the landing page
Email is sent to Kit in the background
Visitor is instantly redirected to the Google Drive PDF
Kit automation fires a follow up email sequence

Tech stack

Frontend: Plain HTML/CSS — single file (index.html)
Hosting: Netlify (auto-deploys from this repo)
Email capture: Kit (ConvertKit)
PDF delivery: Google Drive direct link
Main site: Built on Lovable at ai-income-systems.com

Environment variables

The Netlify function netlify/functions/subscribe.js sends emails to Kit (ConvertKit). It reads the Kit API key from an environment variable — no key is stored in the repo.

Set the API key in Netlify: Site settings → Environment variables → Add a variable
Key: KIT_API_KEY (CONVERTKIT_API_KEY is also accepted as a fallback)
Value: your Kit API key from https://app.kit.com (Settings → Advanced → API)

The function returns HTTP 500 if the variable is not set.

To update the landing page

Edit index.html directly in GitHub
Commit changes
Netlify auto-deploys within 30 seconds

Links

Live landing page: https://ai-income-systems.netlify.app
Main site: https://ai-income-systems.com
Kit dashboard: https://app.kit.com
