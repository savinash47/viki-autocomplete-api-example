function showSuggestions(data) {
			var languages = ['te','tj','tf'];
			
			//to remove previous elements when clicked on the output links
			document.getElementById('suggestion').innerHTML = '';
			document.getElementById('suggestion').classList.add('active');
			var suggestions = document.getElementById('suggestion');

			if(data.length < 1) {
				var li = document.createElement('li');
				var span = document.createElement('span');
				span.innerText = 'No results found';
				li.appendChild(span);
				suggestions.appendChild(li);
			}

			data.forEach(function(response){
				var links = [];
				
				var imageContainer = document.createElement('div');
				var sideContainer = document.createElement('div');
				
				var li = document.createElement('li');
				

				var img = document.createElement('img');
				img.src = response.i.trim();

				var a = document.createElement('a');
				a.innerText = response.tt.trim();

				sideContainer.appendChild(a);
				links.push(a);

				languages.forEach(function(language){
					if(language in response){
						var a = document.createElement('a');
						a.innerHTML = response[language].trim();
						sideContainer.appendChild(a);
						if(language !== 'te'){ //removing spanish from searchable term
							links.push(a);
						} 
					}
				})

				links.forEach(function(a){
					a.addEventListener("click",function(event){
						document.getElementById('data-input').value = event.target.innerText;
						search(document.getElementById('data-input').value);
					})
				})
				
				li.appendChild(imageContainer);
				li.appendChild(sideContainer);
				imageContainer.appendChild(img);
				suggestions.appendChild(li);
			})
}