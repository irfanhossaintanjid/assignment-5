import { toast } from "react-toastify";

import { useState } from "react";
import type { Technology } from "../types";
import Sidebar from "./Sidebar";
import TechList from "./TechList";

export default function MainLayout() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
  const isAlreadyAdded = selectedStack.some(
    (item) => item.id === technology.id
  );

  if (isAlreadyAdded) {
   toast.warning("Already added!");

    return;
  }
  setSelectedStack((previousStack) => [
  ...previousStack,
  technology,
]);
toast.success("Technology added!");
}
const handleRemoveFromStack = (id: string) =>  {
  setSelectedStack((previousStack) =>
    previousStack.filter((technology) => technology.id !== id)
  );
  toast.info("Technology removed!");
};
const handleRemoveAll = () => {
  setSelectedStack([]);
 toast.error("All technologies removed!");

};


  return (
    <section className="container mx-auto">

      <div className="pb-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-violet-700 bg-clip-text text-2xl font-bold leading-tight text-transparent md:text-4xl">
Technologies</span>
        </h1>

        <p className="font-medium text-gray-600 sm:text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

        <div className="lg:col-span-3">
          <TechList selectedStack={selectedStack} handleAddToStack={handleAddToStack}
          />
        </div>

       <Sidebar
  selectedStack={selectedStack}
  handleRemoveFromStack={handleRemoveFromStack}
  handleRemoveAll={handleRemoveAll}
/>

      </div>
    </section>
  );
}