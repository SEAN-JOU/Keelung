
var email,name1,title,message;

function send(){
        email = document.querySelector('#email').value;
        name1 = document.querySelector('#name').value;
        title = document.querySelector('#title').value;
        message = document.querySelector('#message').value;
        if(email !== null && name1 !== null  && title !== null  && message !== null){
            $.ajax({
                url: 'https://chithink.com/api/contact.php?email='+email+"&name="+name1+"&title=基隆探點Go"+"&message="+message,
                type: "GET",
                dataType: "json",
                async: true,
                timeout: 10000,
                success: function (data) {
                    if (data.sysCode == "200") {
                        alert("發送成功，於三天內以電子郵件的方式回覆您的問題");
                    } else {
                        alert("發送失敗，請重新再操作一次。");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                     alert("發送失敗，請重新再操作一次。");
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }else{
            alert("發送成功，請檢查輸入資料是否齊全。");
        }
}


$(document).ready(function () {  
    // $('#submit_button').on('click', () => {

    // });
});







