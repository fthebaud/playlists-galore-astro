import { file } from "astro/loaders";
import { z, defineCollection } from "astro:content";

/*
 * COLLECTION STEP 1: CREATING A COLLECTION
 */

const playlistSchema = z.object({
  id: z.string(),
  images: z.array(
    z.object({
      height: z.number(),
      width: z.number(),
      url: z.string(),
    }),
  ),
  pubDate: z.number(),
  name: z.string(),
  tags: z.array(z.string()),
  totalTracks: z.number(),
  url: z.object({
    deezer: z.string(),
    qobuz: z.string(),
    spotify: z.string(),
    tidal: z.string(),
    youtube: z.string(),
  }),
});

const playlists = defineCollection({
  // Where to get the blog posts
  loader: file("./src/data/playlists.json"),
  // How to verify blog post format
  schema: playlistSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = { playlists };
