import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import useSticky from "./hooks/useSticky.js";
import Welcome from "./components/home/Welcome";
import Navbar from "./components/home/Navbar";



function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
    </>
  )
}

export default App;


