const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "div",
    null,
    Counter({ name: "First" }),
    Counter({ name: "Second" })
  );
}

function Counter({ name }) {
  const [count, setCount] = React.useState(0);

  const onButtonClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, `Counter - ${name}`),
    React.createElement("p", null, `You clicked ${count} time/s`),
    React.createElement("button", { onClick: onButtonClick }, "Click")
  );
}
