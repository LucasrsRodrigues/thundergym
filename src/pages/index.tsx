import { Banner } from "../components/Banner";
import { Coaches } from "../components/Coaches";
import { ContactHeader } from "../components/ContactHeader";
import { Gallery } from "../components/Gallery";
import { Menu } from "../components/Menu";
import { Posts } from "../components/Posts";
import { Programs } from "../components/Programs";
import { Slide } from "../components/Slide";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="container">
      <ContactHeader />
      <Menu />
      <Banner />
      <Programs />
      <Coaches />
      <Slide />
      <Posts />
      <Testimonials />
      <Gallery />
    </div>
  )
}
