const Tweet = (props) => {
  return (
    <div className="tweet">
      <span>
        <a href={"/users/" + props.user}>{props.username}</a>
      </span>
      <span>
        {String(props.date)}
      </span>
      <p>
        {props.message}
      </p>
    </div>
  )
}


const App = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  )
}


ReactDOM.render(
  <App>
    <Tweet username="kccpmg" user="connorwales" date={ new Date("October 17, 2022")} message="Feelin' good on a Monday"/>
    <Tweet username="kccpmg" user="connorwales" date={ new Date("October 18, 2022")} message="Feelin' good on a Tuesday"/>
    <Tweet username="kccpmg" user="connorwales" date={ new Date("October 19, 2022")} message="Feelin' good on a Wednesday"/>
  </App>,
  document.getElementById("root")
);