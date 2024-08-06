"use client"

import { usePathname, useRouter } from 'next/navigation'

export default function ProductsId(props:any , team:any) {
  const router = useRouter()
  const na = usePathname()
    console.log(props,team,12);
    
    return (
      <h1 onClick={() => {
        router.push("/name")
      }}>详情</h1>
    );
  }
  