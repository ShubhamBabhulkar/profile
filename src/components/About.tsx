import profileImage from "../assets/profilePhoto.jpg";
import useTypingEffect from "../hooks/useTypingEffect";
const About = () => {
  const text = useTypingEffect();

  return (
    <div className="flex">
      <div>
        <img
          className="ml-10 mt-10 w-50 rounded-full"
          alt="profileImage"
          src={profileImage}
        />
      </div>
      <div className="mt-20 ml-20">
        <h1 className="text-4xl">
          I am {" "}
          <span className="font-bold animate-blink-caret">
            {text}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default About;
