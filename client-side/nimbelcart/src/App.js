
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from  './Client/NavBar/NavBar'
import Footer from "./Client/Footer/Footer";
function App() {
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
