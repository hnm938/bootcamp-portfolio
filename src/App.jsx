import React from "react";

import { CustomCursor } from "./components/CustomCursor";
import Navbar from "./components/Navbar";

import "./App.scss";
import "./assets/global.scss";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>
      <CustomCursor />

      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    </div>
  );
}

export default App;
