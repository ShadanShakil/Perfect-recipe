// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeCreator from "./pages/RecipeCreator";
import Myposts from "./pages/Myposts";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/createrecipe" element={<RecipeCreator />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/myposts" element={<Myposts />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-[90vh] text-5xl">
                <h1>404 Not Found!</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
