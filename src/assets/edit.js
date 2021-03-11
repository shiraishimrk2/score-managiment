const fs = require('fs');
//serve状態だとpathはsrc/assets/song.json
//build状態だとpathはassets
var today = new Date();
//     console.log(today);

const year = today.getFullYear()
const month = today.getMonth() + 1
const date = today.getDate()

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
        console.log(edit_data)
        console.log(obj[0].all_song[song_index.number])
        if (edit_data.youtube.length >= 0) {
          console.log(edit_data)
          edit_data.movie = 'true'
          console.log(edit_data.movie)
        }
        if (edit_data.youtube[0] == "") {
          edit_data.youtube.splice(0)
          edit_data.movie = 'false'
        }
        for (var index = 0; index < edit_data.youtube.length; index++) {
          if (edit_data.youtube[index] === null || edit_data.youtube[index] === undefined || edit_data.youtube[index] === "") {
            edit_data.youtube.splice(index, 1); // 削除
            if (index > 0) index--;
          }
        }

        Object.assign(obj[0].all_song[song_index.number], edit_data)
        // console.log(Object.assign(obj[0].all_song[song_index.number], edit_data))
        // obj[0].all_song.push(edit_data);
        const newobj = {
          title: edit_data.title,
          edit: edit_data.title,
          date: year + "." + month + "." + date
        }

        // if (edit_data.youtube[0] == "") {
        //   delete edit_data.youtube
        // } else
        //   for (var index = 0; index < edit_data.youtube.length; index++) {
        //     if (edit_data.youtube[index] === null || edit_data.youtube[index] === undefined || edit_data.youtube[index] === "") {
        //       edit_data.youtube.splice(index, 1); // 削除
        //       if (index > 0) index--;
        //     }
        //   }



        obj[2].notice_score.unshift(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.pop()
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
export default {
  form
};