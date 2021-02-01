const fs = require('fs');


//serve状態だとpathはsrc/assets/song.json
//build状態だとpathはassets
function form(add_data) {
  try {
    fs.readFile('assets/song.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log("js成功")
        const obj = JSON.parse(data);
/** 配列内で値が重複してないか調べる **/

        // console.log(existsSameValue(obj[1].all_genre))
        // console.log(obj)
        obj[0].all_song.push(add_data);
        pushData(obj[1].all_genre, add_data.genre);

        obj[0].all_song.sort(function (a, b) {
        if (a.title < b.title) {
          return -1
        } else {
          return 1
        }
        })
        // console.log(obj[1].all_genre.indexOf(add_data.genre))
        // obj[1].all_genre.push(add_data.genre);
        const json = JSON.stringify(obj)
        fs.writeFile('assets/song.json', json, function (err) {
          if(err)console.log(err)
        })
      }
    })
} catch (err) {
  console.log(err)
  // console.log(fs)
}
}
function pushData(array, value){
	if (array.indexOf(value) == -1){
		array.push(value);
	}
	return true;
}

export default { form };