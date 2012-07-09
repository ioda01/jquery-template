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
	$(function(){
		var string = "<h4>Hello {name},<\/h4> <p>This is a test text from {source}.<\/p>",
			obj = {name: 'Mike', source : 'The insider'},
			obj2= {name: 'Jake', source : 'The snitch'},
			arr=[obj,obj2]
		$('<div>').template(obj,string).appendTo('body')
		$('<hr>').appendTo('body')
		$('<div>').template(arr,string).appendTo('body')
		$('h1').template({author:'Jake'})
	});
}(jQuery));