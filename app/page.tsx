import Activities from "./components/Activities";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Offers from "./components/Offers";
import StayActive from "./components/StayActive";

export default function Home() {
  return (
    <main className="pl-[8%] pr-[8%] flex flex-col gap-16">
      <Banner />
      <StayActive />
      <Activities />
      <Offers />
      <ContactForm />
    </main>
  );
}
