import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Expenses from './Expenses'
import Invoices from './Invoices'

import SecondNavbar from './SecondNavbar'
import Time from './Time'


function MainRoutes() {
  return (
    <>
  
    <Routes>
<<<<<<< HEAD:src/components/MainRoutes.jsx
=======

>>>>>>> 3cac977cd1d3421eb5e859ef8ccd841c332f03b0:src/Components/SignPages/MainRoutes.jsx
    <Route path="/" element={ <SecondNavbar/>}/>
      <Route path="/time" element={ <Time/>}/>
      <Route path="/expenses" element={ <Expenses/>}/>
      <Route path="/invoices" element={ <Invoices/>}/>
    </Routes>
<<<<<<< HEAD:src/components/MainRoutes.jsx
=======

>>>>>>> 3cac977cd1d3421eb5e859ef8ccd841c332f03b0:src/Components/SignPages/MainRoutes.jsx
    </>
  )
}

export default MainRoutes