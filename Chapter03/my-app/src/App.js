import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  let title = "enhance seo";
  let description = "enhance seo in your react application";
  let url = "https://jane1107.github.io/";
  return (
    <div className="App">
      <Helmet>
        <meta name="problem A" content={description} />
        <meta property="og:site_name" content="Problem_A" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
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
