import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import { MainHooks } from "./components/hooks/MainHooks";




function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='hooks' element={<MainHooks />} />
      </Routes>
      
    </div>
  );
}

export default App;
