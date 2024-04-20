import NavbarComponent from "./Components/Buyer Components/Home/Navbar/navbar.component";
import MainComponent from "./Components/Buyer Components/Main/Main.component";
import Authentication from "./Routes/Authentication/authentication.component";


const App = () => {
  return (
    <div>
      {/* <Authentication/> */}
      <NavbarComponent />
      <MainComponent />
    </div>
  );
}

export default App;
