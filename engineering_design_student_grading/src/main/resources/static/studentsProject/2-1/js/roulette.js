$(document).ready(function() {
    var target;
    var text = [
        "현재 예매율 1위인 영화나 뮤지컬 보러 가기",
        "제일 좋아하는 옷 입고 내 모습 남기러 사진 찍으러 가기",
        "집에서 제일 가까운 서점의 베스트셀러 3위인 책 읽으러 가기",
        "한 시간 동안 명상하면서 앞으로의 삶에 대해 생각하기",
        "핸드폰 내려놓고 세 시간 동안 전공 공부하기",
        "현재 하고 있는 운동하러 가기 (없다면 공원 산책하러 가기)"
    ];
    iniGame = function(num){
        target = num;
        TweenLite.killTweensOf($(".board_on"));
        TweenLite.to($(".board_on"), 0, {css:{rotation:rotationPos[target]}});
        TweenLite.from($(".board_on"),5, {css:{rotation:-3000}, onComplete:endGame, ease:Sine.easeOut});
    }
    var rotationPos = new Array(60,120,180,240,300,360);
    TweenLite.to($(".board_on"), 360, {css:{rotation:-4000}, ease: Linear.easeNone});
    function endGame(){
        var returnText = text[target];
        $("#popup_gift .lottery_present").text(function( ) {
            return returnText+ " 입니다!";
        });
        $( '<div>'+"오늘의 할 일은..."+'</div>' ).prependTo("#popup_gift .lottery_present");
        setTimeout(function() {openPopup("popup_gift"); }, 1000);
    }
    $(".popup .btn").on("click",function(){
        location.reload();
    });

    function openPopup(id) {
        closePopup();
        $('.popup').slideUp(0);
        var popupid = id
        $('body').append('<div id="fade"></div>');
        $('#fade').css({
            'filter' : 'alpha(opacity=60)'
        }).fadeIn(300);
        var popupleftmargin = ($('#' + popupid).width()) / 2;
        $('#' + popupid).css({
            'margin-left' : -popupleftmargin
        });
        $('#' + popupid).slideDown(500);
    }
    function closePopup() {
        $('#fade').fadeOut(300, function() {
        });
        $('.popup').slideUp(400);
            return false
    }
    $(".close").click(closePopup);
});

$(function() {
    for(i=0; i<6; i++){
        var text = [
            "현재 예매율<br/>1위인 영화나 뮤지컬<br/>보러 가기",
            "제일 좋아하는<br/>옷 입고 내 모습 남기러 사진<br/>찍으러 가기",
            "집에서 제일<br/>가까운 서점의 베스트셀러 3위인 책 읽으러<br/>가기",
            "한 시간 동안<br/>명상하면서<br/>앞으로의 삶에 대해 생각하기",
            "핸드폰<br/>내려놓고 세 시간 동안 전공 공부하기",
            "현재 하고 있는 운동하러 가기<br/>(없다면 공원 산책하러 가기)"
        ];
        $(".board_on").append('<p>' + text[i] + '</p>');
    }
    $(".join").on("mousedown",function(){
        iniGame(Math.floor(Math.random()*6));
    });
})