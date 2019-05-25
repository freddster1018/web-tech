function loadUserRecipes(){
  $('#notloading').replaceWith('<div id="loading"></div>')
  //Click recipes tag, get this request
  console.log("loading users recipes");

  //Make the request, load the results
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

      //update saving term
      $('#loading').replaceWith('<div id="notloading" class="col-xs-12"><div id="results"></div></div>');
      //Get all the elements and put them in a search result

      //replace the results with no results!
      if(a.titles.length == 0){
        $('#results').append('<p>No results!</p>');
      }
      else{
        //foreach(recipe in response );
        for(let i = 0; i<a.titles.length; i++){
        // $('#results').append('<h1> Wow! </h1>');
        $('#results').append('<article class="search-result row"><div class="col-xs-12 col-sm-4"><a href="' + '/recipe_template?rID=1' + '" title="' + a.titles[i] + '" class="thumbnail"><img src="imgs/logos/logo.png" alt="' + a.titles[i] + '" /></a></div><div class="col-xs-6 col-xs-4"><ul class="meta-search"><h3><a href="/recipe_template?IdR=1">' + a.titles[i] + '</a></h3><li><i class="glyphicon glyphicon-time"><span>a time?</span></i></li></ul></div><div class="col-xs-6 col-sm-4"><button class="btn btn-danger" onclick="removeRecipe(' + " 'input!'"  + ');">Remove!</button></div><span class="clearfix borda"></span></article>');
        }
      }
    }
  };
  xmlhttp.open("POST","getUserResults", true);
  xmlhttp.send();
}

function removeRecipe(rId){
  if(confirm("Are you sure you want to delete: " + rId)){
    console.log("deleted: " + rId)
  }
  else{
    console.log("cancelled deletion of: " + rId);
  }
}