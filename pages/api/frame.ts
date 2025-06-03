import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html')

  // Cek method: GET = awal, POST = setelah tombol diklik
  if (req.method === 'POST') {
    // Ambil info dari body
    const { trustedData, untrustedData } = req.body || {}
    const buttonId = untrustedData?.buttonIndex
    const fid = trustedData?.fid

    // Respons Frame setelah klik tombol
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="og:image" content="https://placekitten.com/800/400" />
          <meta property="fc:frame:image" content="https://placekitten.com/800/400" />
          <meta property="fc:frame:button:1" content="Back" />
        </head>
        <body>
          <p>Thanks for clicking button ${buttonId}, FID: ${fid}</p>
        </body>
      </html>
    `)
  } else {
    // GET: Tampilkan Frame awal
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
          <meta property="fc:frame:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
          <meta property="fc:frame:button:1" content="Say Hello!" />
          <meta property="fc:frame:post_url" content="https://miniapp-navy.vercel.app/api/frame" />
        </head>
        <body>
          <h1>Initial Frame</h1>
        </body>
      </html>
    `)
  }
}
