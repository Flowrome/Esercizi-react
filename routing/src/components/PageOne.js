import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GET_USERS } from '../actionTypes';
import { Table } from '../styles/table';
import Button from './Button';


function edit(){
    console.log('modifico');
}

const ageList = [];
for(let i=1;i<=10;i++){
    ageList.push(Math.floor((Math.random()*40)+20));
}

function PageOne(props){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        props.getUsers();
        setCounter(counter + 1);
    },[]);

    // useEffect(() => {console.log('user props',props)},[props]);    

    const usersList = props.data?.map((item, index) => 
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>
                {ageList[index]}
                <Button name='Modifica' age={ageList[index]} action={edit}/>
            </td>
        </tr>
    ) || <></>;
    
    return (
        <div>
            <h2>Users</h2>
            <p>Ho renderizzato la pagina {props.counter} volte</p>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Età</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </Table>
        </div>
    );
}

export default connect(
    state => ({
        data: state.data,
        counter: state.counter
    }),
    dispatch => ({
        getUsers: () => dispatch({
            type: GET_USERS.REQUEST
        })
    })
)(PageOne);