import "./App.css";
import PropertyList from "./PropertyList.css";
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.6, price: 130 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 5, price: 230 },
  { id: 129032, name: "Cactus Retreat", rating: 4.85, price: 350 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.29, price: 190 },
  { id: 129034, name: "Oceanview Condo", rating: 4.79, price: 130 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.9, price: 95 },
];

function App() {
  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
