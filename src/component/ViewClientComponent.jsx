import React, { Component } from 'react'
import ClientService from '../service/ClientService'

class ViewClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            client: {}
        }
    }

    componentDidMount(){
        ClientService.getClientById(this.state.id).then( res => {
            this.setState({client: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Client Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.client.name }</div>
                        </div>
                        <div className = "row">
                            <label> ClientId: </label>
                            <div> { this.state.client.clientId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewClientComponent