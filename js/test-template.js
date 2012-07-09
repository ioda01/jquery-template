(function($){
	$(function(){
		var string = "<h4>Hello {name},</h4><p>This is a text from the {source}</p>",
		obj1 = {'name' : 'Mike', 'source' : 'The guradian'},
		obj2 = {'name' : 'Jake', 'source' : 'The insider'},
		array = [obj1, obj2];
		$('<div>').template(obj1, string).appendTo('body');
		$('<hr>').appendTo('body');
		$('<div>').template(array, string).appendTo('body');		
		$('h1').template({'author' : 'Yoda'});
	});
}(jQuery));