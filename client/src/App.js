import React, { useState, useEffect } from 'react';
import { API_URL } from './nav/config'
import Present from './components/presenter'
import { useInput } from './components/hooks-input'

function App() {
  const [readData, setReadData]=useState([])
  const {value: iPaid, bind: bindIPaid, reset: resetIPaid} = useInput('')
  const [whatsLeft, setWhatsLeft] = useState(readData)

  const getData = () => {
    fetch(`${API_URL}/data`)
    .then(response => response.json())
    // .then(data => data.map(
    //   element => <Present read={element} key={element._id}/>
    // ))
    // .then(components => setReadData(components.whatsLeft))
    .then(data => data.map(element => element))
    .then(component => setReadData(component))
    // .then(whatsLeft => )
    .catch(err => console.log(err))
  }

  const id = readData.map(element=> element._id)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await subtractInput()
    fetch(`${API_URL}/data/${id}`, {
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: {whatsLeft}
    })
    .then(() => resetIPaid())
  }

  const whatsLeftDisplay = parseFloat(readData.map(element => element.whatsLeft))

  const subtractInput = () => {
    const newData = whatsLeftDisplay - iPaid
    setWhatsLeft(newData)
  }

  useEffect(() => {
    getData()
  })


  return (
    <div className="container">
    <fieldset className="border border-dark mt-5">
        <h2 className="text-center">{whatsLeftDisplay}</h2>
        {/* { this.state.isUpdating ? <this.updateForm /> : <this.buttons />} */}
    </fieldset>

    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex justify-content-center flex-column mt-5">
        <label for="iPaidInput">How much did you pay?</label>
        <input type="number" className="form-control" id="iPaidInput" aria-describedby="iPaidDesc" placeholder="$" {...bindIPaid} required/>
        <small id="iPaidDesc" className="form-text text-muted">Insert how much you paid in dollars</small>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default App;
