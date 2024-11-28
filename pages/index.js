import Header from "@/components/Header"
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import Test from "@/components/Test";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Section/>
    <Stats/>
    <Test/>
    <Team/>
    <Footer/>
    </div>
  );
}
