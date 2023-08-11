import React from 'react';

export default class Compteur extends React.Component{
    state = {
        count: 0
    }
    render() {
        return (
            <>
                <h1>welcome to </h1>
                <h1>{this.state.count}</h1>
                
                <button onClick={() => {
                    this.setState(
                        {count:this.state.count+1}
                    )
                }}>incrementwer</button>

                <button onClick={() => {
                    this.setState(
                        {count:0}
                    )
                }}>retour a zero</button>
            </>
    )
}


}