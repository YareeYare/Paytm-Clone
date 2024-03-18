import { Link } from "react-router-dom"

export default function BottomWarning({ label, buttonText, to }) {
      return <div className="py-2 text-sm flex justify-center">
            <div>
                  { label }
            </div>
            <Link className="underline cursor-pointer pl-1" to={to}>
                  { buttonText }
            </Link>
      </div>
}
