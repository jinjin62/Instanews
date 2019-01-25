$(function() {
  console.log("Welcome to Instanews!");
});

// Problem: Retrieve content from the NYT Top Stories API and add it to our site.
// If we dont get a successful response, let the user know;

//1a. Listen for the select menut to change: {watching value}
//1b. If the select value is a empty string do nothing and return from the function immediately
//1c. Show and loader for the user and clear out old stories
//2. Send a request to the NYT API for the data base on the value of the select menu
//3. If successful, parse the data we get back and decide what parts we want to append to the DOM
//4. Append that stuff to the DOM
//5. If unsuccessful, show a helpful error message to the user in the UI
//6. hide the loader again

// same as document ready
$(function() {
  $("#section").on("change", function() {
    //selecting the dropdown menu 1a
    const section = $(this).val();

    // if sectopm is empty, return
    // show loader
    // clear stories

    //https://api.nytimes.com/svc/topstories/v2/{section}.json

    //make out ajax request
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        section +
        ".json?api-key=7GASR12G1Xh0u1vVwK7R35tHubffWv5y",
      dataType: "json"
    }).done(function(data){
      //append all the things most code will be in here
    }).fail(function()  {

   }).always(function() {
    //hid tthe loader
    });
  });
});