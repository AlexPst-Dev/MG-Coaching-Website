export default function StayActive() {
  return (
    <section className="flex flex-col justify-center min-h-screen">
      <div id="grid-stayactive" className="min-h-[80vh]">
        <div id="gridchild-title">
          <h2>
            L{"'"}IMPORTANCE DE RESTER{" "}
            <span className="text-fuchsia-900">ACTIF</span>
          </h2>
        </div>
        <div id="gridchild-txt">
          <p>
            La retraite est le moment idéal pour enfin prendre soin de soi — et
            rester actif devient votre meilleur atout pour profiter pleinement
            de cette nouvelle liberté. Avec un accompagnement personnalisé,
            adapté à votre rythme et à vos objectifs, rester en forme après la
            retraite devient simple, motivant… et même agréable. Votre nouvelle
            vie commence maintenant : choisissez de la vivre en pleine santé.
          </p>
        </div>
        <div
          id="gridchild-rightPart"
          className="flex flex-col gap-4 items-center"
        >
          <span className="text-pink-800 text-8xl">100%</span>
          <p>De vos proches seront content de vous voir en bonne santé.</p>
        </div>
        <div
          id="gridchild-firstItem"
          className="flex flex-col gap-4 items-center"
        >
          <span className="text-fuchsia-900 text-8xl">1h30</span>
          <p>
            de marche par jour est lié à une reduction de +30 % du risque de
            mortalité
          </p>
        </div>
        <div
          id="gridchild-secondItem"
          className="flex flex-col gap-4 items-center"
        >
          <span className="text-sky-600 text-8xl">100%</span>
          <p>De vos proches seront content de vous voir en bonne santé.</p>
        </div>
      </div>
    </section>
  );
}
