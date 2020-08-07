$("#submit").submit(function(e) {
    alert('aaa');

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var url = 'https://script.google.com/macros/s/AKfycbxUS6UaIR8-wtCXkUyJxC55_52fJpYFMG2afg6J2aELkMYzT8s/exec';

var data = {
    field_1: 123,
    field_2: 456
};

$.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: data,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});    
});