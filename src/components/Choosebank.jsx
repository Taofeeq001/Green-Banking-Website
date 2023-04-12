import "./Choosebank.css"
import Props from "./Props.jsx"
import budgeting from "../images/budgeting.svg"
import onboard from "../images/onboarding.svg"
import api from "../images/api.svg"

const Choosebank = ()=>{
    return(
        <section className="easybank">
            <div className="easybank-head">
                <p className="hd">Why choose EasyBank?</p>
                <p>We leverage Open Banking to turn your Bank account into your financial hub. control your finances like never before.</p>
            </div>
            <div className="prop">
                <Props
                    demo = {budgeting}
                    heading = "Online Banking"
                    para = "our modern web and mobile application allow you to keep track of your finances wherever you are in the world"
                />
                <Props
                    demo = {budgeting}
                    heading = "Simple Budgeting"
                    para = "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits"
                />
                <Props
                    demo = {onboard}
                    heading = "Fast Onboarding"
                    para = "We dont do branches. Open your account in minutes online and start taking control of your finances right away"
                />
                <Props
                    demo = {api}
                    heading = "Open API"
                    para = "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier"
                />
            </div>
        </section>
    )
}
export default Choosebank;