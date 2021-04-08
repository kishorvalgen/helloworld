import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {

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
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
