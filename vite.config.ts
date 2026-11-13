// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Local `vite build` outside Lovable targets plain Node (`.output/server/index.mjs`).
  // Lovable's own build overrides this to its Cloudflare target, so preview/publish are unaffected.
  nitro: { preset: "node-server" },
  vite: {
    // Pre-bundle UI deps up front: on-the-fly discovery re-optimizes mid-session and can load two
    // React copies ("Cannot read properties of null (reading 'useState')").
    optimizeDeps: {
      include: [
        "lucide-react",
        "@radix-ui/react-slot",
        "@radix-ui/react-tabs",
        "@radix-ui/react-dialog",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
      ],
    },
  },
});
