import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="og:image" content="https://your-image-url/image.png" />
        <meta property="fc:frame:image" content="https://your-image-url/image.png" />
        <meta property="fc:frame:button:1" content="Say Hello!" />
        <title>Frame</title>
      </head>
      <body>Frame loaded</body>
    </html>
  `)
}
