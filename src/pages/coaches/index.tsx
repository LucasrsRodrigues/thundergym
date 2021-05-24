import { ContactHeader } from "../../components/ContactHeader";
import { Footer } from "../../components/Footer";
import { InternalHeader } from "../../components/InternalHeader";
import { Menu } from "../../components/Menu";
import { Main } from "./_components/Main";

export default function Coaches(){
  return(
    <div className="container">
      <ContactHeader />
      <Menu />
      <InternalHeader title="Treinadores" />
      <Main />
      <Footer />
    </div>
  );
}