import React from 'react';
import SubOrdinates from './SubOrdinates';


export default class Results extends React.Component {
    renderSubOrdinates() {
        let results = [];

        this.props.data.data[1]['direct-subordinates'].map((item, i) => {
            results.push(<SubOrdinates item={item} key={i} />);
        })


        return results;
    }

    render() {
        console.log(this.props)
        return (
            <div id="result" >
                <h2>Subordinates of employee - {this.props.data.searchUser}</h2>
                <div>
                    <ol start="1">
                        {this.renderSubOrdinates()}
                    </ol>
                </div>
            </div>
        )
    }
}