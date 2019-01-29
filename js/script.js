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

$(".storygrid").hide();
$(".loadinggif").hide();

$("#options").on("change", function() {
  $(".storygrid").empty();
  $("#heading" /*header*/).attr("class", "top");//Added class="top" to style
  $(".storygrid")
    .delay(300)// Delay to show loader
    .fadeIn();
  $(".loading").show();

  var val = $(this).val();
  loadContent(val);
});

function loadContent(value) {
  var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
  url +=
    "?" +
    $.param({//test why does this work? Why use this?
      "api-key": "7GASR12G1Xh0u1vVwK7R35tHubffWv5y"
    });

  $.ajax({
    method: "GET",
    url: url
  })

    .done(function(data) {
      var index = 0;
      while (index <= 11) {
        var stories = "";

        if (data.results[index].multimedia.length > 0) {
          stories +=
            '<a target="_blank" href="' +  //_new or _blank??
            data.results[index].url +
            '" class= "tiles">';
          stories += '<img src="';
          stories += data.results[index].multimedia[4].url;
          stories += '"/>';
          stories += '<p> "';
          stories += data.results[index].abstract;
          stories += '"</p>';
          stories += "</a>";

          $(".storygrid").append(stories);
        }

        index++;
      }
    })

    .fail(function(error) {// define?
      throw error;
    })
    .always(function() {
      $(".loading")
        .hide()
        .delay(3000);
    });
}

// API key = 7GASR12G1Xh0u1vVwK7R35tHubffWv5y
