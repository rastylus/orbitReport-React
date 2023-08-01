import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  // console.log(satData[0]);
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      // console.log(filterByType())
      return newSatDisplay.orbitType === currentType;
    });
  };
  return (
    
    <div>
      {/* <p>{sat[0].status}</p> */}
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;


