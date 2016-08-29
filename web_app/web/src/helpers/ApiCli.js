/**
 * Created by quikr on 8/12/16.
 */
import axios from 'axios';
import {displayError,noError} from '../redux/actions/Errors/errorActions';
import {beginAjaxCall,endAjaxCall} from '../redux/actions/ajaxStatusActions';
import server_error,{storeServerError} from '../redux/actions/Errors/error.class';





class ApiCli
{
  constructor()
  {
    this.config = {
      url: '',
      method: 'get',
       params: {},
      data: {},
      withCredentials: true,
      responseType: 'json',
      validateStatus: function(status)
      {
        return status >=200 && status <300; //default
      }

    };
  }
  asyncAction(url,method,params,data,dispatch) {
    return new Promise((resolve, reject) => {
      this.config.url = process.env.REQ_URL + url;
      this.config.method = method;
      this.config.params = params;
      this.config.data = data;


      axios(
        this.config
      ).then((response)=> {
         resolve(response);
      }).catch(function (error) {

        //Error Handling..
        dispatch(endAjaxCall());


        if(error.response == undefined)
        {
          storeServerError(dispatch,server_error);

        }
        else {
          if(error.response.status == 404)
          {
            storeServerError(dispatch,server_error);
          }
          else {
          dispatch(displayError(error.response.data));}
          dispatch(noError());
          }

        reject(error);
      });
    });
  }

}
export default ApiCli;
