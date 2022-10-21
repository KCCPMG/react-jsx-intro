const FirstComponent = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const NamedComponent = (props) => {
  return (
    <p>
      My name is {props.name}
    </p>
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
    <FirstComponent text="My very first component" />
    <NamedComponent name="Connor"/>
  </App>,
  document.getElementById("root")
);
