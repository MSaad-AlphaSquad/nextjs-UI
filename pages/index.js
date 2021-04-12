import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3Man from "../components/Section3Man";
import Socials from "../components/Socials";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="md:container md:mx-auto mx-0">
     <Header/>
     <Section1/>
     <Section2/>
    <Section3Man/>
    <Socials/>
    <Footer/>
    </div>
  )
}
