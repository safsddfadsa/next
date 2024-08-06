"use client"
import { useEffect, useState } from "react";


export default function Team(props:any) {

  const [flag , setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  },[])
 
      return (
        <>
        {flag ?  <h1>team</h1> : null}
        </>
       
      );
    }
    