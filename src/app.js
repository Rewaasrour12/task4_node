
    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    const path = require ("path")
    const x =  path.join(__dirname , '../public')
    app.use (express.static (x))

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../our_temp/views" )
      app.set( "views" , viewsDirectory)

      //////////////////////////////////////////////////////////////////

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../our_temp/partials")

      hbs.registerPartials(partialsPath)

//////////////////////////////////////////////////

app.get('/' , (req , res) => {
  res.render('index' , {
      // title: "HOME",
      // desc : "this is home page"
  })
})
app.get('/weather', (req, res) => {
  // Replace these values with real data from a weather API
  const data = {
    country: 'Egypt',
    latitude: 30.05,
    longitude: 31.25,
    weather: 'Sunny',
    temperature: '91.4°F'
  };
  res.render('weather', {
    title: 'Check the weather ',
    // active: 'weather',
    data
  });
});
    ///////////////////////////////////////////////////////
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
