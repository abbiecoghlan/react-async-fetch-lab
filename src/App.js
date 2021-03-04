// create your App component here
import React from 'react';

class App extends React.Component {

    state = {
        spaceData: []
    }
componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then((data) => this.setState({ spaceData: data }))
}

render() {
    return (
      <div>
          </div>
    )
  }

}

export default App