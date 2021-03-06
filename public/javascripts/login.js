/**
 * Created by Saurabh on 14-Apr-16.
 */

$(document).ready(function(){
    $("#signinBtn").click(function(){
        $("#signinModal").modal();
    });
    $("#signupBtn").click(function(){
        $("#signupModal").modal();
    });
    $("#logoutBtn").click(function(){
        window.location="http://192.168.159.28:1234/logout";
    });
    $("#register_form").submit(function(event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $( this ),
            url = $form.attr( 'action' );

        /* Send the data using post */
        var posting = $.post( url, { username: $('#username').val(), password: $('#password').val(),rollno: $('#rollno').val(), mobileno: $('#mobileno').val()  } );

        /* Alerts the results */
        posting.done(function( data ) {
            //alert(data.message);
            var ele=document.getElementById("eregister");
            ele.style.display="inline-block";
            ele.innerHTML=data.message;
            setTimeout(function(){
                if(data.flag == 1){
                    mswitch(1);
                }},1000);
        });
    });
    $("#login_form").submit(function(event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $( this ),
            url = $form.attr( 'action' );

        /* Send the data using post */
        var posting = $.post( url, { username: $('#username1').val(), password: $('#password1').val() } );
        var elog = 1;
        /* Alerts the results */
        posting.done(function( data ) {
                elog=0;
                window.location="http://192.168.159.28:1234/db";
            })
            .fail(function(){
                var ele=document.getElementById("elogin");
                ele.style.display="inline-block";
                ele.innerHTML="invalid username/password";
            });
    });
});

function mswitch(val){
    if(val == 1){
        $("#signupModal").modal('hide');
        $("#signinModal").modal('show');
    }
    else{
        $("#signinModal").modal('hide');
        $("#signupModal").modal('show');
    }
}
