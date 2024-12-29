import NavBar from "@/sections/NavBar";
import styles from "./page.module.css";
import Landing from "@/sections/Landing";
import InnovationLabsSection from "@/sections/InnovationLabs";
import WhyChooseUs from "@/sections/WhyChooseUs";
import TrainingServices from "@/sections/TrainingServices";
import DesignServices from "@/sections/DesignServices";
import IndustriesWeServe from "@/sections/IndustriesWeServe";
import OurValuedClients from "@/sections/OurValuedClients";
import Testimonials from "@/sections/Testimonials";
import FooterMain from "@/sections/FooterMain";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className={styles.mainBody}>
        <Landing />
        <TrainingServices />
        <DesignServices />
        <WhyChooseUs />
        <InnovationLabsSection />
        <IndustriesWeServe />
        <OurValuedClients />
        <Testimonials />
      </div>
      <FooterMain />
    </main>
  );
}
