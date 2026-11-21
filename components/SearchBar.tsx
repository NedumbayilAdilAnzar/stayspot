"use client";
import {useRouter , useSearchParams} from "next/navigation";
import {useState} from "react";

export default function SearchBar(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query , setQuery] = useState(searchParams.get("q")??"")

    function handlechange(value:string){
        setQuery(value);
        router.replace(value ? `/?q=${encodeURIComponent(value)}` : "/")
    }
    return(
        <input
            className="search"
            placeholder="Search by name or city..."
            value={query}
            onChange={(e) => handlechange(e.target.value)}
        />
    );
}