<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Verified company facts live in `src/data/company.ts` and image references in `src/data/images.ts`; pages read from there so copy stays consistent and auditable against the company profile.
- Shared site chrome (header, footer, CTA, section heading) lives in `src/components/site/`; each content section is its own route for SEO.
- `src/test/company-data.test.ts` guards against the excluded website/contact details reappearing in source.
- Client UI dependencies are listed in `optimizeDeps.include` in `vite.config.ts`; add new ones there so the dev preview never re-optimizes mid-session and loads duplicate React.
- All site images (logo included) are bundled from `src/assets/` via imports, never `lovable-assets` pointers, because the site is also deployed to hosts like Vercel where `/__l5e/` URLs do not exist.
- `vite.config.ts` sets `nitro: { preset: "node-server" }` so a plain `vite build` on a normal machine produces a Node-runnable server; Lovable's own build overrides that preset, so preview and publish still target its hosting.
