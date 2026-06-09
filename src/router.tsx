import { createHashRouter } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Stories from "./pages/Stories.tsx";
import Pricing from "./pages/Pricing.tsx";
import Features from "./pages/Features.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/stories",
    element: (
      <>
        <Header />
        <Stories />
        <Footer />
      </>
    ),
  },
  {
    path: "/pricing",
    element: (
      <>
        <Header />
        <Pricing />
        <Footer />
      </>
    ),
  },
  {
    path: "/features",
    element: (
      <>
        <Header />
        <Features />
        <Footer />
      </>
    ),
  },
]);
