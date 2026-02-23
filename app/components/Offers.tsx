interface OfferType {
  title: string;
  description: string;
  items: string[];
  price: number;
  isMainOffer: boolean;
}

const offers: OfferType[] = [
  {
    title: "BASIC",
    description: "Profitez de 10 séances lorem ipsum dolore sit amet.",
    items: ["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"],
    price: 29,
    isMainOffer: false,
  },
  {
    title: "PRO",
    description: "Profitez de 10 séances lorem ipsum dolore sit amet.",
    items: ["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"],
    price: 29,
    isMainOffer: true,
  },
  {
    title: "PRENIUM",
    description: "Profitez de 10 séances lorem ipsum dolore sit amet.",
    items: ["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"],
    price: 29,
    isMainOffer: false,
  },
];

function OfferItem(data: OfferType) {
  return (
    <div
      className={`flex flex-col items-center ${data.isMainOffer ? "bg-[#E56B70]" : "bg-white"} border border-black rounded-4xl p-8 gap-16 md:justify-center`}
    >
      <h3 className="text-3xl md:text-4xl font-bold">{data.title}</h3>
      <p>{data.description}</p>
      <span className="text-4xl font-semibold">{data.price} €/mois</span>
      <ul className="w-full list-none">
        {data.items.map((el: string, index) => {
          return (
            <li key={index} className="flex items-center gap-2 mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl">{el}</span>
            </li>
          );
        })}
      </ul>
      <button
        className={`
          px-8 py-3 rounded-4xl text-lg font-semibold
          transition-all duration-300 hover:scale-105
          flex items-center gap-2 cursor-pointer
          ${
            data.isMainOffer
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-white text-black border-2 border-black hover:bg-gray-100"
          }
        `}
        style={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
        }}
      >
        S{"'"}inscrire
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-45"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Offers() {
  return (
    <section className="min-h-screen flex flex-col gap-8 md:gap-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">MES OFFRES</h2>
      <div className="flex md:flex-row md:justify-between md:items-center flex-col gap-4 md:h-[80vh]">
        {offers.map((offer: OfferType, index) => {
          return (
            <div
              key={index}
              className={`md:w-[32%] ${offer.isMainOffer ? "md:h-[90%]" : "md:h-[80%]"}`}
            >
              <OfferItem
                title={offer.title}
                description={offer.description}
                price={offer.price}
                items={offer.items}
                isMainOffer={offer.isMainOffer}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
