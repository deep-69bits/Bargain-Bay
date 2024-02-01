'use client'
import Hero from '@/components/Hero';
import { Feature } from '@/components/Feature';
import Testimonials from '@/components/Testimonials';
export default function Home() {
  return (
    <main className="  ">
         <Hero/>
         <Feature/>
         <Testimonials/>
    </main>
  );
}
