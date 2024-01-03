import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';

function Routesfile() {

    const elements=[
        {path:"/" , element:"Home"},
        {path:"/contact",element:"Contact"},
        {path:"/profile", element:"Profile"},
    ]

  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Navigation/>
        elements.map((item) => {
        return <Route path={item.path} element={<><Navigation />{item.element}</>}/>)
        }
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routesfile
