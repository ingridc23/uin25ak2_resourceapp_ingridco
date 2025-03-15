import { useState } from 'react'
import { resources} from './assets/ressurser';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/styles/styles.scss'
import Resources from './components/Resources'
import PagTitle from './components/PageTitle';




function App() {
  const [count, setCount] = useState(0)
 
  

  

  return (
    <Layout element={<Resources resources={resources} />} >
      <Routes>
   
      <Route path='/category/:slug' element={<Resources resources={resources}  />}></Route>
     
        {/* <Route path='/html' element={<Resources resources={resources}/>}></Route>
        <Route path='/css' element={ <Resources  resources={resources}/>}> </Route>
        <Route path='/javascript' element={<Resources  resources={resources} />}></Route>
        <Route path='/react' element={ <Resources  resources={resources} />}> </Route>
        <Route path='/sanity' element={ <Resources  resources={resources}/>}> </Route> */}
      </Routes>
    </Layout>
  )
}

export default App
