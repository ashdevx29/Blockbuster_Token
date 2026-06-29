import './App.css'
import { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import Footer from "./Directives/Footer";

// Website Pages
import Homepage from "./Pages/HomePage";
import Presale from "./Pages/Presale";

// Dashboard Components
import SideNav from "./Componets/IcoComponets/SideNav";
import Loader from "./Componets/IcoComponets/Loader";

// Dashboard Pages
// const DashboardHome = lazy(() => import("./Pages/IcoDash/Dashboard"));
// const AddData = lazy(() => import("./Pages/IcoDash/AddData"));
// const AddFund = lazy(() => import("./Pages/IcoDash/AddFund"));
// const DecreaseFund = lazy(() => import("./Pages/IcoDash/DecreaseFund"));
// const AddWallet = lazy(() => import("./Pages/IcoDash/AddWallet"));
// const RemoveWallet = lazy(() => import("./Pages/IcoDash/RemoveWallet"));
// const UpdatePrice = lazy(() => import("./Pages/IcoDash/UpdatePrice"));
// const BuyHistory = lazy(() => import("./Pages/IcoDash/BuyHistory"));



// ================= Scroll Animation =================

function ScrollAnimationHandler() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll(
        "section, .page-section, .scroll-section"
      );

      elements.forEach((el) => {
        el.classList.add("scroll-animate");
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}



// ================= Scroll To Top =================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



// ================= Main Layout =================

function MainLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}



// ================= Admin Layout =================

// function AdminLayout({ children }) {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <SideNav />

//       {/* Page Content */}
//       <div className="flex-1 overflow-auto">
//         <Suspense fallback={<Loader />}>
//           {children}
//         </Suspense>
//       </div>

//     </div>
//   );
// }

// ================= Admin Layout =================
function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#000000] overflow-hidden">
      {/* Sidebar - Fixed width on large screens */}
      <SideNav />

      {/* Main Content Area - Takes remaining width */}
      <div className="flex-1 overflow-auto transition-all duration-300
                      lg:ml-0"  // Will be handled by SideNav collapse logic
      >
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}



// ================= App =================

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <ScrollAnimationHandler />

      <Routes>

        {/* Website Routes */}

        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />

        <Route
          path="/presale"
          element={
            <MainLayout>
              <Presale />
            </MainLayout>
          }
        />



        {/* Dashboard Routes */}

        {/* <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <DashboardHome />
            </AdminLayout>
          }
        />

        <Route
          path="/addData"
          element={
            <AdminLayout>
              <AddData />
            </AdminLayout>
          }
        />

        <Route
          path="/addFund"
          element={
            <AdminLayout>
              <AddFund />
            </AdminLayout>
          }
        />

        <Route
          path="/decreaseFund"
          element={
            <AdminLayout>
              <DecreaseFund />
            </AdminLayout>
          }
        />

        <Route
          path="/addWallet"
          element={
            <AdminLayout>
              <AddWallet />
            </AdminLayout>
          }
        />

        <Route
          path="/removeWallet"
          element={
            <AdminLayout>
              <RemoveWallet />
            </AdminLayout>
          }
        />

        <Route
          path="/updatePrice"
          element={
            <AdminLayout>
              <UpdatePrice />
            </AdminLayout>
          }
        />

        <Route
          path="/buyHistory"
          element={
            <AdminLayout>
              <BuyHistory />
            </AdminLayout>
          }
        />



        <Route path="*" element={<Navigate to="/" />} /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;













// import './App.css'
// import { useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation
// } from 'react-router-dom';

// import Footer from './Directives/Footer';
// import Homepage from './Pages/HomePage';
// import Presale from './Pages/Presale';

// function ScrollAnimationHandler() {
//   const location = useLocation();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           } else {
//             entry.target.classList.remove("show");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     setTimeout(() => {
//       const elements = document.querySelectorAll(
//         "section, .page-section, .scroll-section"
//       );

//       elements.forEach((el) => {
//         el.classList.add("scroll-animate");
//         observer.observe(el);
//       });
//     }, 100);

//     return () => observer.disconnect();
//   }, [location.pathname]);

//   return null;
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <ScrollAnimationHandler />

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/presale" element={<Presale />} />
//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;