import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterMain from "./router";

function App() {
  return (
    <div>
      <RouterMain />
      <ToastContainer />
    </div>
  );
}

export default App;
