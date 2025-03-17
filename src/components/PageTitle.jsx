export default function PagTitle({resource, }) {

    
    return(

        <li>
        <a className="linkerliste" href={resource.url}>{resource.title}</a>
        </li>

    )
}