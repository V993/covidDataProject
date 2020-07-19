/**
 * @author  : Leonardo Matone
 * @file    : requestsAPI.js
 * @purpose : to make a request to a given API with specific parameters
 * @date    : 07/17/20

    // basic request for specific endpoint:
    fetch('https://covidtracking.com/api/v1/us/daily.json')
        .then(response => response.json())
        .then((data) => {
          console.log(data)
        });``

    root address : https://covidtracking.com/api

    interesting endpoints:
    v1/us/daily.json

**/

/** @param address, the address at which client makes request
 *  @param endpoint, the specific endpoint at which client desires reques
 *  @param key, if the address requires a security token, client provides.
 *  @return request data in .json format
 *  @pre address must exist. if a key is required, the formatting must be 'Token=key'.
 *       endpoint cannot include the first '/'. function provides for '/'.
 *  @post json data is returned via client query to caller. data is logged in console.*/
async function request(address, endpoint, key = '') {

    // constructing address
    let fullRequest = address+'/'+endpoint;
    if (key!='') {
        console.log("token requirement. using token in request. ");
        fullRequest = fullRequest+'/Token='+key;
    }
    console.log("request address: "+ fullRequest);

    // fetch address

    function status(response) {
        if (response.status >= 200 & response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    function json(response) {
        return response.json();
    }
    
    const DATA = [];

    fetch(fullRequest)
        .then(status)
        .then(json)
        .then(data => {
            console.log('request succeeded. JSON response log:', data);
            DATA.push(data);
            return data;
        })
        .catch(function(error) {
            console.log('request failed. error response log:', error);
        });

    return DATA;
}


//test values

// var endpoint = window.prompt("enter endpoint: ");
const endpoint = 'v1/us/daily.json' // for testing
// alert("running with endpoint '"+endpoint+"'");

data = request("https://covidtracking.com/api", endpoint, '');

console.log(data);

<<<<<<< HEAD
console.log(data);
=======
export default DATA;
>>>>>>> ced9728c915353a9eb8e7fd1d1bc41206172aad5
