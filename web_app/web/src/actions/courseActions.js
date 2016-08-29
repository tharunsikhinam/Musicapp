/**
 * Created by quikr on 7/13/16.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

//Creating an action.. it must have a type and some JSON serializable data.
//action creators take in necessary parameters and return the JSON as shown below with a type and data to be sent.

export function loadCoursesSuccess(courses)
{

  return {type: types.LOAD_COURSES_SUCCESS , courses };
}
export function storeLoginId(login)
{
  return {type: 'STORE_LOGIN_ID' , login}
}
//thunk part of the code
//thunk boilerplate
/*

  export function <nameoffunction>()
  {
    return function(dispatch)
    {
        make a call to action creator with the data received from AJAX calls......,
        use promise client.
        let the ajax call return a promise..
        write functions to handle success case - generally call an action creator


    }

  }


 */

export function loadCourses()
{
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
