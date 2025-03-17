import Nav from "./Nav"
import PagTitle from './PageTitle';

export default function Layout({ children}) {

    // jeg fik problemer med children fikke hjelp av Betto
    
    return(
        <main>
         <Nav/>
         {children}
        </main>
    )
}
