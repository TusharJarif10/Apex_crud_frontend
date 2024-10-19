import './App.css'
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {

  return (
    <div className='App'>

      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
          <Route exact path='/viewuser/:id' element={<ViewUser />} />
          {/* Add more routes as needed */}
        </Routes>

      </Router>


    </div>

  )
}

export default App
