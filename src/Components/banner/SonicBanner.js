//This will generate the big banner for the quiz page
import "./SonicBanner.css"
import { Link } from "react-router-dom";

export const SonicBanner = () => {
    return (
        <>
            <div className="bannerArea">
                <div className="titleBacker">
                    <h1>Sonic Quiz 2</h1>
                    <Link to={"/"}>
                        <button id="homebtn">Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
