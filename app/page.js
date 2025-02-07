import Image from "next/image";
import localFont from "next/font/local"

const poppins = localFont({
  src:"./fonts/Poppins-Bold.ttf",
  variable:"--font-poppins",
  weight:"100 900",
})
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL Shortner in the market</p>
          <p className="px-40 text-center">We are the most striaght forward URL Shortner in the world. Most of the url 
            shortners will track you or ask to give your details for login. We 
            understand your needs and hence we have created this URL Shortner</p> 
            <div className='flex gap-3 justify-start'>
                <a href='/generate'><button className='bg-black rounded-xl shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></a>
                <a href='/github'><button className='bg-black  rounded-xl  py-1 font-boldshadow-lg p-3 py-1 font-bold text-white'>Github</button></a>
            </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.png"} fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
