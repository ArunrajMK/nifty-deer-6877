import React from 'react'
import "./AllCss.css"
import {Link} from "react-router-dom"
import { Box } from '@chakra-ui/react';
import {  Flex,  Text } from '@chakra-ui/react';


function SecondNavbar() {
  return (
    <>
     
    



      <Box bg="#fa5d00" px={4} h="40px" >
        <Flex h={16} alignItems={'center'} margin="auto" >
        
          <Box marginLeft="15px"><Link to="time" ><Text color={"white"} fontSize="18px">Time</Text></Link></Box>
          <Box marginLeft="15px"><Link to="expenses"><Text  color={"white"} fontSize="18px">Expenses</Text></Link></Box>
          <Box marginLeft="15px"><Link to="invoices"> <Text color={"white"} fontSize="18px">Invoices</Text></Link></Box>
          <Box marginLeft="15px"><Link to="/projects"> <Text color={"white"} fontSize="18px">Projects</Text></Link></Box>
          <Box marginLeft="15px"><Link to="/teams "> <Text color={"white"} fontSize="18px">Teams</Text></Link></Box>

        
       
       
        </Flex>
      
    </Box>
    
    
    </>
   
  )
}

export default SecondNavbar