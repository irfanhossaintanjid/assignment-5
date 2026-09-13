
import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
  selectedStack: Technology[];
  
  handleAddToStack: (technology: Technology) => void;
}

export default function TechCard({
  technology,
  selectedStack,
  
   handleAddToStack,
}: TechCardProps) {

const isAdded = selectedStack.some(
  (item) => item.id === technology.id
);

const handleAdd = () => {
  handleAddToStack(technology);
};

 

  return (
    <div className="rounded-3xl border border-gray-200  p-5 shadow-sm transition-all  hover:-translate-y-1 hover:shadow-2xl">

      
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 items-center"
        />

        <span className="rounded-full border bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      
      <h3 className="mt-4 text-2xl font-bold text-black">
        {technology.name}
      </h3>

      
      <p className=" text-lg leading-7 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3">

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

      
      <button onClick={handleAdd}
  disabled={isAdded}
   className="mt-3 w-full rounded-xl bg-gray-950 px-4 py-2 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-md active:scale-95">
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}