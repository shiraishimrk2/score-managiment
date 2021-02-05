const fs = require('fs');


//serve状態だとpathはsrc/assets/song.json
//build状態だとpathはassets
function form(edit_data, song_index) {
  try {
    fs.readFile('assets/song.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log("edit成功")
        const obj = JSON.parse(data);
        // console.log(obj)
        //   console.log(obj[0].all_song[song_index.number])
        Object.assign(obj[0].all_song[song_index.number], edit_data)
        // obj[0].all_song.push(edit_data);

        const newobj = {
          title: edit_data.title,
          edit: edit_data.title
        }

        obj[2].notice_score.push(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.shift()
        }
        const json = JSON.stringify(obj)
        fs.writeFile('assets/song.json', json, function (err) {
          if (err) console.log(err)
        })
      }
    })
  } catch (err) {
    console.log(err)
    // console.log(fs)
  }
}
export default { form };