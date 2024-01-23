import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Homepage from "./pages/Homepage/Homepage";
import PresentationPage from "./pages/PresentationPage/PresentationPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import FindUsPage from "./pages/FindUsPage/FindUsPage";
import MenuModificationPage from "./pages/MenuModificationPage/MenuModificationPage";
import FooterNav from "./components/FooterNav";
import { MealsProvider } from "./utils/context/MealsContext";
import { CartProvider } from "./utils/context/CartContext";
import MealCreationPage from "./pages/MealCreationPage/MealCreationPage";
import MealModificationPage from "./pages/MealModificationPage/MealModificationPage";
import AuthProvider from "./utils/context/authentication/AuthProvider";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./utils/context/authentication/PrivateRoute";
import ConfettiGenerator from "confetti-js";
import { useEffect, useContext } from "react";
import { ConfettiContext } from "./utils/context/ConfettiContext";

function App() {
  const { confetti, onClickConfetti } = useContext(ConfettiContext);

  useEffect(() => {
    if (confetti) {
      const confettiSettings = {
        target: "confetti-holder",
        max: "127",
        size: "1",
        animate: true,
        props: [
          "circle",
          "square",
          "triangle",
          "line",
          { type: "svg", src: "site/hat.svg", size: 25, weight: 0.2 },
        ],
        colors: [
          [165, 104, 246],
          [230, 61, 135],
          [0, 199, 228],
          [253, 214, 126],
        ],
        clock: "25",
        rotate: true,
        width: "1536",
        height: "703",
        start_from_edge: false,
        respawn: true,
      };

      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      return () => confetti.clear();
    }
  }, [confetti]);

  return (
    <div className="app">
      <MealsProvider>
        <CartProvider>
          <AuthProvider>
            <Router>
              <HeaderNav />
              <canvas id="confetti-holder"></canvas>
              <div className="main w-80">
                <Routes>
                  <Route path="/accueil" element={<Homepage />} />
                  <Route path="/presentation" element={<PresentationPage />} />
                  <Route path="/carte" element={<MenuPage />} />
                  <Route path="/localisation" element={<FindUsPage />} />
                  <Route path="/commande" element={<OrderPage />} />
                  <Route
                    path="/gestion"
                    element={
                      <PrivateRoute>
                        <MenuModificationPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/new" element={<MealCreationPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route
                    path="/meal/modification/:id"
                    element={
                      <PrivateRoute>
                        <MealModificationPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/accueil" />} />
                </Routes>
              </div>
              <FooterNav />
            </Router>
          </AuthProvider>
        </CartProvider>
      </MealsProvider>
    </div>
  );
}

export default App;
