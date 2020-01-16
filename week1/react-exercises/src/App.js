import React from "react";
import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";
import coin from "./components/coin.png";
import chat from "./components/chat.png";
import delivery from "./components/f-delivery.png";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <HobbyList />
      <hr />
      <div className='service-container'>
        <Guarantee
          img={delivery}
          title='Free shipping'
          description='And it is safe'
        />
        <Guarantee
          img={coin}
          title='100% Money back'
          description='A Lannister always pays his depts'
        />
        <Guarantee
          img={chat}
          title='Online support 24/7'
          description='You can call whenever you want'
        />
      </div>

      <hr />
      <Counter />
    </div>
  );
}

export default App;
