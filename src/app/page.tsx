'use client'
import Layout from '@/components/Layout/index'
import HeroLottie from '../../public/Images/heroLottie.json'
import { Bungee } from "next/font/google";
import Lottie from "lottie-react";
import Button from '@/components/Buttons';
const inter = Bungee({ weight: ['400'], subsets: ["latin"] });
export default function Home() {
  return (
    <main className="  ">
      <Layout >
        <div className='lg:mx-20 mx-5  py- flex justify-between items-center '>
          <div>
            <h1 className='my-4  mx-2 text-3xl lg:text-xl tracking-wider text-kesari'>Bargain Bay</h1>
            <div className=' block lg:hidden'>
              <Lottie animationData={HeroLottie} loop={true} />
            </div>
            <h2 className={inter.className}>
              <span className='lg:text-8xl text-4xl  selection:bg-yellow-200'>
                BUY <br className='hidden lg:block' /> SELL <br className='hidden lg:block' /> THRIVE
              </span>
            </h2>
            <h3 className='mx-2 lg:w-[80%] w-full font-medium mt-5 selection:bg-yellow-200'>
              Discover Savings, Unleash Security – Your Ultimate Reselling Experience at Bargain Bay.
            </h3>
            <Button className='my-10  w-full lg:w-[40%]' variant='primary'>
                Explore More
            </Button>
          </div>

          <div className='w-[700px] lg:block hidden'>
            <Lottie animationData={HeroLottie} loop={true} />
          </div>

        </div>
      </Layout>
    </main>
  );
}
