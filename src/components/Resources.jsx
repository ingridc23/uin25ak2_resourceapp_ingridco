import { useParams } from "react-router-dom";
import PagTitle from "./PageTitle";


export default function Resources({resources}) {
    const {slug} = useParams();

    console.log("slug P", useParams )

    //jeg har set på legodudes-React
    const katigori = resources.filter((resource) => resource.category === slug )
    console.log("resuset sulg", katigori)


    return(
        <section id="info">
                    {/* her har jeg fikk jeg hjelp av Tore Marius*/}
                <h2>{katigori[0].category}</h2>
        
                    <ul>       
                    {katigori.map((resource, index) => ( 
                    <PagTitle
                    resource={resource}
                    key={`FCT_${index}`}
                    />))} 
                    </ul>

                    
        </section>
    )
}