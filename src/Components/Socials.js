import SocialItem from "./SocialItem";
import facebookIcon from "../Assets/social/facebook.png"
import youtubeIcon from "../Assets/social/youtube.png"
import twitterIcon from "../Assets/social/twitter.png"

function Socials() {
    return(
        <section className="socials _primary">
            <div>Socials</div>
            
            <span className="socialIcons _prxl _dib _mtxxs _ptxxs">
                <SocialItem img={facebookIcon} url="https://facebook.com" />
                <SocialItem img={youtubeIcon} url="https://www.youtube.com/channel/UC4zyoIAzmdsgpDZQfO1-lSA" />
                <SocialItem img={twitterIcon} url="https://twitter.com/CyberpunkGame" />
            </span>
        </section>
    )
}

export default Socials;