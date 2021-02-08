const fs = require('fs');
//serve状態だとpathはsrc/assets/song.json
//build状態だとpathはassetswindow.onload = function () {
   var today = new Date();
//     console.log(today);
 
//     console.log("年=" + today.getFullYear());
//     console.log("月=" + (today.getMonth()+1));
//     console.log("日=" + today.getDate());
//     console.log("時=" + today.getHours());
//     console.log("分=" + today.getMinutes());
// console.log("秒=" + today.getSeconds());
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date=today.getDate()
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
        obj[0].all_song.push(add_data)
        pushData(obj[1].all_genre, add_data.genre)
        
        const newobj = {
          title: add_data.title,
          date:year+"."+month+"."+date
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
          date:year+"."+month+"."+date
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
          click: result.click,
          date:year+"."+month+"."+date
        }
        obj[2].notice_score.unshift(newobj)
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
export default { form, lend_click, return_click };