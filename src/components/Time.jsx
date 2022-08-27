<<<<<<< HEAD:src/components/Time.jsx
import React, { useState } from 'react'

import {
    Box,
    VStack,
    Button,
    Text,
    Flex,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
import Google from './Google.jsx';

function Time() {
  const [time, setTime] = useState({ms:0,s:0, m:0, h:0})
  const [time2, setTime2] = useState({ ms2:0,s2:0, m2:5, h2:0})
  const [interv, setInterv] = useState()
  const [interv2, setInterv2] = useState()
  const [status,setStatus] = useState(0);
  const [status2,setStatus2] = useState(0);


  const handleClick = ()=>{
    setShow(!show)
  }
  
  const start = ()=>{
    run2()
    run()
    setStatus(1)
    setStatus2(1)
    setInterv(setInterval(run,10))
    setInterv2(setInterval(run2,10))
  }
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
  let updatedMs2 = time2.ms2, updatedS2 = time2.s2, updatedM2 = time2.m2, updatedH2 = time2.h2
const run = ()=>{
  if(updatedM===60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS===60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs===100){
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({ms:updatedMs, s:updatedS,m:updatedM,h:updatedH})
}
//--------------------------------------------------------------------------------------------//


const run2 = ()=>{
  if(updatedM2===0){
    updatedH2--;
    updatedM2 = 60;
  }
  if(updatedS2===0){
    updatedM2--;
    updatedS2 = 60;
  }
  if(updatedMs2===0){
    updatedS2--;
    updatedMs2 = 100;
  }
  updatedMs2--;
  return setTime2({ms2:updatedMs2, s2:updatedS2,m2:updatedM2,h2:updatedH2})
}








const stop = ()=>{
  clearInterval(interv);
  clearInterval(interv2);
  setStatus(2)
  setStatus2(2)
}
const reset = ()=>{
  clearInterval(interv);
  clearInterval(interv2);
  setStatus(0)
  setStatus2(0)
  setTime({ms:0, s:0,m:0,h:0})
  setTime2({ms2:0, s2:0,m2:5,h2:0})
}
  const [show, setShow] = useState(false)
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} marginLeft="70px">
      <Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
             
              <Button  colorScheme="green" size="md" h='70px' w="70px" onClick={handleClick}>
               <Text  fontSize="70px"> + </Text> 
              </Button>
              <Text  >
              Track Time
              </Text>
            </VStack>
          </GridItem>
        
        </Grid>
       <Box>
       <Box border={"1px"} w="1000px" h="60px" marginTop="10px">
        <Text fontSize="40px" textAlign={"left"}>Today: Saturday, 27 Aug</Text>
       </Box>
       
       <Box border={"1px"} w="1000px" h="50px" >
       <Flex>
        <Box border={"1px"} h="50px" w="100px"><Text>Mon</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Tue</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Wed</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Thr</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Fri</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Sat</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px"><Text>Sun</Text><Text>0:00</Text></Box>
        <Box border={"1px"} h="50px" w="100px" marginLeft="170px"><Text>Week total</Text><Text>6:22</Text></Box>
        
        </Flex>
       </Box>
      
      
       <Box border={"1px"} h="400px" w="1000px" bg="rgb(239,239,239)" >

        {show ? <Google status2={status2} time2={time2} time={time} reset={reset} status={status} stop={stop} start={start}/> : <Text marginTop={"150px"}>“Take care of the minutes, and the days will take care of themselves.”
– Eliza Cook</Text>}
       </Box>
       </Box>
        
       
        
        </Flex>
        <Box marginLeft={"500px"} marginTop={"10px"}><Flex><Text >You have 29 days left in your free trial.</Text> <Button h="25px">Upgrade</Button></Flex></Box>
        </Box>
=======
import { Box } from '@chakra-ui/react'
import React from 'react'

function Time() {
  return (
   <Box>

   </Box>
>>>>>>> 3cac977cd1d3421eb5e859ef8ccd841c332f03b0:src/Components/SignPages/Time.jsx
  )
}

export default Time