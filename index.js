const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.status(300).redirect("https://c7ep5k6mkdir1sut31h0c8q3fwoyyyyyn.interact.sh") )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
