function loadRecipeDetails(str) {
  console.log("loading Recipe");
  console.log(str);
  if(str == ""){
    $('#notLoading').replaceWith('<h1 id="notLoading"></h1>');
  }
  else{
    $('#notLoading').replaceWith('<div id="loading"></div>');
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //for length generate each article and put it in an element

        //Get json object from this this.response.jsonobject
        let a = JSON.parse(this.responseText);
        console.log(a);
        console.log(a.length);

        //update saving term
        $('#searchTerm').replaceWith('<h2 id="searchTerm">Result for <strong>' + str + '</strong></h2>');

        $('#loading').replaceWith('<div id="notLoading" class="col-xs-12"><div class="container" id="filter"><p><a href="#collapseFilter" data-toggle="collapse">In a hurry? Filter by time!</a></p><div class="collapse" id="collapseFilter"><div class="row"><div class="col-xs-6"><label for="cookTimeFilter">Cook time</label><input class="form-control" type="number" id="cookTimeFilter" onkeyup="filterResults();"/></div><div class="col-xs-6"><label for="prepTimeFilter">Prep Time</label><input class="form-control" type="number" id="prepTimeFilter" onkeyup="filterResults();"/></div></div></div></div><div id="results"></div></div>');
        //Get all the elements and put them in a search result

        //replace the results with no results!
        if(a.length == 0){
          $('#results').append('<p>No results!</p>');
        }
        else{
          //foreach(recipe in response );
          for(let i = 0; i < a.length; i++){
          // $('#results').append('<h1> Wow! </h1>');
          // $('#results').append('<article class="search-result row"><div class="col-xs-12 col-sm-12 col-md-4">'+ a.titles[i] + '</div></article>');
          $('#results').append('<article class="search-result row"><div class="col-xs-12"><ul class="meta-search"><h3><a href="/recipe_template?IdR=' + a[i].IdR + '">' + a[i].title + '</a></h3><span>Cook time: <i class="glyphicon glyphicon-time"></i> <a id="cookTime">' + a[i].cookTime  + '</a> | </span><span> Prep time: <i class="glyphicon glyphicon-time"></i> <a id="prepTime">' + a[i].prepTime  + '</a></span></ul></div><span class="clearfix borda"></span></article>');
          }
        }
      }
    };
    xmlhttp.open("POST","getSearchResults" + "?search=" + str, true);
    xmlhttp.send();
  }
}

function search(){
  console.log("you searched!");
  console.log($("#search").val());
  loadRecipeDetails($("#search").val());
  return false;
}
/*
$("#searchForm").on('submit', function (e){
  //search();
  console.log("you did a thing!");

  e.preventDefault();
});
*/
