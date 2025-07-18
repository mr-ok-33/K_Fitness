// App.jsx
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router-dom';
import Registration from '../Registration/Registration';
import { Link } from 'react-router-dom';

function App() {
  const [showform, setShowForm] = useState(false);

  const toggle = () => {
    setShowForm(!showform);
  }
  return (
    <div className=''>
      <Header />
      <div className="flex items-center flex-col justify-center">
        <div className=" inline-block cursor-pointer bg-blue-500 text-white px-4 py-2 my-9 rounded shadow hover:bg-blue-600 transition" onClick={toggle}>
          {showform ? "close form" : "New Member"}
        </div>
        {showform && <Registration />}
      </div> 
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
