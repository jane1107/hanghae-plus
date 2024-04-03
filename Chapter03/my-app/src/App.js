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
      <h1>Hello World!</h1>
      <hr />
      <h3>SEO란 Search Engine Optimization의 줄임말</h3>
      <li>검색 엔진이 콘텐츠를 이해하도록 돕고</li>
      <li>사용자가 사이트를 찾도록 돕고</li>
      <li>검색엔진을 통해 사이트를 방문할지 여부를 결정하도록 도움</li>
      <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko">
        구글 참고
      </a>

      <h4>
        메타 태그나 favicon 은 질 좋은 컨텐츠를 제공하는 것 중에 일부분일 뿐.
        <br />
        좋은 컨텐츠를 담고 있는 것이 중요하다는 것 알았다.
        <br />
        컨텐츠가 너무 없어도 useful information 을 제공하지 않는다며 SEO가
        낮아진다.
        <br />
        이정도면 250글자가 됐으려나?!
      </h4>
    </div>
  );
}

export default App;
