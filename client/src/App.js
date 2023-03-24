//components
import CodeforInterview from './component/Codeforinterview';
import AllUsers from './component/AllUsers';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Routes> 
      <Route path='/' element={ <CodeforInterview/>} />
      <Route path='/all' element={ <AllUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
       </Routes>
     </BrowserRouter>
   
   
  );
}

export default App;
