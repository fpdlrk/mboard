/**
 * jsAppendList 배열에 페이지 전체 공통스트립트명을 넣는다.
 */

const appendBody = document.querySelector('#appendScript');
const jsAppendList = [
    'commjs'        // 공통
    , 'modal'       // 모달
    , 'popup'       // 팝업
    , 'loading'     // 로딩
    , 'dropDown'    // 드롭다운
];
const path = '../assets/js/';

for(let i=0; i < jsAppendList.length; i++){
    let tmp = document.createElement('script');
    tmp.setAttribute('src',`${path}${jsAppendList[i]}.js`);
    bd.append(tmp);
}

