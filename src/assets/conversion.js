const fs = require('fs');
var today = new Date();

const year = today.getFullYear()
const month = today.getMonth() + 1
const date = today.getDate()

// function checkEmpty(element) {
//   return element !== undefined && element !== 0 && element !== null && element !== "";
// }

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
        add_data.id = obj[0].all_song.length


        // if (add_data.youtube[0] == "") {
        //   delete add_data.youtube
        // } else
        //   for (var index = 0; index < add_data.youtube.length; index++) {
        //     if (add_data.youtube[index] === null || add_data.youtube[index] === undefined || add_data.youtube[index] === "") {
        //       add_data.youtube.splice(index, 1); // 削除
        //       if (index > 0) index--;
        //     }
        //   }
        for (var index = 0; index < add_data.youtube.length; index++) {
          if (add_data.youtube[index] === null || add_data.youtube[index] === undefined || add_data.youtube[index] === "") {
            add_data.youtube.splice(index, 1); // 削除
            if (index > 0) index--;
          }
        }
        if (add_data.youtube.length >= 0) {
          add_data.movie = "true"
        }

        obj[0].all_song.push(add_data)
        pushData(obj[1].all_genre, add_data.genre)

        const newobj = {
          title: add_data.title,
          date: year + "." + month + "." + date
        }
        obj[2].notice_score.unshift(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.pop()
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
          click: result.click,
          date: year + "." + month + "." + date
        }
        obj[2].notice_score.unshift(newobj)
        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.pop()
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

function return_click(check_index, lendScore) {
  try {
    fs.readFile('assets/song.json', 'utf8', function readFileCallBack(err, data) {
      if (err) {
        console.log(err)
      } else {
        const obj = JSON.parse(data)


        //複数の返却処理 check_indexによってlend_scoreの選択されたindexを持ってきている
        for (let i = 0; i < check_index.length; i++) {
          const lend_id = lendScore[check_index[i]].id
          console.log(lend_id)
          const result = obj[0].all_song.find(item => item.id == lend_id)
          console.log(result)
          result.click = "false"
          const newobj = {
            title: result.title,
            click: result.click,
            date: year + "." + month + "." + date
          }
          obj[2].notice_score.unshift(newobj)
        }

        if (obj[2].notice_score.length >= 11) {
          obj[2].notice_score.pop()
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
export default {
  form,
  lend_click,
  return_click
};