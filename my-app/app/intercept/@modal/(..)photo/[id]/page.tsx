import P from "@/app/yes/[id]/page";
import Link from "next/link";

export default function Products(props: any) {
    console.log(props , 12);
    

    const data = [
        {id : 1 , value : "https://imgs.699pic.com/images/500/809/588.jpg!list1x.v2"},
        {id : 2 , value : "https://imgs.699pic.com/images/500/729/215.jpg!list1x.v2"}
    ]
  return <>
    {
        <img src={data[props.params.id - 1].value} width={500} height={500}alt="" />
    }
  </>;
}