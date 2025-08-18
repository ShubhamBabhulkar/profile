import profileImage from "../assets/profilePhoto.jpg";
import useTypingEffect from "../hooks/useTypingEffect";
import linkedin from "../assets/linkedin.png";
import github from '../assets/github.png';
import email from '../assets/email.png';

const About = () => {
  const text = useTypingEffect();

  return (
    <div className="grid grid-cols-3 gap-6 items-center">
      <div className="col-span-1 flex flex-col items-center">
        <img
          className="w-48 h-48 rounded-full object-cover mt-6"
          alt="profileImage"
          src={profileImage}
        />

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/shubhamnb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/ShubhamBabhulkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="linkedin"
              className="w-20 cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>

      <div className="col-span-2 space-y-6 mt-20">
        <h1 className="text-4xl">
          I am <span className="font-bold animate-blink-caret">{text}</span>
        </h1>

        <div className="w-4/6">
          <h2 className="text-3xl mb-2 mt-10">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Hi, I’m Shubham Babhulkar, a passionate MEAN / MERN Stack Developer
            based in Pune, India. With a background in Computer Science
            Engineering, I currently build impactful solutions with the amazing
            team at ITC Infotech.
          </p>
          <br />
          <p className="text-xl leading-relaxed text-gray-700">
            Explore my projects on GitHub, review my skills, or connect with me
            on LinkedIn. I’m always open to meaningful conversations, new
            opportunities, and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
