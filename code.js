var button = document.getElementById("btn");

button.addEventListener("click", function(e){
	e.preventDefault();
	fetch("http://quotes.stormconsultancy.co.uk/random.json")
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		var quoteVar = myJson.quote;
		var authorVar = myJson.author; 
		var domQuote = document.getElementById("zitat").innerHTML = quoteVar;
		var domAuthor = document.getElementById("author").innerHTML = authorVar;
	})
})

