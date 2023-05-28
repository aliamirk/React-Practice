import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // this being used outside creates an infinite loop as the component re renders upon every state change as each time this code is executed the re evaluates so better to use useEffect hook

  // if (storedUserloggedinInfo === '1') {
  //   setIsLoggedIn(true);
  // }

  useEffect(() => {

    const storedUserloggedinInfo = localStorage.getItem("isloggedIn");
    console.log(storedUserloggedinInfo);

    if (storedUserloggedinInfo === "1") {
      setIsLoggedIn(true);
    }

  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isloggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isloggedIn')
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
