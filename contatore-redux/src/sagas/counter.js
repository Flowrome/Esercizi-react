import { delay, put, takeLatest } from 'redux-saga/effects'
import { MINUS_ONE, PLUS_ONE } from '../redux/actionTypes';

function* plusOneSaga(action){
    try{
        console.log('saga:', action);
        yield delay(500);
        yield put({type: "PLUS_ONE.SUCCESS"});
        console.log('saga:',action);
    }
    catch (e) {
      yield put({type: "COUNTER.ERROR", message: e.message});
      console.log('err',action.message);
    }
    finally{
        console.log('chiudo la saga');
    }
}

function* minusOneSaga(action){
    try{
        console.log('saga:', action);
        yield put({type: "MINUS_ONE.SUCCESS"});
        console.log('saga:',action);
    }
    catch (e) {
      yield put({type: "COUNTER.ERROR", message: e.message});
      console.log('err',action.message);
    }
    finally{
        console.log('chiudo la saga');
    }
}

function* CVSaga(action){
    try{
        console.log('saga:', action);
        yield delay(3000);
        yield put({type: "changeValue.SUCCESS", value: action.value});
    }
    catch (e) {
      yield put({type: "COUNTER.ERROR", message: e.message});
      console.log('err',action.message);
    }
    finally{
        console.log('chiudo la saga');
    }
}

//qui definisco il watcher
function* counterWatcher(){
    yield takeLatest('changeValue', CVSaga);
    yield takeLatest(PLUS_ONE, plusOneSaga);
    yield takeLatest(MINUS_ONE, minusOneSaga);
    
};

export default counterWatcher;