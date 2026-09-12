
import Image from "../assets/banner-stack.png";

export function Hero() {
  return (
    <section className="container mx-auto flex min-h-[400px] flex-col items-center justify-between gap-15 px-4 py-12 md:flex-row md:px-6 ">
      
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl ">
          Build Your Ideal
        </h1>

        <h1 className="mt-2 bg-gradient-to-r from-orange-500 via-pink-600 to-violet-700 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
          Development Stack
        </h1>

        <p className="mt-5 max-w-xl text-base font-medium leading-7 text-gray-600 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg">
            Explore Technologies
          </button>

          <button className="rounded-2xl border border-[#db2777] bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center md:w-1/2 md:justify-end">
        <img
          src={Image}
          alt="Development stack illustration"
          className="w-full max-w-md object-contain lg:max-w-lg"
        />
      </div>
    </section>
  );
}
