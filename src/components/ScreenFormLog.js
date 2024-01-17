import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as screenFormService from '../service/ScreenFormService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const ScreenFormTable = () => {
    const [screenForms, setScreenForms]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        screenFormService.getAllScreenForms()
        .then(res => {
            setScreenForms(res.data);
        })
    }, [])
    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }

    const deleteScreenForm = (id) => {
        screenFormService
          .deleteScreenForm(id)
          .then(() => {
            screenFormService
              .getAllScreenForms()
              .then((res) => {
                setScreenForms(res.data);
              })
              .catch((error) => {
                console.error('Error fetching maintenance requests:', error);
              });
          })
          .catch((error) => {
            console.error('Error deleting maintenance request:', error);
          });
      };
    

    return (
        <div >
            <Table sx={{minWidth:900}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Phone
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                       Gender
                    </TableCell>
                    <TableCell>
                       Age
                    </TableCell>
                    <TableCell>
                       Injury Location
                    </TableCell>
                    <TableCell>
                       Injury Summary
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        screenForms.map((screenForm)=> {
                            return(
                                <TableRow
                                    hover
                                    key={screenForm.id}
                                >
                                    <TableCell>
                                        {screenForm.id}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.phone}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.email}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.gender}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.age}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.injuryLocation}
                                    </TableCell>
                                    <TableCell>
                                        {screenForm.injury}
                                    </TableCell>
                                    <TableCell align="right">
                                
                                        <IconButton component="a" onClick={()=> deleteScreenForm(screenForm.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}