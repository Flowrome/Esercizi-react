import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getPeople } from '../api/people-api';
import { FULL_NAME, GET_NAMES } from "../redux/actionTypes";

// worker
function* fullName(action){
    try{
        console.log(action);
        yield delay(2000);
        yield put({type: FULL_NAME.SUCCESS, fullName: action.data.name+' '+action.data.surname});
    }catch (e) {
        yield put({type: FULL_NAME.ERROR, message: e.message});
        console.log('err',action.message);
    }finally{
        console.log('end saga');
    }
}
function* watchName(){
    yield takeLatest(FULL_NAME.REQUEST, fullName);
};


function* namesFromBackEnd(action){
    console.log(action);
    try{
        const data = yield call(getPeople);
        //console.log(data);
        yield put({
            type: GET_NAMES.SUCCESS, 
            data: data.map(item => ({...item, fullName: item.name+' '+item.username}))
        });
    }catch ( e ){
        yield put({type: GET_NAMES.ERROR, message: e.message});
        console.log('err',action.message);
    }finally{
        console.log('end saga GET_NAMES');
    }
}
function* watchNamesFromBackEnd(){
    yield takeLatest(GET_NAMES.REQUEST, namesFromBackEnd);
}

const fullExport = [watchName(), watchNamesFromBackEnd()]
export default fullExport;

