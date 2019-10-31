/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//axios.get("https://api.github.com/users/newbi462")


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

// inspeacted the data in the browser

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/
const toTheDom = document.querySelector('.cards');

axios.get("https://api.github.com/users/newbi462")

.then(response => {
console.log(response.data);
/*  response.data.forEach(item => {
    const newCard = stepThree(response.data)
    toTheDom.appendChild(newCard)
  });*/
  const newCard = stepThree(response.data)
  toTheDom.appendChild(newCard)
})
.catch(error => {
   console.log("The data was not returned", error)
 })





/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

// Step 3: Create a function that accepts a single object as its only argument,
// Using DOM methods and properties, create a component that will return the following DOM element:
function stepThree(object) {

//<div class="card">
  const divCard = document.createElement('div');
  divCard.classList.add('card');

//  <img src={image url of user} />
  const imgUser = document.createElement('img');
  imgUser.src = object["avatar_url"];
  divCard.appendChild(imgUser);

//  <div class="card-info">
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  //cardInfo.textContent = object["bio"];
  divCard.appendChild(cardInfo);

//    <h3 class="name">{users name}</h3>
  const userName = document.createElement('h3');
  userName.classList.add('name');
  userName.textContent = object["name"];
  cardInfo.appendChild(userName);

//    <p class="username">{users user name}</p>
  const userNameP = document.createElement('p')
  userNameP.classList.add('username');
  userNameP.textContent = object["login"];
  cardInfo.appendChild(userNameP);

//    <p>Location: {users location}</p>
  const userLocationP = document.createElement('p')
  userLocationP.textContent = object["location"];
  cardInfo.appendChild(userLocationP);

//    <p>Profile:
//      <a href={address to users github page}>{address to users github page}</a>
//    </p
  const userLinkP = document.createElement('p')
  cardInfo.appendChild(userLinkP);
  const userLinkA = document.createElement('a')
  userLinkA.href = object["html_url"];
  userLinkP.appendChild(userLinkA);


//    <p>Followers: {users followers count}</p>
  const followersP = document.createElement('p')
  followersP.textContent = object["followers"];
  cardInfo.appendChild(followersP);

//    <p>Following: {users following count}</p>
  const followingP = document.createElement('p')
  followingP.textContent = object["following"];
  cardInfo.appendChild(followingP);

//    <p>Bio: {users bio}</p>
  const bioP = document.createElement('p')
  bioP.textContent = object["bio"];
  cardInfo.appendChild(bioP);

//  </div>
//</div>

  return divCard;
};


/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
