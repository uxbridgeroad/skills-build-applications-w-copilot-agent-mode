function App() {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-5">OctoFit Tracker</h1>
        <p className="lead">Modern React 19 + Vite frontend for workout tracking.</p>
      </header>

      <section className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Welcome to your fitness dashboard</h2>
              <p className="card-text">
                This app is set up with React 19, Vite, Bootstrap styling, and a clean starter structure for the OctoFit Tracker.
              </p>
              <ul>
                <li>Port: 5173</li>
                <li>Framework: React 19</li>
                <li>Bundler: Vite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
