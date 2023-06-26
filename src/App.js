import "./App.css";
import DateBuilder from "./Assests/DateBuilder";
import ForeCastData from "./Assests/ForeCastData";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          flexDirection: "row",
      
        }}
      >
        <DateBuilder />
        <ForeCastData />
      </div>

      <Map />
    </div>
  );
}

export default App;
