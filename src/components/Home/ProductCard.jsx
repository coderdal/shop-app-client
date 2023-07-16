import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const ProductCard = ({ name, price, imageUrl, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow text-gray-900">
      <div className="w-60 h-60 p-4">
        <img src={imageUrl} alt="product image" className="w-full h-full" />
      </div>
      <div className="flex flex-col px-4 pt-3">
        <h1 className="font-semibold tracking-tight text-xl">{name}</h1>
        <p className="text-gray-500 tracking-tight text-base pb-2.5">
          {description}
        </p>
        <div className="flex justify-between pb-5">
          <span className="text-xl font-semibold tracking-wide">${price}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ProductCard;
