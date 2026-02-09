import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="pl-[8%] pr-[8%] mt-8 flex items-center gap-8">
      <Image src="logo.svg" alt="logo" width={50} height={50} />
      <ul className="list-image-none flex items-center gap-8 font-medium text-xl">
        <li>RESTER ACTIF</li>
        <li>PROPOSITIONS</li>
        <li>AVIS</li>
        <li>OFFRES</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
