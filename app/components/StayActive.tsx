export default function StayActive() {
  return (
    <section className="flex flex-col justify-center min-h-screen">
      <div className="min-h-[80vh] flex flex-col md:grid md:grid-cols-6 md:grid-rows-6 gap-4 md:gap-4">
        {/* Title */}
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            L{"'"}IMPORTANCE DE RESTER{" "}
            <span className="text-fuchsia-900">ACTIF</span>
          </h2>
        </div>

        {/* Text */}
        <div className="md:col-span-4 md:row-span-2 md:row-start-2">
          <p className="text-base md:text-lg leading-relaxed">
            La retraite est le moment idéal pour enfin prendre soin de soi — et
            rester actif devient votre meilleur atout pour profiter pleinement
            de cette nouvelle liberté. Avec un accompagnement personnalisé,
            adapté à votre rythme et à vos objectifs, rester en forme après la
            retraite devient simple, motivant… et même agréable. Votre nouvelle
            vie commence maintenant : choisissez de la vivre en pleine santé.
          </p>
        </div>

        {/* First Item */}
        <div className="flex flex-col gap-4 items-center p-6  rounded-lg md:col-span-2 md:row-span-2 md:row-start-4">
          <span className="text-fuchsia-900 text-6xl md:text-8xl font-bold">
            1h30
          </span>
          <p className="text-center text-sm md:text-base">
            de marche par jour est lié à une réduction de +30 % du risque de
            mortalité
          </p>
        </div>

        {/* Second Item */}
        <div className="flex flex-col gap-4 items-center p-6  rounded-lg md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
          <span className="text-sky-600 text-6xl md:text-8xl font-bold">
            100%
          </span>
          <p className="text-center text-sm md:text-base">
            De vos proches seront content de vous voir en bonne santé.
          </p>
        </div>

        {/* Right Part */}
        <div className="flex flex-col gap-4 items-center p-6  rounded-lg md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-3">
          <span className="text-pink-800 text-6xl md:text-8xl font-bold">
            100%
          </span>
          <p className="text-center text-sm md:text-base">
            De vos proches seront content de vous voir en bonne santé.
          </p>
        </div>
      </div>
      <p className="text-gray-600">
        Chiffres de Santé publique France et de l{"'"}Organisation Mondiale de
        la Santé
      </p>
    </section>
  );
}
