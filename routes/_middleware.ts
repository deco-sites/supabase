import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 409,
  site: "supabase",
  domains: ["supabase.deco.site"],
});