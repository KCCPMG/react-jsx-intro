
const Person = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Learn some information about this person</p>
      <h3>
        {props.age > 19 ? "please go vote!" : "you must be 18"}
      </h3>
      <ul>
        {props.hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  )
}


const App = (props) => {
  return (
    <div className="app">
      <Person name="Larry" age={10} hobbies={["surfing", "video games"]} />
      <Person name="Curly" age={20} hobbies={["beekeeping", "baking", "jumping up and down"]} />
      <Person name="Moe" age={30} hobbies={["magnets"]} />
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"));