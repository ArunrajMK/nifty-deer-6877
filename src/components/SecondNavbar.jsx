import React from 'react'
import "./AllCss.css"
import {Link} from "react-router-dom"
<<<<<<< HEAD:src/components/SecondNavbar.jsx
import { Box } from '@chakra-ui/react';
import {  Flex,  Text } from 'chakra-ui';
=======
import { Box, HStack, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import {  Button, Flex,  Menu, Text } from 'chakra-ui';
>>>>>>> 3cac977cd1d3421eb5e859ef8ccd841c332f03b0:src/Components/SignPages/SecondNavbar.jsx


function SecondNavbar() {
  return (
    <>
     
    



<<<<<<< HEAD:src/components/SecondNavbar.jsx
      <Box bg="#fa5d00" px={4} h="40px" >
=======
      <Box bg="#fa5d00" px={4} h="40px">
>>>>>>> 3cac977cd1d3421eb5e859ef8ccd841c332f03b0:src/Components/SignPages/SecondNavbar.jsx
        <Flex h={16} alignItems={'center'} margin="auto" >
        
          <Box marginLeft="15px"><Link to="time" ><Text color={"white"} fontSize="18px">Time</Text></Link></Box>
          <Box marginLeft="15px"><Link to="expenses"><Text  color={"white"} fontSize="18px">Expenses</Text></Link></Box>
          <Box marginLeft="15px"><Link to="invoices"> <Text color={"white"} fontSize="18px">Invoices</Text></Link></Box>
        
       
       
        </Flex>
      
    </Box>
    
    
    </>
   
  )
}

export default SecondNavbar