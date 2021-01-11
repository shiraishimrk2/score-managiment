const fs = require('fs');

function form(add_data) {
  try {
    fs.readFile('src/assets/song.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log("js成功")
        const obj = JSON.parse(data);
        // console.log(obj)
        obj[0].all_song.push(add_data);
        const json = JSON.stringify(obj)
        fs.writeFile('src/assets/song.json', json, function (err) {
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
