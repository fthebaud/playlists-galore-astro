import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("playlists");
  return rss({
    title: "Playlist Galore",
    description: "A great collection of playlists",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.name,
      pubDate: post.data.pubDate,
      link: `/playlists/${post.data.pubDate}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
