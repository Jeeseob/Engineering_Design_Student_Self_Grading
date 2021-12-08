// var content = document.getElementsByClassName("container");
// var btn = document.getElementById("test");
// btn.addEventListener("click", function() {
//     content.style.width = "600px";
// })


// ******************************
//
//      팝업창 확대 축소
//
// ******************************
imgTag = document.getElementById("test");
document.getElementById("myBtn").addEventListener("click", function() {
    if (document.getElementById("pop-up-box").style.width == "600px") {
        document.getElementById("pop-up-box").style.width = "400px";

        //document.getElementById("pre_overlay").style.width = "340px";
        //document.getElementsByClassName("btn-wrapper").style.width = "0px";
        //document.getElementById("t_btn_control").style.marginLeft = "0px";
        //document.getElementById("pre_overlay_img").style.marginLeft = "0px";

        imgTag.setAttribute("src", "img/arrow-left.png");
    }
    else {
        document.getElementById("pop-up-box").style.width="600px";
        imgTag.setAttribute("src", "img/arrow-right.png");

        //document.getElementById("pre_overlay").style.width = "540px";
        //document.getElementsByClassName("btn-wrapper").style.width = "100%";
        //document.getElementById("t_btn_control").style.marginLeft = "0px";
        //document.getElementById("pre_overlay_img").style.marginLeft = "150px";

    }
    
});





// ******************************
//
//          팝업창 사라짐
//
// ******************************
function showPopup(hasFilter) {
	const popup = document.querySelector('#pop-up');
    popup.classList.remove('hide');
}

function closePopup() {
	const popup = document.querySelector('#pop-up');
    popup.classList.add('hide');
    document.getElementById("pop-up-box").style.width="400px";
}







