import Image from "next/image";
import localFont from "next/font/local"

const geistSans = localFont({
  src:"./fonts/Poppins-Bold.ttf",
  variable:"--font-geist-sans",
  weight:"100 900",
})
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">The best URL Shortner in the market</p>
          <p>We are the most striaght forward URL Shortner in the world</p> 
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.png"} fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
