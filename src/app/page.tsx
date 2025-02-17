import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Location from "@/components/Location";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div className="w-full">
      <Header isAntaresPage={false} />
      <Carousel />
      <About />
      <Services />
      <Location />
      <Footer />
    </div>
  );
}
