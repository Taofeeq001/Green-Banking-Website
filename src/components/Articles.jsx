import "./Articles.css"
import money from "../images/currency.jpg"
import confetti from "../images/confetti.jpg"
import plane from "../images/plane.jpg"
import restaurant from "../images/restaurant.jpg"

const Articles = ()=> {
    return(
        <section className="articles-all">
            <p className="article-heading">Latest Articles</p>
            <div className="article-sub">
                <figure className="entity">
                    <img src={money} alt="" />
                    <div  className="ent-class">
                        <p>By Claire Robinson</p>
                        <p className="hov">Receive money in any currency with no fees</p>
                        <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                </figure>
                <figure  className="entity">
                    <img src={restaurant} alt="" />
                    <div className="ent-class">
                        <p>By Wilson Hutton</p>
                        <p className="hov">Treat yourself without worrying about money</p>
                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
                    </div>
                    
                </figure>
                <figure  className="entity">
                    <img src={plane} alt="" />
                    <div  className="ent-class">
                        <p>By Wilson Hutton</p>
                        <p className="hov">Receive money in any currency with no fees</p>
                        <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. we'll even show you...</p>
                    </div>
                </figure>
                <figure  className="entity">
                    <img src={confetti} alt="" />
                    <div  className="ent-class">
                        <p>By Claire Robinson</p>
                        <p className="hov">Our invite-only Beta accounts are now live!</p>
                        <p>After a lot of hard work by the whole team, we'are excited to lauch our closed beta. It's easy to request an invvite through the site...</p>
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Articles;