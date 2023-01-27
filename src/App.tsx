import { ContextProvider } from "./ContextProvider";
import { Router } from "./router";

function App() {
  return (
    <ContextProvider>
      <div className="wrapper">
        <Router />
      </div>
    </ContextProvider>
  );
}

export default App;
