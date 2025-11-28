import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <div className="ErrorPage">
            <h1 className="ErrorPageTitle">Page not Found</h1>
            <p className="ErrorPageParagraph">The page you’re looking for doesn’t exist or has been moved.</p>
            <Link to="/" className="ErrorPageButton">Home</Link>
        </div>
    )
}

export default ErrorPage