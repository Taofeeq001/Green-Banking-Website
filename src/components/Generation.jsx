import "./Generation.css"
import phone from "../images/phone.png"


const Generation = ()=>{
    return(
       <section className="gen">
            <div className="generation-text">
                <p className="heading">Next generation digital banking</p>
                <p>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <div className="butt">
                    <button><a href=".">Request Invite</a></button>
                </div>
            </div>
            <div id="image">
                <img className="name" src={phone} alt="" />
            </div>
            <div id="mobile-image">
                <img className="name" src={phone} alt="" />
            </div>
        </section>
       
    )
}
export default Generation;