import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/projects'>Projetos</NavLink>
      </div>

    </nav>
  )
}

export default Navbar