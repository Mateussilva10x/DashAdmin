import { useState } from 'react';


import './App.css';
import Sidebar from './componentes/sidebar/Sidebar';
import Navbar from './componentes/navbar/navbar';
import Main from './componentes/main/main'

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <Main/>
    </div>
  );
}

export default App;
