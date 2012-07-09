(function($){
	String.prototype.template=function(o){
		return this.replace(/\{(.*?)\}/g,function(m,w){
			return o[w]||'undefined value'
		});
	};
	
	$.extend($.fn, {
		template : function(o, str) {
			return this.each(function(){
				var s=str||$(this).html(),
					res=$.isArray(o) ? $.map(o,function(o){return s.template(o)}).join('') : s.template(o);
				return $(this).html(res)
			});
		}
	});
}(jQuery));