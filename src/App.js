import Index from "./pages/Index";
import Detail from "./pages/Detail";
import "./style/index.css";
import { Routes, Route } from "react-router-dom";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/:id" element={<Detail />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route exact path="/New" element={<New />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
