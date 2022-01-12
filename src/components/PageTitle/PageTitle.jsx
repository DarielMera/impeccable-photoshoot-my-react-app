export default function PageTitle(props){

const titleStyleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem:'center',
    marginBottom:'10px'
}

    const titleStyle =  {
    borderBottom: "10px dotted black",
}

    return (
        <div style={titleStyleContainer}> 
        <h2 style={titleStyle}>{props.title}</h2>
        </div>
    )
}



