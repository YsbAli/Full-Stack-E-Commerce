import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function Home() {
  return (
    <div>
      <NavBar>{/* <ProductList /> */}</NavBar>
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default Home;
