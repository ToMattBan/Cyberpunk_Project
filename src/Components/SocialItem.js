function SocialItem(props) {
    var {url, img} = props;

    return (
        <a href={url} className="_mhxxs" >
            <img alt="social_Icon" src={img} />
        </a>
    )
}

export default SocialItem;