// ******************************
//
//      카카오맵
//
// ******************************
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 5 // 지도의 확대 레벨
            };
        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            if (marker.getVisible() === true) {
                // 마커 위치를 클릭한 위치로 옮깁니다
                marker.setPosition(latlng);
            }

            //var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            //message += '경도는 ' + latlng.getLng() + ' 입니다';

            //var resultDiv = document.getElementById('clickLatlng');
            //resultDiv.innerHTML = message;
        });

        // 지도에 추가된 지도타입정보를 가지고 있을 변수입니다
        var currentTypeId;
        var overlay = null;

        // 버튼이 클릭되면 호출되는 함수입니다
        function setOverlayMapTypeId(maptype) {
            var changeMaptype;
            var po_img = document.getElementById('popu_img');;
            var st_img = document.getElementById('store_img');;
            var be_img = document.getElementById('beer_img');;
            var ct_po = document.getElementById('po_bt');
            var ct_st = document.getElementById('st_bt');
            var ct_be = document.getElementById('be_bt');

            // LatLng, LatLngBounds 를 사용하는 코드로 변경해야 함.
            var sw = new kakao.maps.LatLng(37.5818233903062, 127.03188085736217);
            ne = new kakao.maps.LatLng(37.5502091198391, 126.94758177091235);

            var bounds = new kakao.maps.LatLngBounds(sw, ne);

            if (overlay !== null) {
                overlay.setMap(null);
            }

            // maptype에 따라 지도에 추가할 지도타입을 결정합니다
            if (maptype === 'traffic') {

                // 교통정보 지도타입
                changeMaptype = kakao.maps.MapTypeId.TRAFFIC;
                // 이미 등록된 지도 타입이 있으면 제거합니다
                if (currentTypeId) {
                    map.removeOverlayMapTypeId(currentTypeId);
                }

                // maptype에 해당하는 지도타입을 지도에 추가합니다
                map.addOverlayMapTypeId(changeMaptype);

                // 지도에 추가된 타입정보를 갱신합니다
                currentTypeId = changeMaptype;

            } else if (maptype === 'roadview') {

                // 로드뷰 도로정보 지도타입
                changeMaptype = kakao.maps.MapTypeId.ROADVIEW;
                // 이미 등록된 지도 타입이 있으면 제거합니다
                if (currentTypeId) {
                    map.removeOverlayMapTypeId(currentTypeId);
                }

                // maptype에 해당하는 지도타입을 지도에 추가합니다
                map.addOverlayMapTypeId(changeMaptype);

                // 지도에 추가된 타입정보를 갱신합니다
                currentTypeId = changeMaptype;

            } else if (maptype === 'terrain') {

                // 지형정보 지도타입
                changeMaptype = kakao.maps.MapTypeId.TERRAIN;
                // 이미 등록된 지도 타입이 있으면 제거합니다
                if (currentTypeId) {
                    map.removeOverlayMapTypeId(currentTypeId);
                }

                // maptype에 해당하는 지도타입을 지도에 추가합니다
                map.addOverlayMapTypeId(changeMaptype);

                // 지도에 추가된 타입정보를 갱신합니다
                currentTypeId = changeMaptype;

            } else if (maptype === 'use_district') {

                // 지적편집도 지도타입
                changeMaptype = kakao.maps.MapTypeId.USE_DISTRICT;

                if (ct_po.className.indexOf('active') === -1) {
                    ct_po.className = 'active';
                    ct_st.className = '';
                    ct_be.className = '';

                    if (currentTypeId) {
                        map.removeOverlayMapTypeId(currentTypeId);
                    }

                    // maptype에 해당하는 지도타입을 지도에 추가합니다
                    map.addOverlayMapTypeId(changeMaptype);
                    st_img.setAttribute("src", "img/store_g.png");
                    be_img.setAttribute("src", "img/beer_g.png");
                    po_img.setAttribute("src", "img/population.png");

                    // 지도에 추가된 타입정보를 갱신합니다
                    currentTypeId = changeMaptype;


                } else {
                    ct_po.className = '';
                    po_img.setAttribute("src", "img/popu_g.png")

                    map.removeOverlayMapTypeId(currentTypeId);
                }
            }
            else if (maptype === 'red_heatmap') {

                if (ct_st.className.indexOf('active') === -1) {
                    ct_st.className = 'active';
                    ct_po.className = '';
                    ct_be.className = '';

                    // 이미 등록된 지도 타입이 있으면 제거합니다
                    if (currentTypeId) {
                        map.removeOverlayMapTypeId(currentTypeId);
                    }
                    po_img.setAttribute("src", "img/popu_g.png");
                    be_img.setAttribute("src", "img/beer_g.png");
                    st_img.setAttribute("src", "img/store.png");

                    overlay = new GroundOverlay(bounds, 'red_heat_map.png');
                    overlay.setMap(map);


                } else {
                    ct_st.className = '';
                    st_img.setAttribute("src", "img/store_g.png")

                    overlay.setMap(null);
                }
            }
            else if (maptype === 'green_heatmap') {

                if (ct_be.className.indexOf('active') === -1) {
                    ct_be.className = 'active';
                    ct_po.className = '';
                    ct_st.className = '';

                    // 이미 등록된 지도 타입이 있으면 제거합니다
                    if (currentTypeId) {
                        map.removeOverlayMapTypeId(currentTypeId);
                    }
                    po_img.setAttribute("src", "img/popu_g.png");
                    st_img.setAttribute("src", "img/store_g.png");
                    be_img.setAttribute("src", "img/public.png");

                    overlay = new GroundOverlay(bounds, 'green_heat_map.png');
                    overlay.setMap(map);


                } else {
                    ct_be.className = '';
                    be_img.setAttribute("src", "img/beer_g.png")

                    overlay.setMap(null);
                }

                

            }
        }


