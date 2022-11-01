import React from 'react';

class App extends React.Component {

  state = {
    hasLoaded: false,
    person: {},
  };

  fetchRandomPersonInfo = async () => {
    const request = await fetch('https://api.randomuser.me');
    const response = await request.json();
    const personObj = response.results;
    console.log(personObj);

    this.setState({
      hasLoaded: true,
      person: personObj[0]
    });
  }

  componentDidMount() {

    // fetch random person info
    this.fetchRandomPersonInfo();

    // console.log('componentDidMount');
  }

  shouldComponentUpdate(_nextProps, nextState) {

    const AGE_LIMIT = 50;

    if (nextState.person.dob.age > AGE_LIMIT) {
      return false;
    }

    return true;
  }

  render() {

    const { hasLoaded, person } = this.state;

    return (
      <div>
        {hasLoaded ? <section>

          <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`}></img>
          <br></br>
          <span>Nome: {(`${person.name.first} ${person.name.last}`)} </span>
          <br></br>
          <span>Email: {(`${person.email}`)} </span>
          <br></br>
          <span>Idade: {(`${person.dob.age}`)} </span>
          <br></br>

        </section> : "Loading..."}

      </div>
    )
  }
}

export default App;
