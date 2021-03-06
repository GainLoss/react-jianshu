import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    homeheader:[],
    sortleft:[],
    topic:[],
    list:[],
    user:[],
    book:[],
    clickHeader:'1'
});
export default (state=defaultState,action)=>{
    if(action.type===constants.HOME_HEADER){
        return state.set('homeheader',action.data) 
    }
    if(action.type===constants.SORT_LEFT){
        return state.set('sortleft',action.data) 
    }
    if(action.type===constants.SHOW_TOPIC_LIST){
        return state.set('topic',action.data)
    }
    if(action.type===constants.SHOW_LIST){
        return state.set('list',action.data)
    }
    if(action.type===constants.SHOW_USER_LIST){
        return state.set('user',action.data)
    }
    if(action.type===constants.SHOW_BOOK){
        return state.set('book',action.data)
    }
    if(action.type===constants.CLICK_HEADER_ACTIVE){
        return state.set('clickHeader',action.data)
    }
    return state
}