import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Root() {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
    });
  }, []);

  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}