$(function () {
    var WindowHref = window.location.href;
    var params = new URLSearchParams(WindowHref.split('?')[1]);

    var Building = params.get('Building');
    var Room = params.get('Room');

    if (Building == null || Room == null) {
        alert('参数错误!');
        return;
    }

    function Submit(TryTime) {
        $.ajax({
            type: 'post',
            url: PostUrl,
            dataType: "json",
            type: "POST",
            async: false,
            data: JSON.stringify({
                Building: "01",
                Room: "1001"
            }),
            contentType: "application/json",
            success: function (data) {
                console.log(data.Code);
                if (data.Code == 0) {
                    alert("提交成功");
                    window.location.href = Redirect;
                }
                else {
                    alert()
                }
            },
            error: function (data) {
                alert("服务器相应错误");
            }
        });
    }
});