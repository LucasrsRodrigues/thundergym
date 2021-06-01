import { GetStaticProps } from "next";
import { ContactHeader, Footer, InternalHeader, Menu } from "../../components/global";

import { Main } from "../../components/pages/classes/Main";

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