//this file presents my info to the screen
import React, { Component } from 'react'
// import { API_URL } from '../nav/config'
import Update from './update'

export default class Presenter extends Component {
    // state = {
    //     isUpdating: false
    // }
    // handleDelete = async () => {
    //     await fetch(`${ API_URL }/info/${ this.props.read._id }`, {
    //     method: "DELETE",
    //     }).then( res => console.log(res))
    //     // .then(window.location.replace(`http://localhost:3001`))
    //     .then(() => this.props.refresh())
    //     .catch(err => console.log(err))
    // }

    // toggleUpdate = () => {
    //     this.setState({ isUpdating: !this.state.isUpdating})
    // }

    // updateForm = () => (
    //     <div>
    //     <Update read={this.props.read} refresh={this.props.refresh} closeUpdate={this.toggleUpdate} />
    //     <input type="button" value="Cancel" onClick={this.toggleUpdate} />
    //     </div>
    // )

    // buttons = () => (
    //     <div>
    //         <input type="button" value="Delete" onClick={ this.handleDelete } />
    //         <input type="button" value="Update" onClick= { this.toggleUpdate } />
    //     </div>
    // )

    render() {
        const read = this.props.read
        return(
            <fieldset className="border border-dark mt-5">
                    <h2 className="text-center">{read.whatsLeft}</h2>
                {/* { this.state.isUpdating ? <this.updateForm /> : <this.buttons />} */}
            </fieldset>
        )
    }
}

// const Presenter = (props) => {
//     const read = props.read
//         return(
//             <h2>{read.whatsLeft}</h2>
//         )
// }

// export default Presenter