import { Suspense } from "react";
import { stays } from "../lib/stays";
import StayCard from "../components/StayCard";
import SearchBar from "../components/SearchBar";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const {q=""} = await searchParams;
  const visible = stays.filter((s) => (s.name+ " "+ s.location).toLowerCase().includes(q.toLowerCase()));
  return (
    <section>
      <h1>Find a place to stay</h1>
      <Suspense>
        <SearchBar />
      </Suspense>
      <div className="grid">
        {visible.map((s)=>(<StayCard key={s.id} stay={s}/>))}
      </div>
    </section>
  )
}
