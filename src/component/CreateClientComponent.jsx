import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class CreateClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            clientId: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClientIdHandler = this.changeClientIdHandler.bind(this);
        this.saveOrUpdateClient = this.saveOrUpdateClient.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ClientService.getClientById(this.state.id).then( (res) =>{
                let client = res.data;
                this.setState({name: client.name,
                    clientId: client.clientId
                });
            });
        }        
    }
    saveOrUpdateClient = (e) => {
        e.preventDefault();
        let client = {name: this.state.name, clientId: this.state.clientId};
        console.log('client => ' + JSON.stringify(client));

        // step 5
        if(this.state.id === '_add'){
            ClientService.createClient(client).then(res =>{
                this.props.history.push('/clients');
            });
        }else{
            ClientService.updateClient(client, this.state.id).then( res => {
                this.props.history.push('/clients');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeClientIdHandler= (event) => {
        this.setState({clientId: event.target.value});
    }

    cancel(){
        this.props.history.push('/clients');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Client</h3>
        }else{
            return <h3 className="text-center">Update Client</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClientId: </label>
                                            <input placeholder="ClientId" name="clientId" className="form-control" 
                                                value={this.state.clientId} onChange={this.changeClientIdHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateClient}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateClientComponent