'use client';

import getSuggestions from "@/utils/getSuggetions";
import { useEffect, useState } from "react";

export default function useSuggestions(){
    const [ query , setQuery ] = useState('');
    const [ suggestions , setSuggestions ] = useState([]);

    useEffect(()=>{
        async function fetchSuggestions(){
            if(query.trim().length < 2){
                setSuggestions([]);
                return;
            }
            try {
                const result = await getSuggestions(query);
                setSuggestions(result);
            } catch (error) {
                setSuggestions([]);
            }
        } ;

        const timer = setTimeout(fetchSuggestions , 500);
        return () => clearTimeout(timer);

    } ,[query]);

    return{
        query ,
        setQuery,
        suggestions ,
        setSuggestions
    }
}