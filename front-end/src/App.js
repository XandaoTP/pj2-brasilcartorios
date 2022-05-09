import { Route, Routes } from "react-router-dom";
import { AccessPortal } from "./views/Acessportal";
import { Services } from "./views/Cardsservices";
import { Webview } from "./views/Home";
import { Loginpage } from "./views/login";
import { NotFoundView } from "./views/Notfound";
import { ServiceInfoView } from "./views/servicedetail";




function App() {
  return (
    <Routes>
    <Route path="/" element={<Webview />} />
    <Route path="/*" element={<NotFoundView />} />
    <Route path="/servicosnotariais" element={<Services  />} />
    <Route path='/servicosnotariais/:id' element={<ServiceInfoView />} />
    <Route path='/portaldeacesso' element={<AccessPortal />} />
    <Route path='portaldeacesso/login' element={<Loginpage />} />
  </Routes>
  );
}

export default App;
