import './App.css';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact us</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="card">
  <img src={"vespa.jpeg"}/>
  <div className="card-body">
    <h5 className="card-title">Vespa scooter</h5>
    <p className="card-text">fancy scooter for all</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card">
  <img src={"images.jpeg"}/>
  <div className="card-body">
    <h5 className="card-title">Vespa/Aprilla clutch shoe</h5>
    <p className="card-text">Genuine clutch shoe company fitted</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card">
  <img src={"vespa_shock.jpg"}/>
  <div className="card-body">
    <h5 className="card-title">Vespa scooter</h5>
    <p className="card-text">Genuine company fitted product</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
const element = <img src={"vespa.jpeg"} alt=".."></img>;
    

  
  
  </>
  );
}


export default App;
