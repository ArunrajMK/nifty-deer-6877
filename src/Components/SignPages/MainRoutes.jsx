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
    <Route path="/" element={ <SecondNavbar/>}/>
      <Route path="/time" element={ <Time/>}/>
      <Route path="/expenses" element={ <Expenses/>}/>
      <Route path="/invoices" element={ <Invoices/>}/>
    </Routes>

    </>
  )
}

export default MainRoutes