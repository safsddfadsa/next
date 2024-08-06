import Link from "next/link";

export default function Products(props: any) {

    const data = [
        {id : 1 , value : "https://imgs.699pic.com/images/500/809/588.jpg!list1x.v2"},
        {id : 2 , value : "https://imgs.699pic.com/images/500/729/215.jpg!list1x.v2"}
    ]
  return <>
    {
        data?.map(item => {
            return <Link href={`/photo/${item.id}`}>
                <img src={item.value} alt="" />
            </Link>
        })
    }
  </>;
}
