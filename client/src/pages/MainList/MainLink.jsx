import { Link } from "react-router-dom"

export default function MainLink(props) {

  console.log(props.image)
  
  return (
    <>
        <Link to={`/product/${props._id}`}>
            <p>{props.name}</p>
            <img src={`${props.image}`} alt="sfg" />
            
        </Link>
    </>
  )
}