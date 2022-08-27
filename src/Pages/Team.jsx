import React from 'react'
import Teams from '../Styles/Teams.module.css';
import logo from '../Images/logo'
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
const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={Teams.Team_Container}>
       <div className={Teams.bar_items}>
        <div>
            <button className={Teams.add}>+ Invite person</button>
            {/* Import Model */}
            <button className={Teams.import} onClick={onOpen}>Import</button>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader textAlign="center" backgroundColor="#EEEEEE">Import projects</ModalHeader>
          <ModalBody>
             <h3>Create a CSV file with nine columns in this order:</h3>
             <ul><strong>First Name, Last Name, Email, Roles, Billable Rate, Cost Rate, Admin, Employee, Capacity</strong>
                 <li>The first three columns are required.</li>
                 <li>Separate unique roles with the | symbol.</li>
                 <li>Don’t enter currency symbols for rates. We’ll use your account’s default currency.</li>
                 <li>In the Admin and Employee columns, write “yes” or leave blank to import the person as a Member or contractor, respectively.</li>
                 <li>Importing existing teammates will replace any existing rates, roles, capacity, and permissions or employee/contractor status.</li>
             </ul>
             <h3>Don’t forget to include the header row spelled exactly as you see above! Here is a sample CSV.</h3>
             <button type="button" className={Teams.file_input} autoFocus>Attach CSV file</button>
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button backgroundColor='#11742A' color='#fff' mr={3}>Upload and import people</Button>
            <Button variant={'solid'}  onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            {/* Export Model */}
            <button className={Teams.export}>Export</button>
        </div>
       </div> {/* bar_items section end */}
       {/* Teams_detail_section */}
       <div className={Teams.team_items}>
        <h1>This Week:</h1>
        <div className={Teams.details}>
            <div>
                <h1>Total hours</h1>
                <h1>0.00</h1>
            </div>
            <div>
            <h1>Team capacity</h1>
                <h1>35.00</h1>
            </div>
            <div>
            <h1><input /> &nbsp; Billable</h1>
            <h1><input /> &nbsp;Non-billable</h1>
            </div>
            <div>
                <h1>0.00</h1>
                <h1>0.00</h1>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
             {/* Table Container */}
         <TableContainer mt="10px">
         <Table variant='simple' >
    <Thead style={{backgroundColor:"#EFEFEF"}}>
      <Tr>
        <Th><input type='checkbox' /> <strong>Employees</strong></Th>
        <Th><strong>Hour</strong></Th>
        <Th><strong>Capacity</strong></Th>
        <Th><strong>Billable hours</strong></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><input type='checkbox' /><strong> OWNER</strong></Td>
        <Td>0.00</Td>
        <Td>35.00</Td>
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
       {/* Bottom section */}
       <div className={Teams.bottom_section}>
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

export default Team