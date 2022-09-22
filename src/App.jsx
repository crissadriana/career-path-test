import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StateProvider } from "./data/State";

import CheckSubmission from "./components/CheckSubmission";
import SeeResults from "./components/SeeResults";
import Wizard from "./components/Wizard";

const App = () => (
  <StateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<CheckSubmission />} />
          <Route
            path="wizard"
            element={
              <CheckSubmission>
                <Wizard />
              </CheckSubmission>
            }
          />
          <Route
            path="see-results"
            element={
              <CheckSubmission>
                <SeeResults />
              </CheckSubmission>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StateProvider>
);

export default App;
