import React from 'react';

export default class Toggle extends React.Component{
    state = {
        active: 'Active',
        desactive: 'Desactive'
    };



    render() {
        return (
            <>
                <h1>welcome to toggle component</h1>
                <button onClick={() => {
                    this.setState({active:this.state.desactive, desactive:this.state.active})
                }}> { this.state.active}</button>
            </>
        )
    }
        
}