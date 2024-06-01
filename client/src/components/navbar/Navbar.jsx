import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-24 flex justify-between items-center px-5">
        <NavLink to="/" className="text-3xl font-semibold ">EchoBlog</NavLink>
        <div className="right flex justify-between items-center gap-5 text-xl font-semibold mx-10">
          <ul className="flex justify-between items-center gap-5">
            <li className="hover:text-blue-800">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="hover:text-blue-800">
              <NavLink to="/politics" activeClassName="active">
                Politics
              </NavLink>
            </li>
            <li className="hover:text-blue-800">
              <NavLink to="/tech" activeClassName="active">
                Tech
              </NavLink>
            </li>
            <li className="hover:text-blue-800">
              <NavLink to="/entertainment" activeClassName="active">
                Entertainment
              </NavLink>
            </li>
            <li className="hover:text-blue-800">
              <NavLink to="/travel" activeClassName="active">
                Travel
              </NavLink>
            </li>
            <li className="hover:text-blue-800">
              <NavLink to="/sports" activeClassName="active">
                Sports
              </NavLink>
            </li>
          </ul>
          <NavLink to="/signup" activeClassName="active" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-3xl">
            Signup
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
