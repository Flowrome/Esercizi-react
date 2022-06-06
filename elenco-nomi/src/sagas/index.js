import fullName from './fullName';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    // console.log(fullName);
    yield all([...fullName])
}