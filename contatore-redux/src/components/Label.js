import { connect } from "react-redux";
import React from 'react';

function Label(props){
    return (
        <div className='label'>
            {props.value}
        </div>
    );
}

export default connect(
    state => ({value: state.value})
)(Label);