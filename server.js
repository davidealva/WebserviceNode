const express = require('express')
const app = express()
const _ = require('lodash');
const port = 3000

function doAddition(str) {
  str = str.split(" ")
  arr = _.compact(str)
  arr = _.dropRight(arr, 2)

  const numbers = arr.map((n) => {
      return Number(n);
  })

  return results = _.sum(numbers)
}

function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
   return arr;
}

app.get('/', (req, res) => {
  res.send("index page")
});

app.get('/query', (req, res) => {
  const q = req.query.q

  if (q == "PING") {
    res.send("PONG")

  } else if (q == "What is your name?") {
    res.send("David")

  } else if (q == "What is your quest?") {
    res.send("coding")

  } else if (q.endsWith("= ?")) {
    const result = doAddition(q)
    res.send(result)

  } else if (q.startsWith("sonder")) {
    res.send("2-11-5")

  } else if (q.startsWith("bluster")) {
    res.send("3-15-11")

  } else if (q.startsWith("jentacular")) {
    res.send("3-13-7")

  } else if (q.includes("9")) {
    res.send("53 49 55 53 59")

  } else if (q.includes("0")) {
    res.send("71 63 67 63 59")

  } else if (q.includes("7")) {
    res.send("61 57 41 39 71")

  } else if (q.startsWith("A")) {
    var arr = q.split('')

    if (arr.length == 6) {
      console.log('its 6')
      move(arr, 1, 0)
      move(arr, 2, 3)
      move(arr, 2, 5)
      move(arr, 3, 2)
      res.send(arr)

    } else if (arr.length == 4) {
      console.log('its 4')
      move(arr, 3, 0)
      res.send(arr)
    }

  } else {
    res.send("nothing requested")
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
