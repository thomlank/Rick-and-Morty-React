
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';


function NavBar() {
  return (
      <Nav className='customNavBar'>
        <div className='spacer'>
          <Nav.Link as ={Link} to='/' >Home</Nav.Link>
          <Nav.Link as ={Link} to='/about' >About</Nav.Link>
          <Nav.Link as ={Link} to='/characters'>Characters</Nav.Link>
        </div>
      </Nav> 
  );
}

export default NavBar;