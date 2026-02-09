import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col gap-16 justify-center align-middle font-sans">
      <div className="flex justify-between w-full items-center">
        <Image
          src="/img/coach-photostock.jpg"
          alt="Image du coach sportif Mael GAUDRON"
          width={500}
          height={250}
        />
        <div className="flex-col mr-[10%]">
          <h1 className="text-fuchsia-900 font-bold">Mael GAUDRON</h1>
          <hr className="w-[80%]" />
          <h2>COACH APA</h2>
        </div>
      </div>
      <h3 className="text-5xl mx-auto font-semibold">
        <span className="text-fuchsia-900 ">ACTIVEZ</span> VOTRE NOUVELLE VIE
      </h3>
    </div>
  );
}
