import logo from './logo.svg';
import './App.css';
import ScreenFormAdd from './pages/ScreenFormAdd';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Container } from '@mui/material';
import { ScreenForm } from './pages/ScreenForm';
function App() {
  return (
 
   <Container maxWidth="md">
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<ScreenFormAdd />} />
       <Route path="/log" element={< ScreenForm/>} />
     </Routes>
   </BrowserRouter>
  
 </Container>
  );
}

export default App;
