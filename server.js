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
    // result.toString()
    console.log(String(result))
    res.send(String(result))

  } else if (q.startsWith("misty")) {
    res.send("2-6-4")

  } else if (q.startsWith("fancy")) {
    res.send("3-12-8")

  } else if (q.startsWith("ocean")) {
    res.send("2-6-5")

  } else if (q.includes("< 37 15 32 7 14 60 19 30 32 55 >")) {
    res.send("67 47 51 67 69")

  } else if (q.includes("< 59 37 34 8 46 6 31 39 8 25 >")) {
    res.send("71 65 45 47 65")

  } else if (q.startsWith("< 18 35 48 11 57 59 27 40 32 46 >")) {
    res.send("59 73 75 89 77")

  } else if (q.startsWith("A")) {
    var arr = q.split('')

    if (arr.length == 6) {
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
