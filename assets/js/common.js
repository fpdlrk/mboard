// 메인 페이지 사용 스크립트 -- start

$(function(){
  
  

});


// 빈공간 클릭시 팝업 닫기
$(document).on("click", function(e){
  var $target = e.target;
  var $obj = $($target).closest(".select_compile");
  var $closeChk = $obj.size();
  if($closeChk == 0){
    $(".select_compile > button").removeClass("open");
  }
});

// 메인 페이지 사용 스크립트 -- end


//TOP버튼
$(window).on("scroll", function(){
	if($(this).scrollTop() > 200){
		$(".move_top").addClass("show");
	}else{
	$(".move_top").removeClass("show");}
});

// 상단으로 이동
$(document).on("click", ".move_top", function(e){
  $("html, body").animate({scrollTop : "0"}, 150);
  e.preventDefault();
});



// 빈공간 클릭시 팝업 닫기
$(document).on("click", function(e){
  var $target = e.target;
  var $closeChk = $($target).closest(".dropdownItem").size();
  var $btnChk = $($target).closest(".dropdown_wrap").size();
  if($($target).closest(".dropdown_wrap").size() != 0){
    if($($target).closest(".dropdown_wrap").hasClass("on")){
      $(".dropdown_wrap").removeClass("on");
      $($target).closest(".dropdown_wrap").addClass("on");
    }else{
      $(".dropdown_wrap").removeClass("on");
    }
  }else{
    $(".dropdown_wrap").removeClass("on");
  }
});

//drop 레이어 팝업
$(document).on("click",".dropdown", function(){
  var $this =  $(this);
  var $dropObj = $this.parent();
  if($dropObj.hasClass("on")){
    $dropObj.removeClass("on");
  }else{
    $dropObj.addClass("on");
    $this.next().css("top",$this.outerHeight() + 5);
  }
});

function tooltip(obj){
  $(obj).next().css({top:$(obj).position().top + 20, display:"block"});
}

$(document).on("click",".tip_box .btn_close", function(){
  $(this).closest(".tip_box").css("display","none");
});

$(document).on("mouseover","button", function(){
  var $winW = $(window).outerWidth();
  var $tipViewChk = $(this).attr("data-tootip");
  var $tipTxt = $(this).attr("data-tooltip-txt");
  var $height = $(this).outerHeight();
  var $width = $(this).outerWidth();
  var $posY = $(this).offset().top;
  var $posX = $(this).offset().left;
  if($tipViewChk){
    $(this).after('<div class="tooltip_txt_box">' + $tipTxt + '</div>');
    $(".tooltip_txt_box").css({top:$height + $posY + 5, right:($winW - $posX) - $width});
  }
});

$(document).on("mouseout","button", function(){
  var $tipViewChk = $(this).attr("data-tootip");
  if($tipViewChk){
    $(this).next().remove();
  }
  
});

$(function(){

// 팝업
  $.each($(".popup_outer"),function(i,v){
    var $halfWidth = $(v).find(".popup").outerWidth()/2;
    var $halfHeight = $(v).find(".popup").outerHeight()/2;
    $(v).find(".popup").css({marginTop:-$halfHeight, marginLeft:-$halfWidth});
  });

  $(document).on("click", ".btn_popup", function(e){
    var $this = $(this);
    var $popName = $this.attr("data-pop-name");
    var $type = $this.attr("data-type");
    var $id = $this.closest(".popup_outer").attr("id");
    if($popName == undefined && $id != undefined){
      var $popName = $id;
    }
    var $chkDiv = $this.closest(".popup_outer").size();
    if($popName == "pwPop") {
      $("#idx").val($this.attr("data-idx"));
    }
    fn_popup($popName);
    e.preventDefault();
  });

  

  $(document).on("click", ".pop_close", function(e){
    var $name = $(this).closest(".popup_outer").attr("id");
    var $btnHide = $("#" + $name).find(".dataCencleBtn").size();
    $("#" + $name).removeClass("popOpen").attr("style","");
    $(".pop_msk").remove();
    $("body").removeClass("hd");
    if($btnHide != 0){
      setTimeout(function(){
        $(".dataCencleBtn").remove();
      },300);
    }
    e.preventDefault();
  });

});

function fn_popup(objId){
  var $target = $("#" + objId + " .popup");
  var $halfWidth = $target.outerWidth()/2;
  var $halfHeight = $target.outerHeight()/2;
  var $scContent = $target.find(".scroll_area");
  var $scContentPos = null;
  
  win_width = $(window).outerWidth();
  win_height = $(window).outerHeight();
  $(window).on("resize", function(){
	$halfWidth = $target.outerWidth()/2;
	  $halfHeight = $target.outerHeight()/2;
	  if($scContent.size() > 0){
		  $scContentPos = $target.find(".scroll_area").position().top;
		  if($scContent.next().hasClass("cart_wrap")){
			$scContent.css({height:win_height - ($scContentPos + $scContent.next().outerHeight())});
		  }else{
			$scContent.css({height:win_height - $scContentPos});
		  }
	  }
	  if($target.attr("data-mode") == "full"){
      $target.css({top:0, marginTop:0, height:"100%", marginLeft:-$halfWidth});
      return false;
	  }
	  if(win_height < $target.outerHeight()){
		  $target.css({top:0, marginTop:0, marginLeft:-$halfWidth});
	  }else{
		  $target.css({top:"50%", marginTop:-$halfHeight, marginLeft:-$halfWidth});
	  }
	  
  });
  
  $("body").addClass("hd");
    $target.parent().addClass("popOpen");
  $(window).trigger("resize");
}

function fn_pupClose(objId){
  $("#" + objId).removeClass("popOpen").attr("style","");
  $(".pop_msk").remove();
  $("body").removeClass("hd");
}

function fn_sidePopup(objId){
  var win_height = $(window).outerHeight();
  var $exclude = $("#" + objId + " .exclude");
  var $excludeHeight = 0;
  $exclude.each(function(i,v){
    $(v).outerHeight();
    return $excludeHeight += $(v).outerHeight();
  });
  $("body").addClass("overhidden");
  $("#" + objId).addClass("sideOpen").append('<span class="mask"></span>');
  $(window).on("resize", function(){
    win_height = $(window).outerHeight();
    $("#" + objId + " .popup_c").css("height",win_height - $excludeHeight);
  });
  $(window).trigger("resize");
  
}

function fn_closeSide(objId){
  $("#" + objId).removeClass("sideOpen");
  $("#" + objId + " .mask").remove();
}


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