import { redirect } from 'next/navigation'
import Yes from './component/yes';
import { useEffect } from 'react';
export default function Name(props:any) {
  console.log(props);
  
    return (
      <h1>name Detail 
        <Yes></Yes>
      </h1>
    );
  }
  