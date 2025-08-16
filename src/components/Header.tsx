import plane from '../assets/plane.gif'

const Header = () => {
  return (
    <>
      <div className="flex justify-between align-middle items-center bg-[#40b0bd] w-full h-25">
        <div className="text-white font-cursive font-bold text-4xl ml-4">
          Shubham Babhulkar
        </div>

      <div>
        <img className='w-30' alt="plane" src={plane}/>
      </div>

        <div>
          <span className="p-2 m-2 text-white text-lg cursor-pointer hover:underline hover:opacity-60">
            About
          </span>
          <span className="p-2 m-2 text-white text-lg cursor-pointer hover:underline hover:opacity-60">
            Skills
          </span>
        <span className="p-2 m-2 text-white text-lg cursor-pointer hover:underline hover:opacity-60">
            Projects
          </span>

          <span className="p-2 m-2 text-white text-lg cursor-pointer hover:underline hover:opacity-60">
            Contact
          </span>
        </div>
      </div>
      
    </>
  );
};

export default Header;
