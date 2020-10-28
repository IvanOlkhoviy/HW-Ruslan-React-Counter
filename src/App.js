import React from "react";
import { Counter } from "./components/Counter";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <Counter/>
    )
  }
}

export default App;
