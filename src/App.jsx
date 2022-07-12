import Home from "./containers/Home"
import Contribuyente from "./containers/Contribuyente"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contribuyente" element={<Contribuyente />}></Route>
      </Routes>
    </Router>

  )
}

export default App
