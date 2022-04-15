import React from "react";
import Navbar from "../src/component/navbar/Navbar";
import Banner from "../src/component/banner/Banner";
import Gallery from "../src/component/gallery/Gallery";
import DisplayBannerBlock from "./component/displayBannerBlock/DisplayBannerBlock";
import TodoList from "./component/todoList/TodoList";
import Counter from "./component/counter/Counter";
import ImageToggler from "./component/imageToggler/ImageToggler";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Gallery />
      <DisplayBannerBlock />

      {/* <EmployeesList /> */}

      {/* <TodoList />
      <Counter /> */}
    </div>
  );
}

export default App;
