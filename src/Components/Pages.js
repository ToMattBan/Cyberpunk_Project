import leftArrow from "../Assets/LeftArrow.png"
import rightArrow from "../Assets/RightArrow.png"

function Pages() {
    return(
        <div className="pages _prxs _dn _df@tabletH">
            <div>01/03</div>
            <div className="arrows _mrnxs _bnxs _poa _wsnw">
                <img alt="" src={leftArrow} className="_mrlg" />
                <img alt="" src={rightArrow} />
            </div>
        </div>
    )
}

export default Pages