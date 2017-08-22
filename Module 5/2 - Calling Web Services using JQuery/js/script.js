$(document).ready( function () {
    makeRequests();
})

function makeRequests () {
    $.getJSON('http://www.httpbin.org/ip')
        .done( function (response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        })
        .fail( function () {
            alert('An error has occurred')
        });
}