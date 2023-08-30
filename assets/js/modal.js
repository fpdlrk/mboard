const ModalOpen = function (popId, title, msg, type, okFnc, cancleFnc, { ...rest }) {

	class Modal {
		constructor(popId, title, msg, type, okCallBack, cancleCallBack, { ...rest }) {
			this.popId = popId;
			this.title = title;
			this.msg = msg;
			this.type = type;
			this.okCallBack = okCallBack == '' ? this.ok : okCallBack;
			this.cancleCallBack = cancleCallBack == '' ? this.cancle : cancleCallBack;
			//this.opt = rest;
		}

		open() {
			let html = '';
			html += '<div id="' + this.popId + '" class="commPopup">';
			if(this.title != null && this.title != ''){
				html += '<div class="pop_header">';
				html += '<h2>' + this.title + '</h2>';
				html += '</div>';
			}
			html += '<div class="pop_body">';
			html += this.msg;
			html += '</div>';
			html += '<div class="popup_footer">';
			html += '<div class="btn_g">';

			if (this.type == 'alert') {
				html += '<button type="button" class="btn btn_small btnCancle" data-popId="' + this.popId + '">닫기</button>';
			} else {
				html += '<button type="button" class="btn btn_small btnCancle" data-popId="' + this.popId + '">취소</button>';
				html += '<button type="button" class="btn btn_small btn_purple btnOk" data-popId="' + this.popId + '">확인</button>';
			}
			
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			$('body').append(html);
			$('body').append('<div class="mask_wrap"></div>');
			return this;
		}

		alert() {
			document.querySelector('#' + this.popId + ' .btnCancle').addEventListener('click', this.cancleCallBack);
			console.log(this);
			return this;
		}

		confirm() {
			document.querySelector('#' + this.popId + ' .btnOk').addEventListener('click', this.okCallBack);
			document.querySelector('#' + this.popId + ' .btnCancle').addEventListener('click', this.cancleCallBack);
			return this;
		}

		cancle() {
			$(this).closest('.commPopup').next('.mask_wrap').remove();
			$(this).closest('.commPopup').remove();
			console.log('내부', this);
			return this;
		}

		ok() {
			$(this).closest('.commPopup').next('.mask_wrap').remove();
			$(this).closest('.commPopup').remove();
			console.log('내부', this);
			return this;
		}
	}

	/************************************************************************
	 [필수] popId : 팝업아이디
	 [필수] title : 팝업 타이틀 (null, '', 일 시 팝업의 header가 노출 안됨)
	 [필수] msg : 내용
	 [필수] type : 팝업종류 (alert, confirm)

	 [필수] okFnc : 확인버튼 함수 (빈값으나 null 이라도 보내야함)
	 [필수] cancleFnc : 취소버튼 함수 (빈값으나 null 이라도 보내야함)
	 {...rest}
	*************************************************************************/
	let ModalCreate = new Modal(popId, title, msg, type, okFnc, cancleFnc, { ...rest });
	ModalCreate.open()[type]();
}

let ModalClose = function(obj){
	let popId = $(obj).attr('data-popid');
	document.querySelector('#' + popId).nextElementSibling.remove();
	document.querySelector('#' + popId).remove();
}

// PopupOpen('firstPopup', '알림1', '내용', 'alert', okClickFnc, cancleClickFnc, {});
// PopupOpen('firstPopup2', '알림2', '내용', 'confirm', okClickFnc, '', {});



