import { GetStaticProps } from "next";

import {
  ContactHeader,
  Footer,
  Menu,
  Coaches
} from '../components/global';

import {
  Banner,
  Gallery,
  Posts,
  Programs,
  Slide,
  Testimonials
} from '../components/pages/home';


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