// ******************************
//
//      마커 오버레이
//
// ******************************

        var contents = [];

        contents.push(content1);
        contents.push(content2);
        contents.push(content3);
        contents.push(content4);
        contents.push(content5);

        var content1 = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            CGV 명동역 씨네라이브러리' +
            '            <div class="close" onclick="close_m_Overlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="place/cgv.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 중구 퇴계로 123 하이해리엇 <br>10,11층</div>' +
            '                <div class="jibun ellipsis">현재 밀집도 <span style= "color:red">혼잡</span></div>' +
            '                <img src="icon/nevi.png" class= "nevi" width="17" height="17">' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        var content2 = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            적당' +
            '            <div class="close" onclick="close_m_Overlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="place/jd.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 중구 을지로 29 1층</div>' +
            '                <div class="jibun ellipsis">(카페)현재 밀집도 <span style= "color:red">혼잡</span><br>&nbsp;</div>' +
            '                <img src="icon/nevi.png" class= "nevi" width="17" height="17">' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        var content3 = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            광화문미진 본점' +
            '            <div class="close" onclick="close_m_Overlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="place/mijin.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 종로구 종로 19 르메이에르 <br> 종로타운 1층</div>' +
            '                <div class="jibun ellipsis">현재 밀집도 <span style= "color:red">혼잡</span></div>' +
                             '<img src="icon/nevi.png" class= "nevi" width="17" height="17">' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        var content4 = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            광장시장' +
            '            <div class="close" onclick="close_m_Overlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="place/maket.jpg" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 종로구 창경궁로 88</div>' +
            '                <div class="jibun ellipsis">현재 밀집도 <span style= "color:red">혼잡</span><br>&nbsp;</div>' +
            '                <img src="icon/nevi.png" class= "nevi" width="17" height="17">' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        var content5 = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            명동교자 본점' +
            '           <div class="close" onclick="close_m_Overlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="place/gyoza.jpg" width="73" height="70">' +
            '           </div > ' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 중구 명동10길 29</div>' +
            '                <div class="jibun ellipsis">현재 밀집도 <span style= "color:red">혼잡</span><br>&nbsp;</div>' +
            '                <img src="icon/nevi.png" class= "nevi" width="17" height="17">' +
            '            </div > ' +
            '        </div>' +
            '    </div>' +
            '</div>';

        function addMarker(position) {

            // 마커를 생성합니다
            var Fmarker = new kakao.maps.Marker({
                position: position
            });
            //Fmarker.setMap(map);
            // 생성된 마커를 배열에 추가합니다
            markers.push(Fmarker);
        }

        var markers = [];
        var m_overlay = null;

        addMarker(new kakao.maps.LatLng(37.56128410533488, 126.98542213433991)); //CGV 명동역 씨네라이브러리
        addMarker(new kakao.maps.LatLng(37.56649124008184, 126.98102934517273));//적당
        addMarker(new kakao.maps.LatLng(37.570833851412715, 126.97989627741974));//광화문 미진 본점
        addMarker(new kakao.maps.LatLng(37.57006070312802, 126.99902651898681));//광장시장
        addMarker(new kakao.maps.LatLng(37.56250948573088, 126.98562562685144));//명동교자 본점

        function setFiveMarker(img) {
            var image = document.getElementById("best_img");

            var control = document.getElementById('marker_conrtol');

            if (control.className.indexOf('active') === -1) {
                control.className = 'active';
                image.setAttribute("src", "img/densely-populated.png")
              
                marker.setVisible(false);
                setMarkers(map);

            } else {
                control.className = '';
                image.setAttribute("src", "img/top_g.png")

                setMarkers(null);
                marker.setVisible(true);
                m_overlay.setMap(null);
                init_pre_main();
            }
        }

        // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
        function setMarkers(map) {
            //for (var i = 0; i < markers.length; i++) {
            //    markers[i].setMap(map);
            //}

            var change_pre = document.getElementById("location");
            var change_placename = document.getElementById("location");
            var change_pre_img = document.getElementById("pre_img");
            var t_btn = document.getElementById("t_btn_control");
            var d_btn = document.getElementById("d_btn_control");;
            var w_btn = document.getElementById("w_btn_control");;

            markers.forEach(function (ele, index) {
                markers[index].setMap(map);

                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(markers[index], 'click', function () {

                    if (m_overlay !== null) {
                        m_overlay.setMap(null);
                    }

                    // 마커 위에 커스텀오버레이를 표시합니다
                    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
                    //m_overlay[index].setMap(map);
                    switch (index) {
                        case 0:
                            m_overlay = new kakao.maps.CustomOverlay({
                                content: content1,
                                map: map,
                                position: markers[index].getPosition()
                            });
                            m_overlay.setMap(map);
                            change_pre.innerText = "CGV 명동역 씨네라이브러리";
                            change_placename.innerText = "CGV 명동역 씨네라이브러리";
                            control_img(0); 
                            break;
                        case 1:
                            m_overlay = new kakao.maps.CustomOverlay({
                                content: content2,
                                map: map,
                                position: markers[index].getPosition()
                            });
                            m_overlay.setMap(map);
                            change_pre.innerText = "적당";
                            change_placename.innerText = "적당";
                            control_img(0);
                            break;
                        case 2:
                            m_overlay = new kakao.maps.CustomOverlay({
                                content: content3,
                                map: map,
                                position: markers[index].getPosition()
                            });
                            m_overlay.setMap(map);
                            change_pre.innerText = "광화문 미진 본점";
                            change_placename.innerText = "광화문 미진 본점";
                            control_img(0);
                            break;
                        case 3:
                            m_overlay = new kakao.maps.CustomOverlay({
                                content: content4,
                                map: map,
                                position: markers[index].getPosition()
                            });
                            m_overlay.setMap(map);
                            change_pre.innerText = "광장시장";
                            change_placename.innerText = "광장시장";
                            control_img(0);
                            break;
                        case 4:
                            m_overlay = new kakao.maps.CustomOverlay({
                                content: content5,
                                map: map,
                                position: markers[index].getPosition()
                            });
                            m_overlay.setMap(map);
                            change_pre.innerText = "명동교자 본점";
                            change_placename.innerText = "명동교자 본점";
                            control_img(0);
                            break;
                    }
                });
            });
        }

        function close_m_Overlay() {
            m_overlay.setMap(null);
            init_pre_main();
        }

        function GroundOverlay(bounds, imgSrc) {
            this.bounds = bounds;
            var node = this.node = document.createElement('div');
            node.className = 'node';

            var img = this.img = document.createElement('img');
            img.style.position = 'absolute';
            img.src = imgSrc;

            node.appendChild(img);
        }

        GroundOverlay.prototype = new kakao.maps.AbstractOverlay;

        GroundOverlay.prototype.onAdd = function () {
            var panel = this.getPanels().overlayLayer;
            panel.appendChild(this.node);
        };

        // 줌인 아웃 시 이미지를 원하는 bounds값에 맞게 표출하기 위해 img style을 정의 및 선언합니다.
        GroundOverlay.prototype.draw = function () {
            var projection = this.getProjection();
            var ne = projection.pointFromCoords(this.bounds.getNorthEast());
            var sw = projection.pointFromCoords(this.bounds.getSouthWest());

            var width = ne.x - sw.x;
            var height = sw.y - ne.y;

            this.img.style.top = ne.y + 'px';
            this.img.style.left = sw.x + 'px';
            this.img.style.width = width + 'px';
            this.img.style.height = height + 'px';
        }

        GroundOverlay.prototype.onRemove = function () {
            this.node.parentNode.removeChild(this.node);
        };

    

    

