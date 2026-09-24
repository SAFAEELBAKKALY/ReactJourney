export default function Header()
{
    return(
        <header>
            <img className="header-img" src='./pic/laure.png' />
            <h2 className='user-name'>Laura Smith</h2>
            <h3 className='user-job'>Frontend Developer</h3>
            <a className='user-site'>laurasmith.website</a>
            <div className="btns">
                <button className="email-btn"><img src='./pic/email.png'/>Email</button>
                <button className="linkedin-btn"><img src='./pic/linkedin.png'/>Linkedin</button>
            </div>
        </header>
    )
}