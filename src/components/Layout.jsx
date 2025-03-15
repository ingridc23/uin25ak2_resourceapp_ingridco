import Nav from "./Nav"
import PagTitle from './PageTitle';

export default function Layout({resources, children}) {


    
    return(
        <main>
         <Nav/>
         {children}
        </main>
    )
}
