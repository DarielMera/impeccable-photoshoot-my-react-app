export default function PageTitle(props){
const titleStyle =  {
    textAlign: "center",
    marginBottom: "70px", 
    borderBottom: "10px dotted black", 
    width: "300px"
}

    
    return (
        <h2 style={titleStyle}>{props.title}</h2>
    )
}

