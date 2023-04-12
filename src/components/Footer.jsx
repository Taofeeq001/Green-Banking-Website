import "./Footer.css"
import logo from "../images/logo.svg"
import fb from "../images/facebook.svg"
import inst from "../images/instagram.svg"
import pink from "../images/pinterest.svg"
import twit from "../images/twitter.svg"
import youtube from "../images/youtube.svg"


const Footer = () =>{
    return(
        <section  className="foot">
            <div className="left-foot">
                <div>
                    <img src={logo} alt="" />
                    <div className="social-media">
                        <img src={fb} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twit} alt="" />
                        <img src={pink} alt="" />
                        <img src={inst} alt="" />
                    </div>
                </div>
                <div className="content-1">
                    <a href=".">About Us</a>
                    <a href=".">Contact</a>
                    <a href=".">Blog</a>
                </div>
                <div className="content-2">
                    <a href=".">Careers</a>
                    <a href=".">Support</a>
                    <a href=".">Privacy Policy</a>
                </div>
            </div>
            <div className="right-foot">
                <div>
                    <button>Request Invite</button>
                </div>
                    <p>(c) Easybank. All Right Researved</p>
            </div>
        </section>
    )
}
export default Footer;