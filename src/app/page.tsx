"use client";
import Hero from "@/components/Hero";
import { Feature } from "@/components/Feature";
import Testimonials from "@/components/Testimonials";
import Layout from "@/components/Layout/index";
import MetaMask from "@/components/MetaMask";
export default function Home() {
  return (
    <main className="  ">
      <Layout>
        <Hero />
        <MetaMask/>
        <Feature />
        <Testimonials />
      </Layout>
    </main>
  );
}