// ******************************
//
//      날씨 부분 클릭시 이미지 변경
//
// ******************************

        function init_pre_main() {
            //var change_pre = document.getElementById("pre_place");
            //var change_placename = document.getElementById("location");
            var pl = document.getElementById("location");
            pl.innerText = "서울 특별시 중구";
            //change_pre.innerText = "서울 특별시 중구";
            //change_placename.innerText = "서울 특별시 중구";
            control_img(0);
        }

        function change_img(text, index) {

            var imgTag = document.getElementById("pre_img");

            switch (text) {
                case "서울 특별시 중구":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_yell_red_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_gre_red_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/main_week_T.png");
                    }
                    break;
                case "CGV 명동역 씨네라이브러리":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_gre_red_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_gre_yell_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/sp1_week_T.png");
                    }
                    break;
                case "적당":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_red_yell_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_yell_red_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/sp2_week_T.png");
                    }
                    break;
                case "광화문 미진 본점":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_gre_red_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_yell_yell_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/sp3_week_T.png");
                    }
                    break;
                case "광장시장":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_yell_gre_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_gre_red_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/sp4_week_T.png");
                    }
                    break;
                case "명동교자 본점":
                    if (index == 0) {
                        imgTag.setAttribute("src", "pre_img/tom_yell_gre_T.png");
                    }
                    else if (index == 1) {
                        imgTag.setAttribute("src", "pre_img/dafter_gre_red_T.png");
                    }
                    else {
                        imgTag.setAttribute("src", "pre_img/sp5_week_T.png");
                    }
                    break;

            }
        }



