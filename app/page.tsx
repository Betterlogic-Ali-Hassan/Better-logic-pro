import Article from "@/components/article/Article";
import FAQs from "@/components/faqs/Faqs";
import Hero from "@/components/homePage/Hero";
import InstallExe from "@/components/installExe/InstallExe";

export default function Home() {
  return (
    <>
      <Hero />
      <Article />
      <FAQs />
      <InstallExe />
    </>
  );
}
