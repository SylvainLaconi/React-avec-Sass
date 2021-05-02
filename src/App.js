import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
