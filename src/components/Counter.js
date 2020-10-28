import React from "react";
export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    add1 = () =>{
        this.setState({
            count: this.state.count+=1
        })
    }

    add3 = () =>{
        this.setState({
            count: this.state.count+=3
        })
    }

    add5 = () =>{
        this.setState({
            count: this.state.count+=5
        })
    }

    render(){
        return(
            <div className = "container">
                <div className = "row justify-content-center mt-3">
                    <h2>You click: {this.state.count} times</h2>
                </div>
                <div className = "row justify-content-center mt-3">
                <button type="button" className ="btn btn-dark col-2" onClick={this.add1}>Plus 1 clicks</button>
                <button type="button" className ="btn btn-dark col-2 ml-3 mr-3" onClick={this.add3}>Plus 3 clicks</button>
                <button type="button" className ="btn btn-dark col-2" onClick={this.add5}>Plus 5 clicks</button>
                </div>
            </div>
        )
    }
}