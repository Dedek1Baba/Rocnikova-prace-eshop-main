import { Link } from "react-router-dom"

export default function ClothingLink(props) {
  return (
    <>
        <Link to={`/clothing/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
