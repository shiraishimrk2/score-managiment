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
        add_data.click = "false"
        add_data.id = obj[0].all_sogn.length
        obj[0].all_song.push(add_data)
        pushData(obj[1].all_genre, add_data.genre)

        obj[0].all_song.sort(function (a, b) {
          if (a.title < b.title) {
            return -1
          } else {
            return 1
          }
        })

        const newobj = {
          title: add_data.title
        }
        obj[2].notice_score.push(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.shift()
        }
        // console.log(obj[1].all_genre.indexOf(add_data.genre))
        // obj[1].all_genre.push(add_data.genre);
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
function pushData(array, value) {
  if (array.indexOf(value) == -1) {
    array.push(value);
  }
  return true;
}

function lend_click(song_index, song) {
  try {
    fs.readFile("assets/song.json", 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        const obj = JSON.parse(data)

        const song_id = song[song_index.number].id
        console.log(song_id)

        const result = obj[0].all_song.find(item => item.id == song_id)
        console.log(result)

        result.click = "true"

        const newobj = {
          title: result.title,
          click: result.click
        }

        obj[2].notice_score.push(newobj)
        if (obj[2].notiec_score.length >= 11) {
          obj[2].notice_score.shift()
        }

        const json = JSON.stringify(obj)
        console.log("書き換え成功")
        fs.writeFile('assets/song.json', json, function (err) {
          if (err) console.log(err)
        })
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function return_click(index, lendScore) {
  try {
    fs.readFile('assets/song.json', 'utf8', function readFileCallBack(err, data) {
      if (err) {
        console.log(err)
      } else {
        const obj = JSON.parse(data)

        const lend_id = lendScore[index].id
        console.log(lend_id)

        const result = obj[0].all_song.find(item => item.id == lend_id)
        console.log(result)

        result.click = "false"

        const newobj = {
          title: result.title,
          click: result.click
        }

        obj[2].notice_score.push(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.shift()
        }

        const json = JSON.stringify(obj)
        console.log("書き換え成功")
        fs.writeFile("assets/song.json", json, function (err) {
          if (err) console.log(err)
        })
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export default { form, lend_click, return_click };