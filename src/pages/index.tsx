import { GetStaticProps } from "next";
import { Coaches } from "../components/Coaches";
import { ContactHeader } from "../components/ContactHeader";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import {
  Banner,
  Gallery,
  Posts,
  Programs,
  Slide,
  Testimonials
} from './_components';


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