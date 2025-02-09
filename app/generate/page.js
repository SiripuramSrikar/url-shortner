"use client"
import React, {useState} from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [Generated, setGenerated] = useState(false)
    
    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
      });

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) => {
              setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
              seturl("")   
              setshorturl("")
              console.log(result)
              alert(result.message)
          
          })
          .catch((error) => console.error(error));
  }
  return (
    <div className='mx-auto max-w-lg bg-green-100 my-16 p-8 rounded-xl flex-col gap-5'>
        <h1 className='font-bold text-2xl'>
            Generate your short URLs
        </h1>
        <div className='flex flex-col gap-2'>
            <input type='text' value={url} placeholder='Enter your URL' onChange={e=>{seturl(e.target.value)}} className=' p-4 rounded-md'></input>
            <input type='text' value={shorturl} className='p-4 focus:outline-blue-800 rounded-md' placeholder='Enter your preferred short URL text'onChange={e=>{setshorturl(e.target.value)}}></input>
            <button onClick={generate} className='bg-black text-white rounded-md shadow-lg p-3 py-1 my-3 font-bold'>Generate</button>
        </div>
        {Generated && <> <span className='font-bold text-lg'>Your Link </span><code><a target="_blank" href={Generated}>{Generated}</a> 
        </code></>}
    </div>
  )
}

export default Shorten