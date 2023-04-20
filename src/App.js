import Header from "./header"
import Body from "./body"
import "./App.css"
import Cards from "./card"
import Application from "./application"
export default function App(){
  return(
    <div>
      <Header></Header>
      <Body></Body>
      <div className="partner_img">
        <div><img src="https://th.bing.com/th/id/OIP.jO618mn4PXWqu4B-aM1imAHaEb?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="aws_img"></img></div>
        <div><img src="https://th.bing.com/th/id/OIP.qXQYUWHL9uoEsU1NCyFprwHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="upwork_img"></img></div>
        <div><img src="https://th.bing.com/th/id/OIP.xT4ZyCfLUT5em-0tTwl8WAHaHy?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="appfutura_img"></img></div>
      </div>
      <div className="services">
        <h1 style={{fontSize:"50px"}}>Services</h1>
        <p style={{fontSize:"20px"}}>Right from web designing to providing end to end solutions, We work in a variety of domains like native mobile app, custom app development and offer an impressive service when it comes to business. By Keeping in mind that today is Significant, we lead shaping a better tomorrow.</p>
      </div>
      <Cards></Cards>
      <div className="project_data">
        <div className="project_1">
          <img src="https://th.bing.com/th/id/R.77ad9da98b3c07eb59e17d301df37415?rik=WgQj%2bDm2FXkAow&riu=http%3a%2f%2fclipartmag.com%2fimage%2fspider-web-drawing-7.png&ehk=71T6ZiAEKJEczitVHE849JAmcsVkVUW%2fm7m4gioEH7E%3d&risl=&pid=ImgRaw&r=0" className="project_img"></img>
         <span>95+ Projects</span>
        </div>
        <div className="project_2">
          <img src="https://th.bing.com/th/id/R.e6f94187bcb7e9373f1a0bbb2c67a101?rik=RP3QVieOAOL54g&riu=http%3a%2f%2fclipart-library.com%2fimages%2fAibKGkpbT.png&ehk=D6bm9s5pVkT2eKcVpyzGO72TJDirnXZ6fSP7M6LPM1c%3d&risl=&pid=ImgRaw&r=0" className="project_img"></img>
         <span>65+ Client</span>
        </div>
        <div className="project_3">
          <img src="https://image.freepik.com/free-icon/multiple-users-silhouette_318-49546.jpg" className="project_img"></img>
         <span>136+ Team size</span>
        </div>
        <div className="project_4">
          <img src="https://th.bing.com/th/id/OIP.W5gwZq1xYLdi8i3s08SvGwHaHa?pid=ImgDet&rs=1" className="project_img"></img>
         <span>2010Established</span>
        </div>
      </div>
      <div>
        <h1 style={{fontSize:"50px", textAlign:"center"}}>Technologies</h1>
        <p style={{fontSize:"20px", textAlign:"center"}} >We have expertise in all types of popular tech stack and offer the top trending technologies on demand. We are keen in providing our clients with the best possible technology which we always consider to be a part of a valued service.</p>
      </div>
      <Application></Application>
    </div>
  )
}