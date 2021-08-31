function Content() {
    return(
        <section className="content">

            <div class="content--bluredBackground"></div>

            <div className="content--texts">
                <div className="_psm">
                    <div className="_terciary _fz30 _pbsm">Welcome to Night City, Samurai!</div>
                    <div className="_primary _fz18">Enter the huge open world of Night City, a place that sets new standards in complexity, depth and visuals.</div>

                    <div className="buttons _df _1/1 _mtlg">
                        <a className="_1/2" href="https://www.gog.com/game/cyberpunk_2077" rel="noreferrer" target="_blank">
                            <button className="_1/1 _pvxxs _fz24">Play Now</button>
                        </a>
                        <a className="_1/2" href="https://www.youtube.com/watch?v=UnA7tepsc7s" rel="noreferrer" target="_blank">
                            <button className="_1/1 _pvxxs _fz24">Trailer</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;