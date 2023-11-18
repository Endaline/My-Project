import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Pages from "@/components/Pages";
import Podcast from "@/components/Podcast";
import Shop from "@/components/Shop";
import Link from "next/link";
import { PiApplePodcastsLogoThin } from "react-icons/pi";
import { ImSoundcloud } from "react-icons/im";
import BgCard from "@/components/BgCard";

export default function Home() {
  return (
    <main className=" min-h-screen max-auto font-[lato] w-full relative">
      <div className="bg-mic h-[800px] w-full bg-no-repeat bg-cover">
        <nav>
          <Navbar />
        </nav>
        <div>
          <Blog />
          <Pages />
          <Podcast />
          <Shop />
          <p></p>
        </div>
        <div className="pl-[320px] text-black pt-40 absolute w-full h-52">
          <div>
            <h1 className="font-extrabold  text-6xl">
              New episode <br /> available now
            </h1>
          </div>
          <div>
            <p className="font-[200] text-xl">
              Available on Apple Soundcast and Spotify
            </p>
          </div>
          <div className="flex mt-14 gap-5">
            <div className="flex justify-center pt-2 w-[12rem] h-[3.5rem] bg-black text-white rounded-full hover:bg-[#646162] cursor-pointer">
              <div>
                <p className="font-extrabold text-4xl ">
                  <PiApplePodcastsLogoThin />
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-xs">Listen on</span>
                <span className="font-bold">Apple Podcasts</span>
              </div>
            </div>

            <div className="flex justify-center pt-2 w-[12rem] h-[3.5rem] bg-black text-white rounded-full hover:bg-[#646162] cursor-pointer">
              <div>
                <p className="font-extrabold text-4xl ">
                  <ImSoundcloud />
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-xs">Listen on</span>
                <span className="font-bold">Soundcloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 ">
        <BgCard />
      </div>
    </main>
  );
}
