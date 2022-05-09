import { useState } from "react";
import { HeaderLogIn } from "./headerlogin";
import { Sidebar } from "./sidebar";

export function Layoutlogin ({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
      <div>
          <Sidebar showBar={openSideBar} closeBar={() => setOpenSideBar(false)} />
          <HeaderLogIn openSide={() => setOpenSideBar(!openSideBar)} />
          {children}
      </div>

  )  
}