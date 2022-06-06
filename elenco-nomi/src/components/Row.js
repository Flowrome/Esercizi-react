import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FULL_NAME, GET_NAMES } from '../redux/actionTypes';
import { Td, Tr } from './styleRow';

function Row(props){
    //definisco lo stato a partire dalle props
    const data = {
        name: props.name,
        surname: props.surname
    };

    useEffect(() => {props.getFullName(data)},[]);
    useEffect(() => {props.getNames()},[]);
    
    useEffect(() => {console.log('props',props)},[props]);
    // useEffect(() => {
    //     setData(props.fullName)
    // }, [props]);

    //struttura html
    // il ? verifica che props.data non è null o undefined
    return props.data?.map( item =>
        <Tr id={item.id}>
            <Td>{item.name}</Td>
            <Td>{item.username}</Td>
            <Td>{item.fullName}</Td>
        </Tr>
    ) || <></>; //fragment: viene tolto a runtime
}

export default connect(
    //state to props
    // quando lo state DELLO STORE  si aggiorna, passa al componente le props:
    state => ({
        fullName: state.fullName,
        data: state.data
    }),
    // null,
    dispatch => ({
        getFullName: (data) => dispatch(
        //questo oggetto è la action che passo al reducer (passa prima dalla saga)
            {
                type: FULL_NAME.REQUEST,
                data: data
            }),
        getNames: () => dispatch(
            {
                type: GET_NAMES.REQUEST
            }
        )
    })
    )(Row);