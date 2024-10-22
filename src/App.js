import Recipelist from "./Components/FoodCard";
import Foodlist from "./Components/Foodlist";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="space-y-10">
      
      <Navbar/>
      <Foodlist />
    </div>
  );
}

export default App;
