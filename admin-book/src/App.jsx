import React from "react"
import {BrowserRouter, Route, Routes} from react-router-dom
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import CreateBook from "./pages/CreateBook"
import './App.css'

function App() {
  return (
   <BrowserRouter>
     <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/createbook' element={<CreateBook/>}></Route>
      </Routes>
     </Sidebar>
   </BrowserRouter>
  )
}

export default App
