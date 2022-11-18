// 在输入框内填入默认值
// DOM树加载完成后执行
$(function () {
    var InputBNum = document.getElementById('BuildingNum');
    var InputRNum = document.getElementById('RoomNum');

    var InitColor = "#999999";

    var OriginalBColor = InputBNum.style.color;
    var OriginalRColor = InputRNum.style.color;

    InputBNum.value = InitBText;
    InputBNum.style.color = InitColor;
    InputRNum.value = InitRText;
    InputRNum.style.color = InitColor;

    var WindowHref = window.location.href;
    var params = new URLSearchParams(WindowHref.split('?')[1]);

    var Building = params.get('Building');
    var Room = params.get('Room');

    if (Building != null) {
        InputBNum.value = Building;
        InputBNum.style.color = OriginalBColor;
    }
    if (Room != null) {
        InputRNum.value = Room;
        InputRNum.style.color = OriginalRColor;
    }

    $(InputBNum).click(function () {
        // 如果值未改变
        if (InputBNum.value == InitBText) {
            InputBNum.style.color = OriginalBColor;
            InputBNum.value = "";
        }
    });
    $(InputRNum).click(function () {
        // 如果值未改变
        if (InputRNum.value == InitRText) {
            InputRNum.style.color = OriginalRColor;
            InputRNum.value = "";
        }
    });

    $(InputBNum).blur(function () {
        // 如果值被清空
        if (InputBNum.value == "") {
            InputBNum.style.color = InitColor;
            InputBNum.value = InitBText;
        }
    });
    $(InputRNum).blur(function () {
        // 如果值被清空，则填充值
        if (InputRNum.value == "") {
            InputRNum.style.color = InitColor;
            InputRNum.value = InitRText;
        }
    });
});