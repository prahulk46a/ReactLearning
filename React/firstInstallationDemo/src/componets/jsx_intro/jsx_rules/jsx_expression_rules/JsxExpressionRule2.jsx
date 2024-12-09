let JsxExpressionRule2=()=> {
    let mode='Night';
    let username="Rahul"
    let password="xyz"
    let contact="7887466968"
    return (
      <div>
            1.{mode === 'Light' ? <p>☀️</p> : <p>🌙</p>}
            2.{username=="Rahul"&& password=="xyz"  && "Welcome user"}
      </div>
    )
}
export default JsxExpressionRule2;