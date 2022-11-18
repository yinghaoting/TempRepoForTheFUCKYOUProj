$(function () {
    var SubmitButton = document.getElementById('Submit');
    var InputBNum = document.getElementById('BuildingNum');
    var InputRNum = document.getElementById('RoomNum');

    $(SubmitButton).click(function () {
        if (BAvailable && RAvailable) {
            var url = JumpUrl + '?Building=' + InputBNum.value + '&Room=' + InputRNum.value;
            window.location.href = url;
        }
    });
});