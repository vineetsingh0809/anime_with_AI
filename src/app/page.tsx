import Header from "./components/HeaderComponent/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      {/* <HomePage /> */}
      <LoginPage />
    </div>
  );
}
