import { all } from 'redux-saga/effects';
import users from './posts';
import posts from './users';

export default function* rootSaga(){
    // console.log(posts);
    yield all([...posts,...users]);
}