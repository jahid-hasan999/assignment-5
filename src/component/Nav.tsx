import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Hamb-for-mbl */}

        <button className="lg:hidden text-2xl">☰</button>

        <img src={logo} alt="" />

        {/* Nav- mbl-a hide */}
        <ul className="hidden lg:flex space-x-4 gap-1.5">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2">
          <button className="btn btn-soft btn-accent text-black rounded-3xl bg-white">
            Sign In
          </button>

          <button className="btn btn-active btn-error rounded-4xl hover:bg-green-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
