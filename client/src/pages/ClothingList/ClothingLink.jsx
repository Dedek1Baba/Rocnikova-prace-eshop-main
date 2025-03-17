import { Link } from "react-router-dom"

export default function ClothingLink(props) {
  return (
    <>
        <Link to={`/view/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
