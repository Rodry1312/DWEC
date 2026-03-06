import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;
