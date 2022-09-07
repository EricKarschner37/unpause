import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faCalculator,
  faCalendar,
  faGlobe,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { PageResume } from "./pages/PageResume";
import React from "react";

library.add(fab, faAt, faCalendar, faGlobe, faPhoneFlip, faCalculator);

function App() {
  React.useEffect(() => {
    document.title = "Eric Karschner";
  }, []);

  return (
    <BrowserRouter>
      <PageResume />
    </BrowserRouter>
  );
}

export default App;
