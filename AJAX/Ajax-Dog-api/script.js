

// METHOD 1 : AJAX request
function fetchRandomDogImage1() {

    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function() {
        // console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);  /* convert string to json object */
        var imageUrl = responseJSON.message;  /* getting the url of image */
        $('#dog-image').attr('src', imageUrl);
    };

    xhrRequest.onerror = function() {
        console.log('Request Failed');
    }

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);     /* true for asynchronous */
    xhrRequest.send();
}


// METHOD 2 : AJAX request using JQUERY
function fetchRandomDogImage2() {

    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(responseData) {
            /* here we dont need to parse from string to JSON */
            // var responseJSON = JSON.parse(xhrRequest.response);  /* convert string to json object */
            var imageUrl = responseData.message;  /* getting the url of image */
            $('#dog-image').attr('src', imageUrl);
        }
    }).fail(function(){
        console.log('Request Failed');
    });
}

// METHOD 3 : using JQUERY shorthand
function fetchRandomDogImage3() {

    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var imageUrl = data.message;   
        $('#dog-image').attr('src', imageUrl);

    }).fail(function(xhr, textStatus, errorThrown){
        console.log('Request Failed');
    });
}


$('#fetch-dog-image-button').click(fetchRandomDogImage3);