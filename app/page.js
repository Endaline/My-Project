import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Pages from "@/components/Pages";
import Podcast from "@/components/Podcast";
import Shop from "@/components/Shop";
import { PiApplePodcastsLogoThin } from "react-icons/pi";
import { ImSoundcloud } from "react-icons/im";
import BgCard from "@/components/BgCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-[lato] w-full">
      <nav>
        <Navbar />
      </nav>
      <main className=" min-h-screen  w-full overflow-x-hidden">
        <div className="bg-mic h-[800px] w-full bg-no-repeat bg-cover">
          <div className="mx-[265px] text-black pt-40 absolute w-full h-52">
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

              <div className="flex justify-center pt-2 space-x-2 w-[12rem] h-[3.5rem] bg-black text-white rounded-full hover:bg-[#646162] cursor-pointer">
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
        <div className="absolute bottom-0 w-[1300px] mx-auto ">
          <BgCard />
        </div>
        <Pages />
        <Podcast />
        <Shop />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
