import Article from "@/components/article/Article";
import FAQs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/homePage/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Article />
      <FAQs />
      <Footer />
    </>
  );
}
