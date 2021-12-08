/************************** Swal func **************************/
const swalBasicOption = {
    heightAuto : false,  // true이면 body의 height가 auto가 되어서 페이지 구조가 변함
    allowOutsideClick : false,
    confirmButtonText : "확인",
}

function swalAlert(option) {
    Object.assign(option, swalBasicOption); // 인자로 전달받은 option과 기본 옵션을 합침

    Swal.fire(option)
}

function swalConfirm(option) {
    const confirmBasicOption = {
        showCancelButton: true,
        cancelButtonText: "취소",
    }

    Object.assign(option, confirmBasicOption, swalBasicOption);   // 인자로 전달받은 option, 기본 option, confirm alert의 기본 옵션을 합침

    Swal.fire(option)
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function disableSwalConfirmBtn(disable) {
    const confirmButton = $(".swal2-container .swal2-confirm"); // sweetAlert의 확인 버튼
    confirmButton.attr("disabled", disable);   // 버튼을 disable 또는 enable
}
/************************************************************************/

$(document).on("click", "i.del" , function() {
// 	to remove card
    $(this).parent().remove();
// to clear image
    // $(this).parent().find('.imagePreview').css("background-image","url('')");
});

$(".imagePreview").on("click", (event) => {
    $(event.target).closest(".imgUp").find("input[type = 'file']").click();
})

$(".uploadImage").on("change",function()
{
    var uploadFile = $(this);
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test( files[0].type)){ // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function(){ // set image data as background of div
            //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
            let imagePreViewElem = uploadFile.closest(".imgUp").find('.imagePreview')
            imagePreViewElem.find(".icon-plus").remove()
            imagePreViewElem.css("background-image", "url("+this.result+")");
        }
    }
});

function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

$(".icon_btn").on("click", (event) => {
    const target = event.target;
    $(target).closest(".icon_btn").children(".lnr-heart").toggleClass("change")
})
