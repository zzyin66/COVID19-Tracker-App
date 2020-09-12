import React from 'react';

import { Cards, CountryPicker} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => { //method to change state of the country
    const data = await fetchData(country); //fetch the data

    this.setState({ data, country: country }); //set the state
  }

  render() {
    const { data } = this.state;

    return (
      <div >
        <div><h1>COVID-19 Tracking App</h1></div>
      <div className={styles.container}>
        <Cards data={data} />
      </div>
      <div className={styles.container2}>
          <CountryPicker handleCountryChange={this.handleCountryChange} className={styles.test} />
      </div>
      </div>
    );
  }
}

export default App;