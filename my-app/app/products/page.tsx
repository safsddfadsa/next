'use client'
 
import { useRouter } from 'next/navigation'


export default function Products(props:any) {

  const router = useRouter()
  console.log(router);
  

    return (
      <h1>products</h1>
    );
  }
  