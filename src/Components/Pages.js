import leftArrow from "../Assets/LeftArrow.png"
import rightArrow from "../Assets/RightArrow.png"

function Pages() {
    return(
        <div className="pages _prxs">
            <div>01/03</div>
            <div className="arrows _mrnxs _bnxs _poa _wsnw">
                <img src={leftArrow} className="_prlg" />
                <img src={rightArrow} />
            </div>
        </div>
    )
}

export default Pages