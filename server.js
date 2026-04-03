import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import urlLib from "url";

const app = express();
app.use(cors());

function makeAbsolute(base, link) {
  try {
    return new URL(link, base).href;
  } catch {
    return link;
  }
}

app.get("/clone", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: "No URL provided" });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const html = response.data;
    const $ = cheerio.load(html);

    let css = [];
    let js = [];
    let images = [];

    $("link[rel='stylesheet']").each((i, el) => {
      let href = $(el).attr("href");
      if (href) css.push(makeAbsolute(targetUrl, href));
    });

    $("script[src]").each((i, el) => {
      let src = $(el).attr("src");
      if (src) js.push(makeAbsolute(targetUrl, src));
    });

    $("img").each((i, el) => {
      let src = $(el).attr("src");
      if (src) images.push(makeAbsolute(targetUrl, src));
    });

    res.json({
      html,
      css,
      js,
      images
    });

  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch site",
      details: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
