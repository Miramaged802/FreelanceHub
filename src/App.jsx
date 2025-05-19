import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Unauthorized from "./pages/Unauthorized";
import BlogDetails from "./pages/BlogDetails";
import Proposal from "./pages/Proposal";
import HowToFindWork from "./pages/HowToFindWork";
import HowToHire from "./pages/HowToHire";
import PostJob from "./pages/PostJob";
import ReviewProposals from "./pages/ReviewProposals";
import ManageContracts from "./pages/ManageContracts";
function App() {
  const location = useLocation();
  const authPaths = ['/login', '/register', '/forgot-password'];
  const hideLayout = authPaths.includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/how-to-find-work" element={<HowToFindWork />} />
          <Route path="/how-to-hire" element={<HowToHire />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <PrivateRoute>
                <Jobs />
              </PrivateRoute>
            }
          />
          <Route
            path="/post-job"
            element={
              <PrivateRoute>
                <PostJob />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <PrivateRoute>
                <Messages />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/review-proposals"
            element={
              <PrivateRoute>
                <ReviewProposals />
              </PrivateRoute>
            }
          />
          <Route
            path="/manage-contracts"
            element={
              <PrivateRoute>
                <ManageContracts />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
