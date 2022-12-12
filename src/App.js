import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './componts/AddEmployee';
import EmployeeList from './componts/EmployeeList';
import Navbar from './componts/Navbar';
import UpdateEmployee from './componts/UpdateEmployee';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<EmployeeList/>}/>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/employeeList' element={<EmployeeList/>}/>
          <Route path='/addEmployee' element={<AddEmployee/>}/>
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
