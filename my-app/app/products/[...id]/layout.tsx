export default function Team(props:any) {

    console.log(props);
    
    return (
      <>
        {/* {children}
        {team} */}
        {props.analytics}
        {props.team}
        {props.children}
      </>
    );
  }
  