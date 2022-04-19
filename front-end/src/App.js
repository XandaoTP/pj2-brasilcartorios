import { Route, Routes } from "react-router-dom";
import { Services } from "./views/Cardsservices";
import { Webview } from "./views/Home";
import { NotFoundView } from "./views/Notfound";
import { ServiceInfoView } from "./views/servicedetail";




function App() {
  return (
    <Routes>
    <Route path="/" element={<Webview />} />
    <Route path="/*" element={<NotFoundView />} />
    <Route path="/servicosnotariais" element={<Services  />} />
    <Route path='/servicosnotariais/:id' element={<ServiceInfoView />} />
  </Routes>
  );
}

export default App;
