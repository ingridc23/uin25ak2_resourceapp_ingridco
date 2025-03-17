
import { resources} from './assets/ressurser';

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/styles/styles.scss'
import Resources from './components/Resources'





function App() {
 
 

  return (
    <Layout element={<Resources />} >
      <Routes>
   
      <Route path='/category/:slug' element={<Resources resources={resources}  />}></Route>
    
      </Routes>
    </Layout>
  )
}

export default App
