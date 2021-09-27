import { Route } from "react-router";

import "./App.css";
import HomePage from "./pages/homepage.component";


function App() {

  const Hats = ()=>(
    <div>
      <h1>Hats Page</h1>
    </div>
  )

  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats}/>
    </div>
  );
}

export default App;
