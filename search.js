function search(value) {

	var timestamp = Date.now();
		if(value !== ''){
			var url = 'https://api.viki.io/v4/search.json?c=' + value + '&per_page=5&with_people=true&app=100266a&t=' + timestamp;
			fetch(url, {
				method: 'GET',
				header: {
					'Accept': 'application/json'
				},
				cache: 'default'
			}).then(function(response){
				if(response.ok){
					return response.json()
				}
			}).then(function(data){
				showSuggestions(data);
			//	console.log(data)
			}).catch(function(error){
				console.log(error);
				//right now error is only server error because of improper encoding of spanish characters 
			})
		}
		else {
			document.getElementById('suggestion').classList.remove('active');
			}	
}