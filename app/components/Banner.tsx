import coachPhoto from "@/public/img/img-coach.png";
import { COACH_NAME, COACH_TITLE, OG_IMAGE_ALT } from "@/lib/site-config";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="flex flex-col gap-8 md:gap-16 justify-center align-middle font-sans min-h-[80vh] md:min-h-screen mt-[8vh] md:mt-0"
      aria-label="Présentation"
    >
      <div className="flex flex-col md:flex-row justify-between w-full items-left md:items-center gap-8">
        <Image
          src={coachPhoto}
          alt={OG_IMAGE_ALT}
          width={500}
          height={250}
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 500px"
          className="h-auto w-auto max-w-full"
        />
        <div className="flex-col mr-[10%]">
          <h1 className="text-fuchsia-900 font-bold">{COACH_NAME}</h1>
          <hr className="w-[80%]" />
          <h2>{COACH_TITLE}</h2>
        </div>
      </div>
      <h3 className="text-4xl md:text-5xl mx-auto font-semibold">
        <span className="text-fuchsia-900 ">ACTIVEZ</span> VOTRE NOUVELLE VIE
      </h3>
    </section>
  );
}
