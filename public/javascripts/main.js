$(function() {
console.log('hello');

	$('.load').on('click', function() {
		$.get('/countries', function(data) {
			// create an unordered list
		var list = $('<ul>');

		// create an array of list items from the list of names
		// passing arbitrary value ('country') that represents the 'data' that is being passed in
		var listItems = data.map(function(country) {
			return $('<li class="country">' + country.name + '</li>');
		})

		// append the list items to the unordered list
		list.append(listItems)

		// append the list to the body
		$('body').append(list);
		})
	})

	$('.search').on('click', function() {
		var searchText = $('input').val();

		$.get('/search', { searchedCountry: searchText }, function(data) {

		})

	})


})