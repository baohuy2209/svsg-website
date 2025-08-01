import About from "@/layouts/home/about";
import Hero from "@/layouts/home/hero";
import Amenties from "@/layouts/home/amenties";
import Location from "@/layouts/home/location";
import NavigationPage from "@/layouts/home/navigationPage";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationPage />
      <Hero />
      <About />
      <Amenties />
      <Location />
    </div>
  );
}
