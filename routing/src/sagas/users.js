import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_USERS } from '../actionTypes';
import { getUsers } from '../api/users';

function* usersFromBackEnd(action){
    try{
        const data = yield call(getUsers);
        // console.log('user saga', data);
        // yield delay(2000);
        yield put({
            type: GET_USERS.SUCCESS, 
            data: data.map(item => ({...item}))
        });
    }catch ( e ){
        yield put({type: GET_USERS.ERROR, message: e.message});
        console.log('err',action.message);
    }finally{
        console.log('end saga GET_USERS');
    }
}
function* watchUsersFromBackEnd(){
    // console.log('watcher chiamato');
    yield takeLatest(GET_USERS.REQUEST, usersFromBackEnd);
}

const expUsers = [watchUsersFromBackEnd()]
export default expUsers;


