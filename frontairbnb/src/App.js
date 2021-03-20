import React, { Component } from 'react'

class App extends Component {

  async postData() {
    try {
      let result = await fetch('http://localhost/airbnb_jsproject/backairbnb/index.php/host/addhost',{
        method : 'post',
        mode : 'no-cors',
        header : {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          hostNom : 'hery',
          hostPrenom : 'fiononana',
          hostDDN : '12-12-1990',
          hostMail : 'heryfiononana19@gmail.com',
          hostTel : '345343',
          hostPays : 'dago'
        })
      })
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.postData} >Valider</button>
      </div>
    )
  }
}

export default App
