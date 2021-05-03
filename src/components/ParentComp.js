import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kishor'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Kishor'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent component')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
