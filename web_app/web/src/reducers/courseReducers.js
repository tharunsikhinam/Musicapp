
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [],action)
{
  //switch across actions.. type is a must in action
  switch(action.type)
  {

    case  types.LOAD_COURSES_SUCCESS:
        return action.courses;
    case 'STORE_LOGIN_ID':
      debugger;
      return [...state, Object.assign({},action.login)];

      //debugger;

        /*var newState = [...state];

        //return [...state , {title: x} ] ;

        return [...newState, Object.assign({},action.course)];*/

    default: return state;
  }
}