// ******************************
//
//      날씨탭
//
// ******************************

        function control_img(index) {

            var t_btn = document.getElementById("t_btn_control");
            var d_btn = document.getElementById("d_btn_control");
            var w_btn = document.getElementById("w_btn_control");

            var change_pre = document.getElementById("location");

            switch (index) {
                case 0:
                    t_btn.className = 'active';
                    d_btn.className = '';
                    w_btn.className = '';
                    change_img(change_pre.innerText, index);
                    break;
                case 1:
                    d_btn.className = 'active';
                    t_btn.className = '';
                    w_btn.className = '';
                    change_img(change_pre.innerText, index);
                    break;
                case 2:
                    w_btn.className = 'active';
                    d_btn.className = '';
                    t_btn.className = '';
                    change_img(change_pre.innerText, index);
                    break;
            }
            
        }


// ******************************
//
//      튜토리얼 레이어팝업
//
// ******************************

function dEI(elementID) {
    return document.getElementById(elementID);
}

//레이어 팝업 열기
function openLayer(btn, img, IdName, popupWidth, popupHeight) {
    var pop = dEI(IdName);
    var image = dEI(img);
    image.setAttribute("src", "img/share.png");

    var popupX = (window.screen.width / 2) - (popupWidth / 2);
    // 만들 팝업창 width 크기의 1/2 만큼 보정값으로 빼주었음
    var popupY = (window.screen.height / 3) - (popupHeight / 3);
    pop.style.top = popupY + "px";
    pop.style.left = popupX + "px";
    pop.style.display = "block";

    var wrap = dEI("share_wrap");
    var reservation = document.createElement("div");
    reservation.setAttribute("id", "deemed");
    wrap.appendChild(reservation);

    var button = dEI(btn);
    button.style.pointerEvents = "none";
}

//레이어 팝업 닫기
function closeLayer(btn, img, IdName) {
    var pop = dEI(IdName);
    var image = dEI(img);
    image.setAttribute("src", "img/share_g.png");

    pop.style.display = "none";
    var clearEl = parent.dEI("deemed");
    var momEl = parent.dEI("share_wrap");
    momEl.removeChild(clearEl);

    var button = dEI(btn);
    button.style.pointerEvents = "auto";
}

//튜토 레이어 팝업 닫기
function tu_close1(IdName, p1, p2, pp, next) {
    var pop = dEI(IdName);
    pop.style.display = "none";
    var clearEl = parent.dEI(p1);
    var momEl = parent.dEI(p2);
    momEl.removeChild(clearEl);
    var clearEl = parent.dEI(p2);
    var momEl = parent.dEI(pp);
    momEl.removeChild(clearEl);
    var pop = dEI(next);
    pop.style.visibility = "visible";
}

function tu_close(IdName, p1, p2, pp) {
    var pop = dEI(IdName);
    pop.style.display = "none";
    var clearEl = parent.dEI(p1);
    var momEl = parent.dEI(p2);
    momEl.removeChild(clearEl);
    var clearEl = parent.dEI(p2);
    var momEl = parent.dEI(pp);
    momEl.removeChild(clearEl);
}

