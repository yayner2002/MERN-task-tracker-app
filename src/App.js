import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import CreateTask from './components/CreateTask';
import CreateUser from './components/CreateUser';


function App() {
  return (
     <>
     <NavBar />
     <Routes>
      <Route path='/' element={<TaskList />} />
      <Route path='/edit/:id' element={<EditTask />} />
      <Route path='/create' element={<CreateTask />} />
      <Route path='/user' element={<CreateUser />} />
     </Routes> 
     </>   
  );
}

export default App;
