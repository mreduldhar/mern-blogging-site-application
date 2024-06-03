import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 px-10 bg-slate-200 bg-opacity-50">
      <nav className="w-full h-full flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-semibold ">EchoBlog</NavLink>
        <div className="flex justify-between items-center gap-4 text-md font-semibold">
          <ul className="flex justify-between items-center gap-4">
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
