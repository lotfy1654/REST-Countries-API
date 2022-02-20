import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import axios from "axios";
class App extends React.Component {
  state = {
    countryData: [],
  };
  componentDidMount() {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      this.setState({
        countryData: res.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Countries countryData={this.state.countryData} />
      </div>
    );
  }
}

export default App;

/* <div className="row">
<div className="col-sm col-md-4">
  <div className="card">
    <img src={TestImg} className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title">Jordanian</h4>
      <p className="populations">
        populations: <span>10203140</span>
      </p>
      <p className="regions">
        regions: <span>Asia</span>
      </p>
      <p className="capital">
        capital: <span>Amman</span>
      </p>
    </div>
  </div>
</div>
</div> */
