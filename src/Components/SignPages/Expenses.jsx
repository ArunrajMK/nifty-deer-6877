import React from 'react'

import {
    Box,
    VStack,
    Button,
    Text,
    Image,
    Flex,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
 
  
 
  export default function Expenses() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
              Expenses
              </chakra.h2>
              <Button colorScheme="green" size="md">
              + Track Expenses
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
            
            </Flex>
          </GridItem>
        </Grid>
       
        <Box  h="400px" marginTop={"50px"}  border="1px" bg="rgb(239,239,239)"> 
        <Box as={Container} h="200px" marginTop="110px">
            <Image fit={'cover'}
            align={'center'}
            rounded={'md'}
            alt={'product image'}
            src={
              'https://cache.harvestapp.com/static/illustrations/expense_onboard@2x-3E90EEDB.png'
            }
            w="250px"
            marginLeft={"60px"}
            />
        </Box>
        <Text textAlign={"center"}>Record those airline tickets, meals, miles, and other expenses in Harvest
so you can more accurately budget projects and invoice clients.</Text>
        </Box>
       
        <Box marginLeft={"500px"} marginTop={"10px"}><Flex><Text >You have 29 days left in your free trial.</Text> <Button h="25px">Upgrade</Button></Flex></Box>
      
        </Box>
    );
  }