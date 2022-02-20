import React from "react";
import "./main.css";
import axios from "axios";

class Countries extends React.Component {
  state = {
    name: "",
    result: [],
    option: [],
  };

  handleChange = (ele) => {
    this.setState({
      name: ele.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { name } = this.state;
    let allItems = document.getElementsByClassName("data-box");
    allItems[0].style.display = "none";
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
      this.setState({
        result: res.data,
      });
    });
    this.setState({ option: [] });
  };

  handleSelect = () => {
    var select = document.getElementById("select-box-opt"),
      optionSelected = select.options[select.selectedIndex].value,
      allItems = document.getElementsByClassName("data-box");
    allItems[0].style.display = "none";

    this.setState({ result: [], name: "" });
    if (optionSelected !== "filter") {
      axios
        .get(`https://restcountries.com/v3.1/region/${optionSelected}`)
        .then((res) => {
          this.setState({
            option: res.data,
          });
        });
    }
  };

  render() {
    let { countryData } = this.props,
      { result } = this.state,
      { option } = this.state;
    const countriesData = countryData.map((ele) => {
      return (
        <div key={ele.name} className="item">
          <div className="card">
            <img src={ele.flags.svg} className="card-img" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{ele.name}</h4>
              <p className="populations">
                populations: <span>{ele.population}</span>
              </p>
              <p className="regions">
                regions: <span>{ele.region}</span>
              </p>
              <p className="capital">
                capital: <span>{ele.capital}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });

    const resultSearch = result.map((ele) => {
      return (
        <div key={ele.name.common} className="item">
          <div className="card">
            <img src={ele.flags.svg} className="card-img" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{ele.name.common}</h4>
              <p className="populations">
                populations: <span>{ele.population}</span>
              </p>
              <p className="regions">
                regions: <span>{ele.region}</span>
              </p>
              <p className="capital">
                capital: <span>{ele.capital}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });

    const resultSelected = option.map((ele) => {
      return (
        <div key={ele.name.common} className="item">
          <div className="card">
            <img src={ele.flags.svg} className="card-img" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{ele.name.common}</h4>
              <p className="populations">
                populations: <span>{ele.population}</span>
              </p>
              <p className="regions">
                regions: <span>{ele.region}</span>
              </p>
              <p className="capital">
                capital: <span>{ele.capital}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="countries-box">
        <div className="container">
          <div className="search-box">
            <div className="input-box">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="search"
                  id="name"
                  placeholder="Search for a country"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="select-box">
              <select id="select-box-opt" onChange={this.handleSelect}>
                <option value="filter">Filter By Regions</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
          <div className="data-box">{countriesData}</div>
          <div className="data-box-search">{resultSearch}</div>
          <div className="data-box-select">{resultSelected}</div>
        </div>
      </div>
    );
  }
}
export default Countries;
