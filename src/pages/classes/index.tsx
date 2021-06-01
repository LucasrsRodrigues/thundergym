import { GetStaticProps } from "next";
import { ContactHeader } from "../../components/ContactHeader";
import { Footer } from "../../components/Footer";
import { InternalHeader } from "../../components/InternalHeader";
import { Menu } from "../../components/Menu";
import { SectionTitle } from "../../components/SectionTitle";
import { Main } from "./_components/Main";

export default function Classes(){
  return(
    <div className="container">
      <ContactHeader />
      <Menu />
      <InternalHeader title="Aulas" />
      <Main />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours 
  }
}