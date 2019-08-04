import React from 'react';
import SubOrdinates from './SubOrdinates';


export default class Results extends React.Component {
    renderSubOrdinates() {
        let results = [];

        if (this.props.data && this.props.data.data[1].hasOwnProperty('direct-subordinates')) {
            this.props.data.data[1]['direct-subordinates'].map((item, i) => {
                results.push(<SubOrdinates item={item} key={i} />);
            })
        }
        return results;
    }

    render() {
        return (
            <div id="result" >
                <h2>Subordinates of "{this.props.data.searchUser}"</h2>
                <ol start="1" id='subOrd'>
                    {this.renderSubOrdinates()}
                </ol>

            </div>
        )
    }
}