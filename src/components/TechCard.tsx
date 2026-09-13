import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
}

export default function TechCard({ technology }: TechCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-14 w-14 object-contain"
        />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      
      <h3 className="mt-8 text-2xl font-bold text-gray-900">
        {technology.name}
      </h3>

      
      <p className="mt-3 min-h-22 text-lg leading-7 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-3">

        <span className="rounded-md bg-gray-50 px-3 py-1 text-sm text-gray-700">
          {technology.category}
        </span>

        <span className="text-sm text-gray-600">
          {technology.difficulty}
        </span>

        <span className="text-sm text-gray-700">
          <span className="text-yellow-500">★</span>{" "}
          {technology.rating}
        </span>

      </div>

      
      <button className="mt-6 w-full rounded-xl bg-gray-950 px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-md active:scale-95">
        Add to Stack
      </button>
    </div>
  );
}