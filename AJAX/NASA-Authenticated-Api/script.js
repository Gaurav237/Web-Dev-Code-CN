
function displayImage(data) {
    // creating image tag inside div conatiner

    // METHOD 1
    // $('<img>', {
    //     src: data.url,
    //     height: '100%',
    //     width: '100%',
    //     alt: 'img',
    // }).appendTo('#image-container');

    // METHOD 2
    var img = $(document.createElement('img'));
    img.attr('src', data.url);
    img.appendTo('#image-container');
}


$.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success: displayImage,
    data: {  // for multiple parameters to append in url (&)
        api_key: 'DEMO_KEY',
        data: '2018-06-05',
    }
});