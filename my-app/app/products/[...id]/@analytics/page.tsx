"use client"
import { useState } from "react";

export default function Analytics(props:any) {
  const [num , setNum] = useState(0);

    return (
      <h1 onClick={() => {
        setNum(num + 1)
      }}>{num}</h1>
    );
  }
  