// javascript for the Chuck Norris fact generater (coded by Chuck Norris ;) ).

// here we are selecting the button element eith the help of its id.
const button = document.getElementById("button");

//here we are adding the event listener to the button foe the click event.
button.addEventListener("click", (e) => {

    // it is fetching the data from the given api
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        //selecting the useful data from the api object and diplaying it.
        console.log(data)
        const joke = data.value;
        const text = document.getElementById("jokearea");
        text.innerHTML = joke;
      }).catch((error) => {

        // Handling the error
        console.error(error);
        const text = document.getElementById("jokearea");
        text.innerHTML = "Failed to fetch a joke. Please try again later.";
      });
  });
  