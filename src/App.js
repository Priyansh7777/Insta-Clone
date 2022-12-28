import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import MockMan from "mockman-js";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Explore from "./pages/Explore";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-252583974-1');


function App() {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  },[ ])
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<MockMan/>}/>
        <Route path="/" element={<SignIn/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/main" element={
          <Layout>
              <Dashboard/>
          </Layout>
        }/>
        <Route path="/explore" element={
          <Layout>
            <Explore/>
          </Layout>
        }/>
        <Route path="/message" element={
          <Layout>
            <Message/>
          </Layout>
        }/>
        <Route path="/profile" element={
          <Layout>
              <Profile/>
          </Layout>
        }/>
        <Route path="/search" element={
          <Layout>
            <Search/>
          </Layout>
        }/>
        <Route path="/notification" element={
          <Layout>
            <Notifications/>
          </Layout>
        }/>
      </Routes>
    </div>
  );
}

export default App;
