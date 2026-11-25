function PoliticianCard(props) {
    console.log("PoliticianCard render:", props.politician.name);
    return (

        <li className="politician-card">
            <h2 className="politician-name">Name: {props.politician.name}</h2>

            <img
                className="politician-image"
                src={props.politician.image}
                alt={props.politician.name}
            />

            <p className="politician-position">
                Position: {props.politician.position}
            </p>

            <p className="politician-biography">
                Biography: {props.politician.biography}
            </p>
        </li>


    )
}

export default PoliticianCard