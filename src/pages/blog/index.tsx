import { GetStaticProps } from "next";
import { ContactHeader, Menu, Footer, InternalHeader  } from "../../components/global";

import { Main } from "../../components/pages/blog/Main";


import posts from "../../utils/data/posts";
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