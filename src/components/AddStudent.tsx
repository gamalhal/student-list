import { Button, Paper  , TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import   {  Student  } from "../utils/data";
interface Props {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>
}
export const  AddStudent = ({setStudents,students}:Props ) => {
  const formData = {id: 999,name: "", age:0,email: "",class:"",
  };


  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const classRef = useRef<HTMLInputElement>(null)


   const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    formData.name = e.target.value;


   }
   const handleAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
    formData.age =parseInt( e.target.value);


   }
   const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    formData.email = e.target.value


   }
   const handleClassChange = (e:ChangeEvent<HTMLInputElement>) => {
    formData.class = e.target.value


   }
    const handleSubmit = () => {
      console.log(formData)
     setStudents([...students , formData])
     if(nameRef.current){
     nameRef.current.value = ""
     }
    if(ageRef.current) {

     ageRef.current.value = ""
    }
     if(emailRef.current) {
      emailRef.current.value = ""
      }
     if(classRef.current) {
      classRef.current.value = ""
    }
    };


    return (
        <>
          <Paper sx={{width: 300,padding: 5,marginTop: 1,gap: 1, display: "flex", flexDirection: "column"}}>

          <TextField  inputRef={nameRef}
           onChange={handleNameChange} id="outlined-basic" label="Full Name"  name ="full Name"variant="outlined"/>  
          <TextField inputRef={ageRef}
           onChange={handleAgeChange} id="outlined-basic" label="Age"  name ="age"variant="outlined" /> 
          <TextField inputRef={emailRef}
           onChange={handleEmailChange} id="outlined-basic" label="Email"  name ="email"variant="outlined" /> 
          <TextField inputRef={classRef}
           onChange={handleClassChange} id="outlined-basic" label="Class"  name ="class"variant="outlined" />    
          <Button  onClick={handleSubmit} variant="contained">submit</Button>
        </Paper>

        </>
    )
}