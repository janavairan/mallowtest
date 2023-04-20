
import "./application.css"

export default function Application(){
    return(
        <div className="application">
            <div className="rubby">
                <div className="app_img"><img src="https://www.mallow-tech.com/static/7aafddacb16e5b2664adeddaf40ffab1/497c6/t-ror.png" ></img></div>
                <p style={{fontSize:"larger",padding:"30px 0px 10px 100px"}}>Ruby On Rail</p>
            </div>
            <div className="php">
            <div className="app_img"><img src="https://www.mallow-tech.com/static/376f1d47d38809b0d455fcd1b87db8fe/497c6/t-laravel.png"></img></div>
                <p style={{fontSize:"larger",padding:"30px 0px 10px 142px"}}>PHP On Laravel</p>
            </div>
            <div className="ios">
            <div className="app_img"><img src="https://www.mallow-tech.com/static/20c2c8ac53d4a4f68f9d89eee7c5655c/497c6/t-h-i-os.png"></img></div>
            <p style={{fontSize:"larger",padding:"30px 0px 10px 142px"}}>IOS</p>
            </div>
            <div className="android">
            <div className="app_img"><img src="https://www.mallow-tech.com/static/3a4f7e6886461e1b1f8d3bc4209aa0f2/497c6/t-android.png"></img></div>
            <p style={{fontSize:"larger",padding:"30px 0px 10px 142px" }}>Android</p>
            </div>
            <div className="reactjs">
            <div className="app_img"><img src="https://www.mallow-tech.com/static/50f21b5b07de4797bc417aca27ce54f8/497c6/t-react.png"></img></div>
            <p style={{fontSize:"larger",padding:"30px 0px 10px 142px"}}>Reactjs</p>
            </div>
        </div>
    )
}
