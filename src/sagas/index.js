import { fork, take, call, put } from 'redux-saga/effects';
import { getItemApi } from '../Api';
import { GET_ITEM, FETCH_ITEM } from "../redux/action/actionType";
import * as actions from '../redux/action/action';

function* watchFetchData(){
  // while true để vòng lặp vô tận thì mới gọi cho lần sau được
  while(true){
    yield take(FETCH_ITEM);

    // call là một blocking, hàm truyền vào call không cần bracelet
    const res = yield call(getItemApi);

    console.log("res",res);
    if (res){
      // put là non-blocking, có thể dispatch nhiều lần
      yield put(actions.getItem(res));
    }
    // Bên dưới chỉ execute khi action GET_ITEM được dispatch
    console.log("watching Getch Data");
  }
}

function* rootSaga() {
    // Xem acction watchFetch
    yield fork(watchFetchData);
}

export default rootSaga;