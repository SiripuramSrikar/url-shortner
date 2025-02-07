import React from 'react'
import Head from 'next/head'


const about=()=> {
  return (
    <div>
      <Head>
        <title>About URL Shortener</title>
        <meta name="description" content="Learn more about our URL shortener service." />
      </Head>
      <div className="flex flex-col items-start gap-2">
  <h1 className="font-bold text-2xl my-2 p-2">About Our URL Shortener</h1>
  <p className="my-2 p-2 leading-relaxed">
    <strong>SimpleLinks</strong> makes sharing links simple and efficient. 
    Shorten long URLs, track clicks, and manage your links effortlessly—all in one place. 
    Our URL shortener helps you create compact, easy-to-share links while tracking analytics and engagement.
  </p>
  
  <h3 className="my-2 p-2 font-bold text-lg">Key Features:</h3>
  <ul className="list-disc pl-6">
    <li>✅ Instantly shorten URLs</li>
    <li>📊 Track link performance</li>
    <li>🔗 Custom short links (optional)</li>
  </ul>

  <p className="my-2 p-2 leading-relaxed">Start shortening now and make your links work smarter!</p>
</div>

      </div>
    
  )
}

export default about