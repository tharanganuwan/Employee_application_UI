import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    const navigate= useNavigate();

    const [loading, setloading] = useState(true)
    const [employees, setemployees] = useState(null)

    useEffect(() => {
        const fetchData = async ()=>{
            setloading(true);
            try {
                const response =await EmployeeService.getEmployees();
                setemployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setloading(false);
        };
        fetchData();
    }, [])

    const deleteEmployee = (e,id)=>{
        e.preventDefault();
        EmployeeService.delateEmployee(id).then((res)=>{
            if(employees){
                setemployees((prevElement)=>{
                    return prevElement.filter((employee)=>employee.id !== id);
                });
            }
        });
    };
    

  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button
            onClick={()=> navigate("/addEmployee")}
            className='rounded bg-slate-600 hover:bg-slate-800 text-white px-6 py-2 font-semibold'>
                Add Employee
            </button>
        </div>
        <div className='flex shadow border-b mt-4'>
            <table className='min-w-full'>
                <thead className='bg-gray-50 '>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email Id</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-white '> 
                    {employees.map((employee)=> (
                        <Employee 
                        employee={employee} 
                        key={employee.id}
                        deleteEmployee={deleteEmployee}
                        ></Employee>
                    ))}
                    
                </tbody>
                )}
                
            </table>
        </div>
    </div>
  )
}

export default EmployeeList