import { Link } from "react-router-dom";

const Card = ({ title, image, alt = "", path }) => {
  return (
    <Link to={path}>
      <div className="bg-white text-gray-800 rounded-sm px-1 py-2 flex flex-col justify-center items-center">
        <img src={image} alt={alt} className="w-40 h-40 rounded object-fill" />
        <h2 className="mt-2 text-center text-xl font-semibold tracking-tight px-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
