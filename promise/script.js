/*
 promises are objects that can be used to handle asynchronous operations such as making HTTP requests or querying a database. When a promise is created, it is in one of three states: pending, fulfilled, or rejected.
*/

var userLoggedIn = false;

var promise = new Promise((resolve, reject) => {
    // wait for 1 sec
    setTimeout( () => {
        const data = { name: 'John', age: 30 }

        if(userLoggedIn == true){
            // promise is resolved
            resolve(data);
        }else{
            // promise is rejected
            reject('failed to fetch data');
        }
    }, 1000);
});

/* 
then()   => when successfull,
catch()  => when rejected
*/
promise
    .then( (data) => {
        console.log("Successfull");
        console.log('data : ', data);
    })
    .catch( (err) => {
        console.log("Unsuccessful");
        console.error('error : ', err);
    })




// ***************************************************************


/*
 chaining requests example 
 multiple promises are used to chain requests
 */

// Simulated asynchronous operations with promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful data retrieval
        const data = { url, content: 'This is the fetched data' };
        resolve(data);
        // Simulating an error
        // reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful data processing
        const processedData = `${data.content} - processed`;
        resolve(processedData);
        // Simulating an error
        // reject(new Error('Failed to process data'));
      }, 2000);
    });
  }
  
  // Chaining requests
  fetchData('https://example.com/data')
    .then((data) => {
      console.log('Data:', data);
      return processData(data);
    })
    .then((processedData) => {
      console.log('Processed Data:', processedData);
      // Continue with further operations
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors
    });
  