import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import MessageScreen from "./pages/protected/MessageScreen";
import ThemeWrapperProvider from "./theme/ThemeWrapperProvider";

// Lazy loaded components must still be defined at the top
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Auth = React.lazy(() => import("./pages/auth/Auth"));
const ProtectedLayout = React.lazy(() => import("./layouts/ProtectedLayout"));
const Dashboard = React.lazy(() => import("./pages/protected/Dashboard"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <ThemeWrapperProvider>
    <React.Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
          {/* Protected Layout */}
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/messages" element={<MessageScreen />} />
          </Route>
          {/* About Page */}
          <Route path="/about" element={<About />} />
          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
    </ThemeWrapperProvider>
  );
};

export default App;
