import footer from '../assets/footer.jpg';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="flex flex-col items-center">
  <span className="text-gray-700 mb-6 text-lg font-medium flex items-center justify-center">
  Made with <FaHeart className="mx-2 text-red-600" /> in India
</span>
  <img
    src={footer}
    alt="footer-img"
    className="w-screen md:w-1/2 object-cover"
  />
</footer>

  )
}

export default Footer