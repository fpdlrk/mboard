
const commjs = {
	// workspace의 라벨로 쓰기위해 앞 첫글자를 가져온다.
	nameFirstAt : function(firstAt){
		let findFirstStr = firstAt.charAt(0);
		return findFirstStr;
	}
}

$('.labelFirstName').each(function(i,v){
	let str = $(v).text();
	$(v).prev().text(commjs.nameFirstAt(str));
	// $('.FirstName_label').text(commjs.nameFirstAt(str));
});

// content && lnb scroll
let screenInit = function(){
	let winH = $(window).outerHeight();
	let contentH = winH - $('.header_area').outerHeight();
	let lnbMinusEleSum = $('.comname').outerHeight() + $('.btn_create_wrap').outerHeight() + $('.lnb_btm').outerHeight();
	let lnbH = winH- lnbMinusEleSum;
	$('.content_area').css({height:contentH});
	$('.lnb_outer').css({height:lnbH});
};
window.onresize = function(){
	screenInit();
	console.log('onresize');
}
window.dispatchEvent(new Event('resize'));


const lnbWrap = document.querySelector('.lnb');
const lnbItem = lnbWrap.querySelectorAll('.item');
/**
 * LNB 하위 메뉴 감추기
 * items : 감추고자 하는 element
 * idx : 감추고자 하는 item index
 */
const fnLnbItemShowHide = function(items, idx){
	switch(typeof items){
		case 'object':
			items.forEach((element, index) => {
				if(index != idx){
					element.classList.add('hide');
				}
			});
		break;
		case 'String':
			console.log('String');
		break;
	}
}

const toggleItem = document.querySelectorAll('.item .toggle');
// 1뎁스 열림/닫힘 클릭이벤트
const fnLnbItemClickToggle = function(){
	let parent = this.parentElement;
	//let item = this.previousElementSibling;
	let hasClass = parent.classList.contains('hide');
	if(hasClass){
		parent.classList.remove('hide');
	}else{
		parent.classList.add('hide');
	}
}

const toggleEvtLoop = function(items){
	items.forEach((item, index)=>{
		item.onclick = fnLnbItemClickToggle;
	});
}

toggleEvtLoop(toggleItem);
fnLnbItemShowHide(lnbItem, 0);

//로딩 스크립트
var loadingHtml = '';
loadingHtml += '<div class="l-wrapper loading_wrap">';
loadingHtml += '<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
loadingHtml += '<symbol id="s--circle">';
loadingHtml += '<circle r="10" cx="20" cy="20"></circle>';
loadingHtml += '</symbol>';
loadingHtml += '<g class="g-circles g-circles--v1">';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '<g class="g--circle">';
loadingHtml += '<use xlink:href="#s--circle" class="u--circle"/>';
loadingHtml += '</g>';
loadingHtml += '</g>';
loadingHtml += '</svg>';
loadingHtml += '</div>';

function fn_loading() {
  $("body").append(loadingHtml);
}

function fn_loadingEnd() {
  $(".loading_wrap").remove();
}