
const main = document.querySelector('main');
const button = document.querySelector('.get-random')



function getQuote () {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "c94bdc0f9bmshbc7236941db8b8dp1307a5jsn3c7dc13612af"
	}
})
.then(response => {
	return response.json();

})
.then((quotes) => {
      createContainer(quotes)
    
})
.catch(err => {
	console.error(err);
});
}




const solution = document.querySelector('.here')

button.addEventListener('click', getQuote)

function changeStatus () {
    button.innerText="Another one"
    button.classList.remove('remove')
    
}


function createContainer (quotes) {  

  

    const box = document.createElement('div')
    box.classList.add('box')

    solution.innerHTML= `
    <h2>${quotes.content}</h2>
    <h3>By ${quotes.originator.name}</h3>

    
    `

   
    button.classList.add('remove')

    setTimeout(changeStatus, 1500)

    


}


