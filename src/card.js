import "./card.css"



export default function Cards(){
    return(
<div className="cards">
    <div className="card_1">
        <div>
            <img src="https://www.mallow-tech.com/static/863ba28991e444cd87dd8dde3270f040/16c7d/web-application-home-icon.png" className="card_1img"></img>
        </div>
        <div>
            <h3>Web Development</h3>
            <p style={{fontSize:"20px"}}>"let us build and show the world your ideas"Building a website has never been</p>
        </div>
    </div>
    <div className="card_2">
    <div>
            <img src="https://www.mallow-tech.com/static/edc6b91208fb579f3568d156bea0bdc0/e0491/home-page-mobile-application-icon.png"className="card_2img"></img>
        </div>
        <div>
            <h3>Mobile App Development</h3>
            <p style={{fontSize:"20px"}}>Mobile application development is a prominent need for enhancing business. Keepin...</p>
        </div>
    </div>
    <div className="card_3">
    <div>
            <img src="https://www.mallow-tech.com/static/8e1ce62730260ecbc61588e12275cfcc/e0491/home-page-business-solution.png" className="card_3img"></img>
        </div>
        <div>
            <h3>End To End Solution</h3>
            <p style={{fontSize:"20px"}}>Solutions are the start point of every idea. By keeping this as the bottom line, w...</p>
        </div>
    </div>
    <div className="card_4">
    <div>
            <img src="https://www.mallow-tech.com/static/9b3b68ec6e6ccc7c76e53d2ebed2fa0d/e0491/home-page-ux-design-icon.png" className="card_4img"></img>
        </div>
        <div>
            <h3>UI/UX Design</h3>
            <p style={{fontSize:"20px"}}>When it comes to design, we deliver the most phenomenal elements out in the industr...</p>
        </div>
    </div>
</div>        
    )
}