import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Student } from '../utils/data';
import { useEffect } from 'react';


interface Props {

  students: Student[]
  checkMaxLimit :boolean
  

};



export const StudentTable= ({students,checkMaxLimit}: Props): JSX.Element => {

  useEffect(() => {
    if (students.length ===5 && checkMaxLimit) {
      alert("You have reached the maximum number of students")
    }
  }, [students,checkMaxLimit])

return (
     <TableContainer component={Paper} sx={{width: 400}} >
    <Table size="small" sx={{border :2}}>
        <TableHead>
        <TableRow>
        <TableCell>Full Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Class</TableCell>



        </TableRow>
        </TableHead>
        <TableBody>

         {students.map((item) => {
            return (
          <tr>
            <TableCell>{item.name}</TableCell>
             <TableCell>{item.age}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.class}</TableCell>
          </tr>
            );
          })}
        </TableBody>
      </Table>

      </TableContainer>

)

  
}