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
        // console.log(obj)
        obj[0].all_song.push(add_data);
        obj[1].all_genre.push(add_data.genre);
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
export default { form };