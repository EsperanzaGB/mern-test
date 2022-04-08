import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbars from "./components/navbars";
import Footer from "./components/footer.js";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <div style={{
          position: "relative",
          left: 0,
          bottom: 0,
          right: 0,
      
      }}>

        <Footer />
      
      </div>
   </div>
 );
};
 
export default App;