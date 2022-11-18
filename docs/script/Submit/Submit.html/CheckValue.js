$(function () {
    var InputBNum = document.getElementById('BuildingNum');
    var InputRNum = document.getElementById('RoomNum');

    var BError = document.getElementById('BuildingError');
    var RError = document.getElementById('RoomError');

    CheckB();
    CheckR();

    function CheckB() {
        BAvailable = false;
        var InputBNum = document.getElementById('BuildingNum');
        var OriginalString = InputBNum.value;
        if (OriginalString == InitBText || OriginalString == "") {
            BError.style.display = 'block';
            BError.innerHTML = '内容不可为空';
        }
        else if (OriginalString.indexOf(' ') >= 0) {
            BError.style.display = 'block';
            BError.innerHTML = '内容不可包含空格';
        }
        else if (OriginalString.length != BLength) {
            BError.style.display = 'block';
            BError.innerHTML = '请输入长度为2的楼号';
        }
        else {
            for (var i = 0; i < BLength; i++) {
                if (OriginalString.charCodeAt(i) > '9'.charCodeAt(0) || OriginalString.charCodeAt(i) < '0'.charCodeAt(0)) {
                    BError.style.display = 'block';
                    BError.innerHTML = '内容不可包含0~9以外的字符';
                    return;
                }
            }
            BError.style.display = 'none';
            BError.innerHTML = '';
            BAvailable = true;
        }
    }

    function CheckR() {
        RAvailable = false;
        var InputRNum = document.getElementById('RoomNum');
        var OriginalString = InputRNum.value;
        if (OriginalString == InitRText || OriginalString == "") {
            RError.style.display = 'block';
            RError.innerHTML = '内容不可为空';
        }
        else if (OriginalString.indexOf(' ') >= 0) {
            RError.style.display = 'block';
            RError.innerHTML = '内容不可包含空格';
        }
        else if (OriginalString.length != RLength) {
            RError.style.display = 'block';
            RError.innerHTML = '请输入长度为4的室号';
        }
        else {
            for (var i = 0; i < RLength; i++) {
                if (OriginalString.charCodeAt(i) > '9'.charCodeAt(0) || OriginalString.charCodeAt(i) < '0'.charCodeAt(0)) {
                    RError.style.display = 'block';
                    RError.innerHTML = '内容不可包含0~9以外的字符';
                    return;
                }
            }
            RError.style.display = 'none';
            RError.innerHTML = '';
            RAvailable = true;
        }
    }

    $(InputBNum).blur(function () {
        CheckB();
    });
    $(InputRNum).blur(function () {
        CheckR();
    });
});