export default function Entry(props)
{
    return(
        <div className="EntryCont">
            <img className="entryImg" src={props.entryImg.src} alt={props.entryImg.alt} />
            <div className="elemCont">
                <div className='topLine'>
                    <img className="elemImg" src={props.elemImg.src} alt={props.elemImg.alt} />
                    <h2 className="elemName">{props.elemName}</h2>
                    <a className="elemLink" href={props.elemLink}>View on Google Maps</a>
                </div>
                <h1 className="elemSubtitle">{props.elemSubtitle}</h1>
                <h3 className="elemDate">{props.elemDate}</h3>
                <h4 className="elemDesc">{props.elemDesc}</h4>
            </div>
        </div>
    )
}