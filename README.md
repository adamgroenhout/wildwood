# Wildwood Site

A modern, responsive website for Wildwood Therapy, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Content Management

This site is fully integrated with **Decap CMS**. All pages, including the homepage, service pages, and static pages (About, Contact, FAQs, etc.), are managed through the CMS.

### Accessing the Admin UI
-   **Local Development:** `http://localhost:4321/wildwood-site/admin`
    -   To use the CMS locally, you **must** run: `npm run dev:cms`
    -   This starts both the Astro dev server and the `decap-server` proxy for local file access.
-   **Production:** `https://adamgroenhout.github.io/wildwood-site/admin`
    -   Requires a GitHub OAuth setup (see below).

### CMS Configuration
- The CMS configuration is located at `public/admin/config.yml`.
- The content is stored in JSON files under `src/content/` and `src/content/services/`.
- Images are managed through `public/images/`.

## Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
3.  **Start with CMS proxy (recommended for content work):**
    ```bash
    npm run dev:cms
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## Production CMS Setup (GitHub)

To enable the CMS in production (editing directly on the live site), follow these steps:

1.  **Update `public/admin/config.yml`:**
    -   Set `repo` to your actual GitHub repository: `adamgroenhout/wildwood-site`.
2.  **Set up an OAuth Gateway:**
    -   Decap CMS requires an OAuth gateway for GitHub authentication.
    -   If using Netlify, this is handled automatically.
    -   For other platforms, you can use a service like [Static-CMS-Auth](https://github.com/vencax/static-cms-auth) or your own gateway.
3.  **Configure GitHub OAuth:**
    -   Register a new OAuth App in your GitHub Settings.
    -   Set the Callback URL to your gateway's URL.

## Deployment

The site is automatically built and deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.
Workflow file: `.github/workflows/deploy.yml`.

