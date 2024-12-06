let JsxExpressionRule2=()=> {
    let mode='Night';
    return (
      <div>
            {mode === 'Light' ? <p>☀️</p> : <p>🌙</p>}
      </div>
    )
}
export default JsxExpressionRule2;