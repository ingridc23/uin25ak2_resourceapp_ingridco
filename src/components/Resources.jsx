import { useParams } from "react-router-dom";
import Nav from "./Nav";
import PagTitle from "./PageTitle";


export default function Resources({resources}) {
    const {slug} = useParams();

    console.log("slug P", useParams )

    
    const katigori = resources.filter((resource) => resource.category === slug )
    console.log("resuset sulg", katigori)

    // const overskrift = katigori.filter((resource) => resource.category === 1) 

    //     //  (e) => {
        
    // //     
    // // }

    // // console.log(overskrift.katigori)
    // console.log("overskrifen", overskrift)
    
    return(
        <section id="info">
            {katigori.map((resource, index) => (
             
                <h2 key={index}>{resource.category}</h2>
                ))}
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