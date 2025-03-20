import { Link } from "react-router-dom";

export default function MainLink(props) {
  
 

  return (
    <>
      <Link
        to={`/product/${props._id}`}
        className="flex flex-col items-center text-white hover:opacity-80 transition duration-300"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] object-cover mb-2"
        />
        <h2 className="text-center text-lg font-semibold mb-1">{props.name}</h2>
        <p className="text-center text-sm mb-0">{props.price} Kč</p>
      </Link>
    </>
  );
}