import type { Technology } from "../types";

type SidebarProps = {
  selectedStack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
};

export default function Sidebar({ selectedStack,  handleRemoveFromStack,  handleRemoveAll }: SidebarProps) {
  return (
      <div className="sticky top-24 h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
       
      <div className=" flex-col">
        <h2 className="text-xl font-bold text-black">
          Your Stack
        </h2>
       {selectedStack.length === 0 ? (
  <p className="text-gray-700">
    No technologies selected yet.
  </p>
) : (
  <p className="text-gray-700">
    {selectedStack.length} technologies selected
  </p>
)}
    
      </div>

      {selectedStack.length === 0 && (
      <div className="mt-2 rounded-2xl border border-dashed border-gray-600 px-5 py-10 text-center">
        <p className="font-medium text-gray-600">
          Your stack is empty
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Add technologies to build your stack.
        </p>
      </div>
     )}
    {selectedStack.map((technology) => (
  <div
    key={technology.id}
    className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 p-3"
  >
    <img
      src={technology.icon}
      alt={technology.name}
      className="h-10 w-10 object-contain"
    />

    <div className="flex-1">
      <p className="font-semibold text-gray-800">
        {technology.name}
      </p>

      <p className="text-sm text-gray-500">
        {technology.category}
      </p>
    </div>

    <button onClick={() => handleRemoveFromStack(technology.id)} className="text-lg cursor-pointer font-bold text-gray-400">
      ×
    </button>
  </div>
))}

    
      <button
        onClick={handleRemoveAll}
        disabled={selectedStack.length === 0}
        className={`mt-5 w-full rounded-xl cursor-pointer border px-4 py-3 text-sm font-semibold ${
          selectedStack.length > 0
            ? "border-orange-400  text-orange-600 hover:bg-red-50"
            : "border-gray-200 text-gray-400"
        }`}
      >
        Remove All
      </button>
    </div>
  );
}