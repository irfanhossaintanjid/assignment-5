import TechList from "./TechList";

export default function MainLayout() {
  return (


    <section className="container mx-auto px-4 py-12">

      
     <div className="pb-10">
            <h1 className="text-2xl md:text-4xl font-bold ">Explore the <span className="bg-linear-to-r from-orange-500 via-pink-600  to-violet-700  bg-clip-text text-2xl font-bold leading-tight text-transparent md:text-4xl">Technologies</span></h1>
            <p  className="  font-medium text-gray-600 sm:text-lg">Pick one technology per category to build your ideal stack.</p>
      </div>

     
      <TechList />
      

    </section>
  );
}