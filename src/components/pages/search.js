function search() {
  var all_titles = json.Places.filter(function (item) {
    if (item.title == "") return true;
  });
  for (var i = 0; i < all_titles.length; i++){
    console.log(all_titles[i].title)
  }
}
export default { search };
