var texteShowSidebar = '<a class="icon icon-zoom-in">Agrandir</a>';
var texteHideSidebar = '<a class="icon icon-zoom-out">Reduire</a>';

$(function() {

	$('#quick-search').append('<br />');
	$('#quick-search').append('<span id="showFullScreen" style="text-align: right; float: right;">' + texteShowSidebar + '</span>');

	$('#showFullScreen').click(function() {
	
		var hiddenSidebar = localStorage.getItem('hiddenSidebar');
		console.info(hiddenSidebar);

		if(hiddenSidebar == 'true') {
			console.info(hiddenSidebar);
			localStorage.setItem('hiddenSidebar', 'false');
			showSidebar();
		} else {
			console.info(hiddenSidebar);
			localStorage.setItem('hiddenSidebar', 'true');
			hideSidebar();
		} 
	});
	console.log(localStorage.getItem('hiddenSidebar') !== null);
	console.log(localStorage.getItem('hiddenSidebar') === 'true');
	if(localStorage.getItem('hiddenSidebar') !== null && localStorage.getItem('hiddenSidebar') === 'true') {
		hideSidebar();
	} else {
		localStorage.setItem('hiddenSidebar', 'false');
	}
	
});

function showSidebar()
{
	console.info('show sidebar');
	$('#sidebar').show();
	$('#content').css('width', '70%');
	$('#showFullScreen').html(texteShowSidebar);
}

function hideSidebar()
{
	console.info('hide sidebar');
	$('#sidebar').hide();
	$('#content').css('width', '95%');
	$('#showFullScreen').html(texteHideSidebar);
}