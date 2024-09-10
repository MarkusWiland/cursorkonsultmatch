import Accordion from "./_components/Accordion";
import CallToAction from "./_components/CallToAction";
import Hero from "./_components/Hero";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Accordion />
      <CallToAction />
    </>
  );
}
