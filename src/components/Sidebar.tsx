export default function Sidebar() {
  return (
    <div className="rounded-4xl border border-gray-200 bg-white p-6 shadow-sm">
      
      
      <div className=" flex-col">
        <h2 className="text-xl font-bold text-black">
          Your Stack
        </h2>
        <p className="text-gray-700">No technologies selected yet.</p>
    
      </div>

      
      <div className="mt-10 rounded-2xl border border-dashed border-gray-500 px-5 py-10 text-center">
        <p className="font-medium text-gray-600">
          Your stack is empty
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Add technologies to build your stack.
        </p>
      </div>

    
      <button
        disabled
        className="mt-5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-400"
      >
        Remove All
      </button>
    </div>
  );
}