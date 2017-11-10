$(document).ready(function() {

	$('#addToDoList').submit(addToDoListItem);
	$('#clearList').click(emptyToDoList);
	$('#clearCompletedList').click(removeCompletedToDoListItems);

	$('#todos').on('click', '.remove', removeToDoListItem);

	$('#todos').on('click', '.edit', editToDoListItem);

	$('#todos').on('blur', '.editor', editToDoListItem);

	$('#todos').on('click', 'li', markToDoListItemAsCompleted);


	
	function addToDoListItem() {
		var item = $('#addToDoItem').val();

		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

		updateNumberOfToDoListItems();
		};

	function removeToDoListItem() {
		$(this).parents('li').remove();
	};

	function editToDoListItem() {
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();
		$(editClicked).html('<form class="editor" action="#"><input type="text" value="'+itemContent+'" /></form>');
	};

	function saveEditedToDoList() {
		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');
		$(listItem).html('<span class="item">'+newItem+'</span><a class="edit">Edit</a><a class+"remove"><Remove</a>');
	};

	function markToDoListItemAsCompleted() {
		$(this).toggleClass('done');
		updateNumberOfToDoListItems()
	};

	function emptyToDoList() {
		$('#todos').empty();
		updateNumberOfToDoListItems();
	};

	function removeCompletedToDoListItems() {
		$('.done').remove();
	};

	function updateNumberOfToDoListItems() {
		var count = $('#todos li').not('.done').length;
		$('#count').html(count);
	};
	

});