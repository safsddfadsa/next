"use client"

import { usePathname, useRouter } from 'next/navigation'

export default function ProductsId(props:any) {
  const router = useRouter()
  const na = usePathname()
    console.log(props,12);
    
    return (
      <h1 onClick={() => {
        router.push("/name")
      }}>详情</h1>
    );
  }
  