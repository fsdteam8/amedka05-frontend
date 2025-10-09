import DownloadAgent from "@/components/agent/DownloadAgent";
import HomeHero from "@/components/home/HomeHero";
import TripContent from "@/components/home/TripContent";
import AgentBodyHome from "@/components/Shared/AgentBodyHome";
import ContactUsForm from "@/components/Shared/ContactUs";


export default function Home() {
  
  return (
      <div>
        {/* <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1> */}
        <HomeHero />
        <TripContent />
        <div className='bg-[#1B1B1B] py-[72px]'>
          <div className='container mb-10 text-center'>
            <h1 className='text-[#E7E7E7] text-[40px] font-normal italic'>Agents</h1>
            <p className='text-[#E7E7E7] text-[16px] font-normal'>The minds shaping tomorrow’s <span className='text-[#9F8700]'>creator economy</span></p>
          </div>
          <AgentBodyHome/>
        </div>
        <ContactUsForm />
        <DownloadAgent />
      </div>
  );
}
