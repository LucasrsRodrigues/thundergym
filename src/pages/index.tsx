import { Banner } from "../components/Banner";
import { Coaches } from "../components/Coaches";
import { ContactHeader } from "../components/ContactHeader";
import { Menu } from "../components/Menu";
import { Programs } from "../components/Programs";

export default function Home() {
  return (
    <div className="container">
      <ContactHeader />
      <Menu />
      <Banner />
      <Programs />
      <Coaches />
    </div>
  )
}
