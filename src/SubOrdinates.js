import React from 'react';


export default class SubOrdinates extends React.Component {
    render() {
        return (
            <li className="sub-ord">{this.props.item}</li>
        )
    }
}