import logo from '../assets/logo-text.png';
const Futter = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-4  justify-center items-center container mx-auto mt-4 ">
        <div className="text-center lg:text-left">
          <img src={logo} className="mx-auto lg:mx-0" />
          <p className="text-gray-700">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex justify-center lg:justify-start gap-3 font-medium my-3 cursor-pointer">
            <li>Github</li>
            <li>Twitter</li>
            <li>Linkend</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h3 className="font-bold text-1xl">PRODUCT</h3>
          <ul className="font-medium text-gray-400">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold text-1xl">COMPANY</h2>
          <ul className="font-medium text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold text-1xl">LEGAL</h2>
          <ul className="font-medium text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <hr  className='mx-7'/>
      <div className="flex justify-between items-center py-4 mx-6">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <ul className="flex gap-4">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </section>
  );
};

export default Futter;
