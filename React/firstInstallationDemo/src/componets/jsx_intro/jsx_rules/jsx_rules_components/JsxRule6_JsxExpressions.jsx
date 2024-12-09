import JsxExpressionRule1 from "../jsx_expression_rules/JsxExpressionRule1.jsx";
import JsxExpressionRule2 from "../jsx_expression_rules/JsxExpressionRule2.jsx";
import JsxExpressionRule3 from "../jsx_expression_rules/JsxExpressionRule3.jsx";

let JsxRule6=()=> {
    let exam="{example}"
    return (
      <div>
          6. We can directly use strings no need of $ using {exam}<br></br>
          JSX Expression Rules
          <JsxExpressionRule1></JsxExpressionRule1>
          <JsxExpressionRule2></JsxExpressionRule2>
          {/* <JsxExpressionRule3></JsxExpressionRule3> */}
      </div>
      
    )
}
export default JsxRule6;
