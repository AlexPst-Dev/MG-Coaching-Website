import Banner from "./components/Banner";
import StayActive from "./components/StayActive";

export default function Home() {
  return (
    <main className="pl-[8%] pr-[8%] flex flex-col gap-16">
      <Banner />
      <StayActive />
    </main>
  );
}
