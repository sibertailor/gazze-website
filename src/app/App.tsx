import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { router } from "./routes";

function App() {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
    });

    let previousPath = router.state.location.pathname;

    const unsubscribe = router.subscribe((state) => {
      const currentPath = state.location.pathname;
      const isLoading = state.navigation.state === "loading";
      const isIdle = state.navigation.state === "idle";

      if (isLoading) {
        NProgress.start();
      }

      if (isIdle) {
        NProgress.done();

        if (currentPath !== previousPath) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          previousPath = currentPath;
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;