import React from 'react';


export default class Person extends React.Component{
    render() {
        return (
            <>
            
                <div>
                    <h3>name: {this.props.nom} </h3>
                    <h3>age:  {this.props.age} </h3>
                    <h3>langue: {this.props.email} </h3>
                    <h3>Pays: {this.props.langue} </h3>

                    <br />
                    <hr/>
                </div>

            </>

        )
    }
}