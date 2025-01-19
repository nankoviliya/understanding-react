// It's the basic node of our application DOM
const rootNode = document.getElementById("app");

// Here we create React virtual DOM inside our basic node
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

// This function represents how React components work
// under the hood, so React basically calls createElement
// function and passes required parameters.
function App() {
  const [count, setCount] = React.useState(0);

  const onButtonClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Counter"),
    React.createElement("p", null, `You clicked ${count} time/s`),
    React.createElement("button", { onClick: onButtonClick }, "Click")
  );
}
