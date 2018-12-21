import $ from 'jquery';

function startApplications(someParams) {

    console.log(someParams); 
    
    $('body').html(someParams);

};

startApplications('hello -----');
