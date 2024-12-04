import HorizontalDiv1 from "./horizontal_divs/horizontal_div1/HorizontalDiv1"
import HorizontalDiv2 from "./horizontal_divs/horizontal_div2/HorizontalDiv2"
import HorizontalDiv3 from "./horizontal_divs/horizontal_div3/HorizontalDiv3"
import HorizontalDiv4 from "./horizontal_divs/horizontal_div4/HorizontalDiv4"

let MainDiv=()=> {

      return (
        <div className="main_div">
            <h1 id="title">POSTER A4 / FLYER A5</h1>
            <p id="webinar">Webinar</p>
            <div id="subdiv">
                <HorizontalDiv1/>
                <HorizontalDiv2/>
                <HorizontalDiv3/>
                <HorizontalDiv4/>
            </div>
        </div>
      )
}
export default MainDiv