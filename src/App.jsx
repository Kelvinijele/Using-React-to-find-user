import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchTerm: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={this.handleChange}/>
        {this.state.monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        }).map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
