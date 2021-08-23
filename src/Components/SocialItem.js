function SocialItem(props) {
    var {url, img} = props;

    return (
        <a href={url} className="_mhxxs" >
            <img src={img} />
        </a>
    )
}

export default SocialItem;