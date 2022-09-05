import React, { Component } from 'react'

export class Classcomponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count:0 
        }
    }

    componentDidMount(){
        const etkilenen = document.querySelector("#etkilenen");
        etkilenen.innerText = "Merhaba";
    }

    componentDidUpdate(){
        const etkilenen = document.querySelector("#etkilenen");
        etkilenen.innerText = this.state.count;
    }

    render() {
        return (
            <div style={{background:"red"}}>
                <h3>State:{this.state.count}</h3>
                <h3>Etkilenen Eleman:<span id='etkilenen'></span></h3>
                <button onClick={()=>this.setState({count:this.state.count + 1})}>Click</button>
            </div>
        )
    }
}

export default Classcomponents
