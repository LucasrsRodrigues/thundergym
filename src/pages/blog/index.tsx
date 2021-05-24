import { GetStaticProps } from "next";
import { ContactHeader } from "../../components/ContactHeader";
import { Footer } from "../../components/Footer";
import { InternalHeader } from "../../components/InternalHeader";
import { Menu } from "../../components/Menu";
import posts from "../../utils/data/posts";
import { Main } from "./_components/Main";

export default function Blog(){
  return(
    <div className="container">
      <ContactHeader />
      <Menu />
      <InternalHeader title="Blog" />
      <Main posts={posts} />
      <Footer />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }

}