import LSP from "./components/app/LSP-App";
import OCP from "./components/app/OCP-App";
import SRP from "./components/app/SRP-App";

//2-OCR

function App() {
  return (
    <div className="flex flex-col gap-10  justify-center">
      Please Scroll down to see All 5 Principles
      <div className="bg-green-200 flex flex-col">
        <p>
          The SRP App
          <span className="text-xs font-extralight p-2">
            {"Note:please open your browser's console to check the logs"}
          </span>
        </p>
        <SRP />
      </div>
      <hr />
      <hr />
      <hr />
      <div className="bg-slate-400">
        <p>The OCP App</p>
        <OCP />
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="bg-green-200">
        <p>The LSP App</p>
        <LSP />
      </div>
    </div>
  );
}

export default App;
