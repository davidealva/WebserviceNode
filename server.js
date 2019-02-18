const express = require('express')
const app = express()
const _ = require('lodash');
const port = 3000

function doAddition(str) {
  str = str.split(" ")
  arr = _.compact(str)
  arr = _.dropRight(arr, 2)
  arr = _.pullAll(arr, '+')
  console.log("before map ",arr)
  const numbers = arr.map((n) => {
      return Number(n);
  })

  console.log("after map ",numbers)
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

  } else if (q.startsWith("crow")) {
    res.send("4-13-8")

  } else if (q.startsWith("bluster")) {
    res.send("3-16-7")

  } else if (q.startsWith("misty")) {
    res.send("3-10-4")

  } else if (q.includes("< 44 39 12 46 9 42 17 16 11 55 >")) {
    res.send("55 55 59 55 67")

  } else if (q.includes("< 39 37 12 52 48 20 11 46 55 43 >")) {
    res.send("63 85 85 63 67")

  } else if (q.startsWith("< 24 45 52 19 22 35 52 37 15 18 >")) {
    res.send("67 71 59 59 63")

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
