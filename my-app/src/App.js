import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
function App() {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<p />} />
      </Routes>
    </>
  );
}

export default App;