function tu_next(casee, ment, img, close, next, before) {
    var state = dEI(casee);
    var change = dEI(ment);
    var eximg = dEI(img);
/*    var title_vh = dEI(title);*/
    var pop = dEI(ment);
    var close_btn = dEI(close);
    var next_btn = dEI(next);
    var before_btn = dEI(before);

    switch (state.className) {

        case 'tu_div_search':
            state.className = "tu_div_tab"
/*            title_vh.innerText = "탭 설명"*/
            change.innerHTML = "총 5개의 탭이 있습니다.<br><br>현재 인구 밀집도가 가장 높은장소를 알려줍니다.<br><br>현재 위치를 기준으로 인구밀집도 현황을 보여줍니다.<br><br>다중이용시설 내의 인구 밀집도를 보여줍니다.<br><br>유흥업소 내의 인구 밀집도를 보여줍니다.<br><br>현재 위치를 공유 할 수 있습니다."
            pop.style.top = 20 + "px";
            pop.style.left = 160 + "px";
            pop.style.display = "block";
            before_btn.style.visibility = "visible";
            break;
        case 'tu_div_tab':
            state.className = "tu_div_tab_1";
            change.innerHTML = "밀도 베스트 탭을 눌렀을 때, 표시되는 마커들을 누르면<br>그 장소에 관한 간략한 정보와<br>그 장소의 미래의 혼잡도를 예측한 데이터를 볼 수 있습니다.";
            eximg.style.visibility = "visible";
            eximg.style.top = "3vh";
            eximg.style.width = "1000px"
            eximg.style.left ="73%"
            pop.style.top = 100 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_tab_1':
            state.className = "tu_div_tab_2";
            change.innerHTML = "이 3개의 탭은 각각의 인구밀집도를 나타내는 서로다른 지도를 보여줍니다.<br><br>인구밀집도 탭의 지도는 빨간색은 높은 인구밀집도를, 초록색은 낮은 인구밀집도를 의미합니다.<br><br>다중이용시설과 유흥업소 탭은 지도의 색이 진한색일 수록, 높은 인구 밀집도를 의미합니다.";
            eximg.style.visibility = "hidden";
            pop.style.top = 150 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_tab_2':
            state.className = "tu_div_tab_3";
            change.innerHTML = "공유하기를 누르면 마커로 선택된 장소의 위치와<br>현재 혼잡도의 정보를 공유할 수 있습니다.";
            pop.style.top = 640 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_tab_3':
            state.className = "tu_div_r_popup1";
            /*title_vh.innerText = "우측 팝업 설명";*/
            change.innerHTML = "우측 팝업은 접거나,<br>더욱 자세한 도표를 보기 위해 <br>늘릴 수 있습니다.";
            change.style.textAlign = "right";
            pop.style.top = 20 + "px";
            pop.style.left = 1150 + "px";
            /*pop.style.left = "60%";*/
            pop.style.display = "block";
            break;
        case 'tu_div_r_popup1':
            state.className = "tu_div_r_popup2";
            change.innerHTML = "아래에는 현재 지도에 표시되는 지역의<br>인구 밀집도를 나타내는 도표를 보여줍니다.";
            pop.style.top = 600 + "px";
            pop.style.left = 1000 + "px";
            /*pop.style.left = "53%";*/
            pop.style.display = "block";
            break;
        case 'tu_div_r_popup2':
            /*title_vh.innerText = "우측 팝업 - 혼잡도 예측";*/
            state.className = "tu_div_r_popup3";
            change.innerHTML = "이곳은 미래의 혼잡도를 예측 하여 보여주는 공간입니다.<br>내일, 모레, 주간 버튼을 눌러<br>현재 보고 있는 위치의 미래의 혼잡도를 알 수 있습니다.<br><br>인구 밀집도가 가장 많은 장소 5곳의 탭에서는<br>마커를 클릭하면 그 장소의 미래 혼잡도를 알려줍니다.";
            pop.style.top = 50 + "px";
            pop.style.left = 850 + "px";
            pop.style.display = "block";
            close_btn.style.visibility = "visible";
            next_btn.style.visibility = "hidden";
            break;
    }
}

