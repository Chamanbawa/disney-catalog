import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <p className="error">404</p>
        <Link to="/">
          <Button class="go-back" value="Go Back" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
