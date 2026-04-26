import Slider from '@mui/material/Slider';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My App
          </a>
        </div>
      </nav>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <button className="btn btn-primary">
          Click Me
        </button>

        <div style={{ width: 300, marginTop: 20 }}>
          <Slider defaultValue={50} />
        </div>
      </div>
    </div>
  );
}

export default App;