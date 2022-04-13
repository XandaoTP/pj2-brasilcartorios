import { Route, Routes } from "react-router-dom";
import { Cards } from "./components/Cards";
import { Services } from "./views/Cardsservices";
import { Webview } from "./views/Home";
import { NotFoundView } from "./views/Notfound";




function App() {
  return (
    <Routes>
    <Route path="/" element={<Webview />} />
    <Route path="*" element={<NotFoundView />} />
    <Route path="/servicosnotariais" element={<Services  />} />
  </Routes>
  );
}

export default App;
