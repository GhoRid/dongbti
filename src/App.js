import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import CompletePage from "./pages/CompletePage";

function App() {
  return (
    <div className="App max-w-[400px] w-full mx-auto">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/complete/:mbti" element={<CompletePage />}></Route>
          <Route path="/" element={<StartPage />}></Route>
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path="/question" element={<QuestionPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