function tu_before(casee, ment, img, close, next, before) {
    var state = dEI(casee);
    var change = dEI(ment);
    var eximg = dEI(img);
    /*var title_vh = dEI(title);*/
    var pop = dEI(ment);
    var close_btn = dEI(close);
    var next_btn = dEI(next);
    var before_btn = dEI(before);

    switch (state.className) {

        case 'tu_div_tab':
            state.className = "tu_div_search";
            /*title_vh.innerText = "검색 설명";*/
            change.innerHTML = "검색창에서 원하는 지역을 검색 할 수 있습니다.";
            pop.style.top = 12 + "px";
            pop.style.left = 300 + "px";
            // pop.style.display = "block";
            before_btn.style.visibility = "hidden";
            break;
        case 'tu_div_tab_1':
            state.className = "tu_div_tab"
            /*            title_vh.innerText = "탭 설명"*/
            change.innerHTML = "총 5개의 탭이 있습니다.<br><br>현재 인구 밀집도가 가장 높은장소를 알려줍니다.<br><br>현재 위치를 기준으로 인구밀집도 현황을 보여줍니다.<br><br>다중이용시설 내의 인구 밀집도를 보여줍니다.<br><br>유흥업소 내의 인구 밀집도를 보여줍니다.<br><br>현재 위치를 공유 할 수 있습니다."
            pop.style.top = 20 + "px";
            pop.style.left = 160 + "px";
            pop.style.display = "block";
            eximg.style.visibility = "hidden";
            before_btn.style.visibility = "visible";
            break;
        case 'tu_div_tab_2':
            state.className = "tu_div_tab_1";
            change.innerHTML = "밀도 베스트 탭을 눌렀을 때, 표시되는 마커들을 누르면<br>그 장소에 관한 간략한 정보와<br>그 장소의 미래의 혼잡도를 예측한 데이터를 볼 수 있습니다.";
            eximg.style.visibility = "visible";
            eximg.style.top = "3vh";
            eximg.style.width = "1000px"
            eximg.style.left = "73%"
            pop.style.top = 100 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_tab_3':
            state.className = "tu_div_tab_2";
            change.innerHTML = "이 3개의 탭은 각각의 인구밀집도를 나타내는 서로다른 지도를 보여줍니다.<br><br>인구밀집도 탭의 지도는 빨간색은 높은 인구밀집도를, 초록색은 낮은 인구밀집도를 의미합니다.<br><br>다중이용시설과 유흥업소 탭은 지도의 색이 진한색일 수록, 높은 인구 밀집도를 의미합니다.";
            pop.style.top = 150 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_r_popup1':
            state.className = "tu_div_tab_3";
            change.innerHTML = "공유하기를 누르면 마커로 선택된 장소의 위치와<br>현재 혼잡도의 정보를 공유할 수 있습니다.";
            eximg.style.visibility = "hidden";
            change.style.textAlign = "left";
            pop.style.top = 640 + "px";
            pop.style.left = 160 + "px"
            pop.style.display = "block";
            break;
        case 'tu_div_r_popup2':
            state.className = "tu_div_r_popup1";
            /*title_vh.innerText = "우측 팝업 설명";*/
            change.innerHTML = "우측 팝업은 접거나,<br>더욱 자세한 도표를 보기 위해 <br>늘릴 수 있습니다.";
            change.style.textAlign = "right";
            pop.style.top = 20 + "px";
            pop.style.left = 1150 + "px";
            /*pop.style.left = "60%";*/
            pop.style.display = "block";
            break;
        case 'tu_div_r_popup3':
            state.className = "tu_div_r_popup2";
            change.innerHTML = "아래에는 현재 지도에 표시되는 지역의<br>인구 밀집도를 나타내는 도표를 보여줍니다.";
            pop.style.top = 600 + "px";
            pop.style.left = 1000 + "px";
            /*pop.style.left = "53%";*/
            pop.style.display = "block";
            close_btn.style.visibility = "hidden";
            next_btn.style.visibility = "visible";
            break;


    }

}
