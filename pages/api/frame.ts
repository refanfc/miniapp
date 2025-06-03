import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
        <meta property="fc:frame:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
        <meta property="fc:frame:button:1" content="Say Hello!" />
        <title>Mini App Frame</title>
      </head>
      <body>
        Farcaster Frame Loaded
      </body>
    </html>
  `)
}
