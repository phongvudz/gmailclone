import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Router from "./Router";
import "./App.css";
import SendMail from "./components/SendMail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessagesIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessagesIsOpen);
  const user = useSelector(selectUser);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Router />
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </>
  );
}

export default App;
