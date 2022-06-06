import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Input(props){
    const [value, setValue] = useState(props.value);

    //Il primo useEffect chiama changeValue appena  [value] (che è il valore della input) viene modificato! changeValue cambia il valore nello store
    useEffect(() => {props.changeValue(value)}, [value]);
    // Il secondo fa il contrario: quando il props.value viene modificato nello store, ad esempio dai button, chiama la funzione setValue che cambia il valore di value con props.value
    useEffect(() => {setValue(props.value)}, [props.value]);

    return (
        <input type="number" value={value} onChange={(ev) => setValue(ev.target.value)}/>
    );
}

export default connect(
    //il connect passa questi oggetti alle props
    state => ({value: state.value}), //mapStateToProps
    dispatch => ({changeValue: (value) => dispatch(
        //questo oggetto è la action che passo al reducer
        {type: 'changeValue',
        value: value}
    )}) //mapDispatchtoProps
)(Input);