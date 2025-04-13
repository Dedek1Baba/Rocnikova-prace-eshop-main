import { Link } from "react-router-dom"

export default function OnePLink(props) {
  return (
    <>
        <Link to={`/onep/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
