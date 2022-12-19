import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = (props) => {

    const navigate= useNavigate();

    const editEmployee = (e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

  return (
    
        <tr key={props.employee.id} className="shadow ">
                        <td  className='text-left px-6 py-4 whitespace-nowrap '>
                            <div className='text-sm text-gray-500'>{props.employee.firstName}</div>
                        </td>
                        <td  className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{props.employee.lastName}</div>
                        </td>
                        <td  className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{props.employee.emailId}</div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                            <a  
                            onClick={(e,id)=>editEmployee(e,props.employee.id)}
                            className='hover:cursor-pointer  rounded bg-orange-400 hover:bg-orange-800 text-white px-6 py-2 font-semibold mr-2 '>Edit</a>
                            <a 
                            onClick={(e,id)=>props.deleteEmployee(e,props.employee.id)}
                            className='hover:cursor-pointer  rounded bg-red-400 hover:bg-red-800 text-white px-6 py-2 font-semibold '>Delete</a>
                        </td>
                    </tr>
    
  )
}

export default Employee;