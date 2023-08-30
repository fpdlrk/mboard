const PopupOpen = function(opts, el){
	const self = this;

	if(opts.headerTitle == ''){
		el.querySelector('.pop_header').style.display = 'none';
	}else{
		el.querySelector('#popTitle').innerHTML = opts.headerTitle;
	}
	
	let span = document.createElement('span');
	let maskDiv = document.body.insertBefore(span, document.body.firstChild);

	el.classList.add('open');
	el.style.width = opts.width + 'px';
	el.querySelector('.pop_body').style.height = opts.height + 'px';
	maskDiv.classList.add('mask_wrap');
	self.el = el;
}

PopupOpen.prototype = (function(){
	function _init(self){
		_initEvt(self);
	}

	function _initEvt(self){
		let mask = document.querySelector('.mask_wrap');
		self.el.querySelector('.btnCancle').onclick = function(){
			self.el.classList.remove('open');
			document.body.removeChild(mask);
		}
	}

	return {
		init : function(){
			_init(this);
		},
		initEvt : function(){
			_initEvt();
		}
	}
})();

Element.prototype.open = function(setting){
	const config = {
		'popId' : this.id,
		'headerTitle' : null,
		'data' : null,
		'width' : null,
		'height' : null,
		'callBack' : null,
	}

	let opts = Object.assign(config, setting);
	const module = new PopupOpen(opts, this);
	module.init();
	return module;
}

Element.prototype.close = function(){
	let mask = document.querySelector('.mask_wrap');
	document.getElementById(this.id).classList.remove('open');
	document.body.removeChild(mask);
}