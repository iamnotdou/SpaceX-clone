import React from "react";
import Header from "./components/Header";
import data from "../public/data.json";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      {data.spacex.map((el, index) => (
        <Section
          key={index}
          title={el.title}
          pic={el.pic}
          status={el.status}
          button={el.button}
          index={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
