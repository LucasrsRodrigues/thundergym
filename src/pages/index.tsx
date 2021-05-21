import { Banner } from "../components/Banner";
import { ContactHeader } from "../components/ContactHeader";
import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <div className="container">
      <ContactHeader />
      <Menu />
      <Banner />
    </div>
  )
}
