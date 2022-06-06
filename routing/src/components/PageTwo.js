import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GET_POSTS } from "../redux/actionTypes";
import { Card } from '../styles/cards';


function PageTwo(props){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        props.getPosts();
        setCounter(counter + 1);
    },[]);

    // useEffect(() => {console.log('props',props)},[props]);

    const postsList = props.data?.map(item =>
        <Card key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </Card>
    ) || <></>;

    return (
        <div>
            <h2>Posts</h2>
            <p>Ho renderizzato la pagina {props.counter} volte</p>
            <div className='flex'>
            {postsList}
            </div>
        </div>
    );
}

export default connect(
    state => ({
        data: state.data,
        counter: state.counter
    }),
    dispatch => ({
        getPosts: () => dispatch({
            type: GET_POSTS.REQUEST
        })
    })
)(PageTwo);