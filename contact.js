
var email,name1,title,message;

function send(){
        email = document.querySelector('#email').value;
        name1 = document.querySelector('#name').value;
        title = document.querySelector('#title').value;
        message = document.querySelector('#message').value;
        if(email !== null && name1 !== null  && title !== null  && message !== null){
            $.ajax({
                url: 'https://chithink.mars.floppydemo.us//api/contact.php?email='+email+"&name="+name1+"&title=基隆探點Go"+"&message="+message,
                type: "GET",
                dataType: "json",
                async: true,
                timeout: 10000,
                success: function (data) {
                    if (data.sysCode == "200") {
                    alert(i18n.t('contact.alerts.success'));
                    } else {
                    alert(i18n.t('contact.alerts.fail'));
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                     alert("發送失敗，請重新再操作一次。");
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }else{
          alert(i18n.t('contact.alerts.incomplete'));
        }
}


$(document).ready(function () {  
    // $('#submit_button').on('click', () => {

    // });
});







