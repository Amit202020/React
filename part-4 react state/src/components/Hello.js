import React , {Component} from 'react'
class Hello extends Component{

    constructor(props){
        super(props)
        this.state={
            name:"Guest"
        }
    }

    onClickHandler=()=>{
        //this.state.name="srini"
        this.setState({
            name:'srini'
        }
        )
    }
      
    render(){
        return(
            <div>
                <h1>Welcome  {this.state.name}</h1>
                <button onClick={this.onClickHandler}>Login</button>
            </div>
        )
    }
}

export default Hello;