import React from 'react'
import Project from '../Styles/Projects.module.css'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'
  
  import logo from '../Images/logo'
const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={Project.Project_mainContainer}>
       <div className={Project.bar_items}>
        <div>
            <button className={Project.add}>+ New Project</button>
            {/* Import Modal */}
            <button className={Project.import} onClick={onOpen}>Import</button>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader textAlign="center" backgroundColor="#EEEEEE">Import Project</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
          <h3>Create a CSV file with six columns in this order:</h3><br/>
            <h4><strong>Client, Project, Project Code, Start Date, End Date, Project Notes</strong></h4><br/>
            <p>All headers are required exactly as written, but only the first two columns need to be filled in to import successfully. You can download a sample CSV file here.</p>
            <button type="button" className={Project.file_input} autoFocus>Attach CSV file</button>
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button backgroundColor='#11742A' color='#fff' mr={3}>Upload and import Project</Button>
            <Button variant={'solid'}  onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


            {/* Export Modal */}
            <button className={Project.export}>Export</button>
           
        </div>
        <input placeholder='Search by project or client'/>
       </div> {/* bar_items section end */}
       {/* Project Section */}
       <div className={Project.projects_section}>
           <div className={Project.project_list}>
            <h1>Projects</h1>
            <div className={Project.filter_btn}>
            <button>Active projects (1)</button>
            <div>
                <select>
                    <option>Filter by Client</option>
                    <option>Example Client</option>
                </select>
                <select>
                <option>Filter by Manager</option>
                <option>Example Manager</option>
                </select>
            </div>
            </div>
           {/* Table Container */}
           <TableContainer  >
         <Table variant='simple' style={{width:"100%",marginTop:"50px"}}>
    <Thead style={{backgroundColor:"#EFEFEF"}}>
      <Tr>
        <Th><input type='checkbox' /> <strong>Client</strong></Th>
        <Th><strong>Budget</strong></Th>
        <Th isNumeric><strong>Spent</strong></Th>
        <Th><strong>Remaining</strong></Th>
        <Th><strong>Costs</strong></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><input type='checkbox' /><strong> Example Project</strong></Td>
        <Td>50.00</Td>
        <Td>0.00</Td>
        <Td>50.00 (100%)</Td>
        <Td>$0.00 <select>
               <option>Action</option>
               <option>Edit</option>
               <option>Pin</option>
               <option>Duplicate</option>
               <option>Archive</option>
               <option>Delete</option>
            </select></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
           </div>
           
       </div>
       {/* Bottom section */}
       <div className={Project.bottom_section}>
        <div>
         <img src={logo} height='50px' alt="logo_img" />
         <h3>Terms</h3>
         <h3>Privacy</h3>
         <h3>Status</h3>
         <h3>Blog</h3>
         <h3>Help</h3>
        </div>
       </div>
    </div>
  )
}

export default Projects