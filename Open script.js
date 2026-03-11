fetch("https://api.github.com/users/YOURUSERNAME/repos")

.then(response => response.json())

.then(data => {

let container=document.getElementById("github-projects");

data.slice(0,6).forEach(repo=>{

let project=`

<div class="col-md-4">

<div class="card">

<h5>${repo.name}</h5>

<p>${repo.description || "No description available"}</p>

<a href="${repo.html_url}" target="_blank">View Code</a>

</div>

</div>

`;

container.innerHTML+=project;

});

});// JavaScript Document