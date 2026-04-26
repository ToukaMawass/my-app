function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default App;