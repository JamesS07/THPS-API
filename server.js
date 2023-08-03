const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const skaters = {
    'tony hawk':{
        'age': 55,
        'specialTrick':'The 900',
        'birthLocation': 'California',
        'stance': 'Goofy'
    },
    'andrew reynolds':{
        'age': 45,
        'specialTrick':'Frontside Flip',
        'birthLocation': 'Florida',
        'stance': 'Regular' 
    },
    'chad muska':{
        'age': 46,
        'specialTrick':'Frontside Tailslide',
        'birthLocation': 'Ohio',
        'stance': 'Regular'
    },
    'geoff rowley':{
        'age': 47,
        'specialTrick': 'Half Flip Casper',
        'birthLocation': 'Liverpool',
        'stance': 'Regular'
    },
    'create a skater':{
        'age': 25,
        'specialTrick': 'McTwist',
        'birthLocation': 'USA',
        'stance': 'Regular'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:THPS', (request,response)=>{
    const skatersName = request.params.THPS.toLowerCase()
    if(skaters[skatersName]){
        response.json(skaters[skatersName])
    }else{
        response.json(skaters['create a skater'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Special Meter is full on ${PORT}! Press Right + Down + Circle!`)
})