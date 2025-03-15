import { Link } from "react-router-dom";

export default function Nav() {
    const categories = [
        {
            id: 1,
            name: "HTML",
            slug: "html"
        },
        {
            id: 2,
            name: "CSS",
            slug: "css"
        },
        { 
            id: 3,
            name: "JavaScript",
            slug: "javascript"
        },
        {
            id: 4,
            name: "React",
            slug: "react"
        },
        {
            id: 5,
            name: "Sanity and headless CMS",
            slug: "headless-cms"
        }
    ]


    return(
        <nav>
            <ul >
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.slug}`} >{category.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}