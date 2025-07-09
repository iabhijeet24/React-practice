import UserCard from "../src/components/usercard";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
 <UserCard
        name="ABHIJEET SINGH"
        image="https://robohash.org/abhijeet"
        age="18"
      />

      <UserCard
        name="ARNAV BANERJEE"
        image="https://robohash.org/abhijeetArnav"
        age="21"
      />

      <UserCard
        name="PRIYA SHARMA"
        image="https://robohash.org/PriyaSharma"
        age="32"
      />
    </div>
  );  
}

export default App;
