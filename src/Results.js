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
        let subMod = this.props.data.data.length;
        if (subMod > 1) {
            return (
                <div id="result" >
                    <React.Fragment >
                        <h2>Subordinates of "{this.props.data.searchUser}"</h2>
                        <ol start="1" id='subOrd'>
                            {this.renderSubOrdinates()}
                        </ol>
                    </React.Fragment>

                </div>
            )
        }else{
            return(
                <div id="result"> He has no Subordinates </div>
            )
        }
    }
}