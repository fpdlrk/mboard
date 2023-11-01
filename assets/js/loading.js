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