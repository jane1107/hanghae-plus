import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="problem A"
          content="enhance seo in your react application"
        />
        <meta property="og:site_name" content="Problem_A" />
        <meta property="og:title" content="enhance seo" />
        <meta property="og:url" content="https://jane1107.github.io/" />
        <meta
          property="og:description"
          content="enhance seo in your react application"
        />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
