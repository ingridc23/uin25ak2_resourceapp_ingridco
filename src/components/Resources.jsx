import { useParams } from "react-router-dom";
import Nav from "./Nav";
import PagTitle from "./PageTitle";


export default function Resources({resources}) {
    const {slug} = useParams();

    console.log("slug P", useParams )

    
    const katigori = resources.filter((resource) => resource.category === slug )
    console.log("resuset sulg", katigori)
    return(
        <section id="info">

            <div>
            <h2> {category.name} </h2>
                {katigori.map((resource, index) => (
                    <PagTitle
                    resource={resource}
                    
                    key={`FCT_${index}`}
                    
                    />
                ))}
            </div>

        </section>
    )
}