import { Route, Routes } from "react-router-dom";
import { Webview } from "./views/Home";
import { NotFoundView } from "./views/Notfound";



function App() {
  return (
    <Routes>
    <Route path="/" element={<Webview />} />
    <Route path="*" element={<NotFoundView />} />
  </Routes>
  );
}

export default App;
