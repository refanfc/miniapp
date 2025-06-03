import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/frame", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mini App Farcaster</title>
        <meta property="og:title" content="Mini App Farcaster" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://placekitten.com/600/400" />
        <meta name="fc:frame:button:1" content="Halo!" />
        <meta name="fc:frame:post_url" content="https://your-vercel-url.vercel.app/action" />
      </head>
      <body></body>
    </html>
  `);
});

app.post("/action", express.urlencoded({ extended: true }), (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mini App Farcaster</title>
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://placekitten.com/600/400" />
        <meta name="fc:frame:button:1" content="Kembali" />
        <meta name="fc:frame:post_url" content="https://your-vercel-url.vercel.app/frame" />
      </head>
      <body>
        <p>Halo dari Mini App Farcaster 🎉</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Mini App berjalan di http://localhost:${port}`);
});
