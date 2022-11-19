fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
// .then(console.log)
.then(function(json){
    var container = document.querySelector('.container');

    json.results.map(function(results){
        container.innerHTML+=`
        <div class='card'><img src='`+results.image+`'>
        <h1>`+results.name+`</h1>
        <h3>`+results.species+`</h3><br>
        <h3>`+results.location.name+`</h3>
        <h3>Origin: `+results.origin.name+`</h3>
        <br>
        <i>Status: `+results.status+`</i>
        </div>
        `
    })
})

