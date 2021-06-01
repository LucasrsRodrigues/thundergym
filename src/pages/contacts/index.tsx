import { GetStaticProps } from "next";
import { ContactHeader, Footer, InternalHeader, Menu } from "../../components/global";
import { Main } from "../../components/pages/contacts/Main";

export default function Contacts(){
  return(
    <div className="container">
      <ContactHeader />
      <Menu />
      <InternalHeader title="Contato" />
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