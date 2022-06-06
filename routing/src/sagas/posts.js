import { call, put, takeLatest } from 'redux-saga/effects';
import { getPosts } from '../api/posts';
import { GET_POSTS } from '../actionTypes';

function* postsFromBackEnd(action){
    try{
        const data = yield call(getPosts);
        // console.log('sono chiamata');
        yield put({
            type: GET_POSTS.SUCCESS, 
            data: data.map(item => ({...item}))
        });
    }catch ( e ){
        yield put({type: GET_POSTS.ERROR, message: e.message});
        console.log('err',action.message);
    }finally{
        console.log('end saga GET_POSTS');
    }
}
function* watchPostsFromBackEnd(){
    yield takeLatest(GET_POSTS.REQUEST, postsFromBackEnd);
}

const expPosts = [watchPostsFromBackEnd()]
export default expPosts;

