// Import the glob loader
import { glob, file } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

/*
 * COLLECTION STEP 1: CREATING A COLLECTION (called "articles")
 */

// Define a `loader` and `schema` for each collection
const articles = defineCollection({
  // Where to get the blog posts
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/articles" }),
  // How to verify blog post format
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const playlists = defineCollection({
  // Where to get the blog posts
  loader: file("./src/data/playlists.json" ),
  // How to verify blog post format
  schema: z.object({
    name: z.string(),
  }),
});


// Export a single `collections` object to register your collection(s)
export const collections = { articles, playlists };
