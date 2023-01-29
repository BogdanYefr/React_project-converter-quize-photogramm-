import { Route, Routes } from "react-router-dom";

import ConverterPage from "./components/converter/ConverterPage";
import HomePage from "./components/Home";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import PhotogrammPage from "./components/photogramm/PhotogrammPage";
import QuizPage from "./components/quiz/QuizPage";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="converter" element={<ConverterPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="photogramm" element={<PhotogrammPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
