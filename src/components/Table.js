// import satData from "./satData";
// import Buttons from "./Buttons";
// import displaySats from "./Buttons"
// import App from "../App";

// let sat = satData;

// console.log(sat[4])
// function TableData() {
//   const [studentData, setStudentData] = useState(jsonData);
  
//   const tableRows = studentData.map((info) => {
//     return (
//       <tr>
//         <td>{info.id}</td>
//         <td>{info.name}</td>
//         <td>{info.city}</td>
//       </tr>
//     );
//   });
  
//   const addRows = (data) => {
//     const totalStudents = studentData.length;
//     data.id = totalStudents + 1;
//     const updatedStudentData = [...studentData];
//     updatedStudentData.push(data);
//     setStudentData(updatedStudentData);
//   };


  
  const Table = ({ sat }) => {
    // const [sat, setSat] = useState(satData);
    // Buttons();
    // const Table = satData.map(sat) => {
      // for( let i in sat);
      
      // let sats = sat.map((sat, id) => {
        //   return sat.name;
        // });
        // const newSats = [...new Set(satData.map((data, id) => data))];
        return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr key={sat[0].id}>
          <td>{ sat[0].name }</td>
          <td>{ sat[0].type }</td>
          <td>{ sat[0].launchDate }</td>
          {/* <td>{ JSON.stringify(sat[0].operational)}</td> */}
          <td>{ sat[0].operational === true ? "active" : "inactive"}</td>
        </tr>
        </tbody>
      </table>
    // );
    // }
  );
};




export default Table;

