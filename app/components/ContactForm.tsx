export default function ContactForm() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-8 md:gap-16">
      <h2>DES QUESTIONS ? CONTACTEZ-MOI DIRECTEMENT</h2>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
        <p className="md:flex-1/2 md:pr-8">
          N’hesitez pas a me proposer des idees de séance ou de discipline que
          vous aimeriez aborder.
        </p>
        <form
          action="submit"
          className="flex flex-col gap-8 md:gap-4 md:flex-1/2 border border-black rounded-4xl p-4 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="flex flex-col gap-1 md:flex-1/2">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                placeholder="DOE"
                className="border border-black rounded-2xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-1 md:flex-1/2">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                placeholder="John"
                className="border border-black rounded-2xl px-4 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="john.doe@mail.com"
              className="border border-black rounded-2xl px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="msg">Message</label>
            <textarea
              name="msg"
              rows={4}
              cols={50}
              placeholder="Ecrivez votre message ici..."
              className="border border-black rounded-2xl px-4 py-2 min-h-16"
            />
          </div>
          <button
            className={`
              px-8 py-3 rounded-4xl text-lg font-semibold
              transition-all duration-300 hover:scale-105
              flex items-center gap-2 cursor-pointer bg-white
              text-black border-2 border-black hover:bg-gray-100
              w-fit ml-auto
            `}
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
            }}
          >
            Envoyer
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
        </form>
      </div>
    </section>
  );
}
