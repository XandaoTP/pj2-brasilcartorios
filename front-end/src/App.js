import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/privateroute";
import { AccessPortal } from "./views/Acessportal";
import { Services } from "./views/Cardsservices";
import { CartAreaView } from "./views/cartoriosadmin";
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
    <Route 
    path='/portaldeacesso' 
    element={
    <PrivateRoute>
    <AccessPortal />
    </PrivateRoute>
    } />
    <Route path='/login' element={<Loginpage />} />
    <Route 
      path='/portaldeacesso/servicos'
      element={<PrivateRoute userPriv={[1]}><CartAreaView /></PrivateRoute>} />
  </Routes>
  );
}

export default App;
