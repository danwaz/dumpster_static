$(function(){
	$('#js-search').on({
		submit : function (e) {
			e.preventDefault();
			var dest = $('.idNum').val();
      console.log(dest.length);
      if(dest.length > 0) {
        window.location.href = '/items/' + dest;
      }

		}
	});
});