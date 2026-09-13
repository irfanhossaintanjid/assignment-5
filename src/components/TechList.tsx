import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

export default function TechList() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/data.json");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Technology[] = await res.json();

        setTechnologies(data);
      } catch (error) {
        setError("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}