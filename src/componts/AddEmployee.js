import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
    const [employee, setemployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const handelChange = (e) =>{
        const value = e.target.value;
        setemployee({...employee,[e.target.name]:value});
    };

    const navigate= useNavigate();

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response);
            navigate("/employeeList");
        }).catch((error)=>{
            console.log(error);
        })
    };

    const reset = (e)=>{
        e.preventDefault();
        setemployee({
            id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        });
    };

  return (
    <div className='flex max-w-2xl mx-auto my-24 shadow border-b bg-zinc-200' >
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input 
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={(e)=>handelChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input 
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={(e)=>handelChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type="email"
                name="emailId"
                value={employee.emailId}
                onChange={(e)=>handelChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button
               onClick={saveEmployee}
               className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 '>
                Save
                </button>
               <button
               onClick={reset}
                className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 '>
                Clear
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default AddEmployee