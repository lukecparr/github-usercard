/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/lukecparr')
	.then((r) => document.querySelector('div.cards').appendChild(cardCreator(r)));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(user => {
	axios.get('https://api.github.com/users/' + user)
		 .then((r) => document.querySelector('div.cards').appendChild(cardCreator(r)))
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator(obj) {
	//create main parent div container
	const main = document.createElement('div');
	main.classList.add('card')
	
	const img = document.createElement('img');
	img.src = obj.data.avatar_url
	main.appendChild(img);
	
	const div = document.createElement('div');
	div.classList.add('card-info');
	main.appendChild(div);
	
	const h3 = document.createElement('h3');
	h3.classList.add('name')
	h3.textContent = obj.data.name
	div.appendChild(h3);
	
	const pName = document.createElement('p');
	pName.classList.add('username');
	pName.textContent = obj.data.login;
	div.appendChild(pName);
	
	const pLoc = document.createElement('p');
	pLoc.textContent = "Location: " + obj.data.location;
	div.appendChild(pLoc);
	
	const pProfile = document.createElement('p');
	pProfile.textContent = "Profile: ";
	div.appendChild(pProfile);
	
	const a = document.createElement('a');
	a.href = obj.data.html_url;
	a.textContent = obj.data.html_url;
	div.appendChild(a);
	
	const pFollowers = document.createElement('p');
	pFollowers.textContent = "Followers: " + obj.data.followers;
	div.appendChild(pFollowers);

	const pFollowing = document.createElement('p');
	pFollowing.textContent = "Following: " + obj.data.following;
	div.appendChild(pFollowing);
	
	const pBio = document.createElement('p');
	pBio.textContent = "Bio: " + obj.data.bio;
	div.appendChild(pBio);
	
	return main;

}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/




















