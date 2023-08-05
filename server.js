const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const skaters = {
    'tony hawk':{
        'age': 55,
        'specialTrick':'The 900',
        'birthLocation': 'San Diego, California',
        'stance': 'Goofy'
    },
    'bob burnquist': {
        'age': 46,
        'specialTrick': 'Burntwist',
        'birthLocation': 'Rio de Janeiro, Brazil',
        'stance': 'Regular' 
    },
    'kareem campbell':{
        'age': 49,
        'specialTrick': '50 Board Variable',
        'birthLocation': 'Harlem, New York',
        'stance': 'Regular' 
    },
    'rune glifberg':{
        'age': 48,
        'specialTrick': 'Kickflip McTwist',
        'birthLocation': 'Copenhagen, Denmark',
        'stance': 'Regular'
    },
    'andrew reynolds':{
        'age': 45,
        'specialTrick':'Heelflip to Buntside',
        'birthLocation': 'Lakeland, Florida',
        'stance': 'Regular' 
    },
    'bucky lasek':{
        'age': 50,
        'specialTrick': 'Fingerflip Airwalk',
        'birthLocation': 'Baltimore, Maryland',
        'stance': 'Regular'
    },
    'elissa steamer':{
        'age': 47,
        'specialTrick': 'Judo Madonna',
        'birthLocation': 'Fort Myers, Florida',
        'stance': 'Regular'
    },
    'jamie thomas':{
        'age': 48,
        'specialTrick':' 540 Flip',
        'birthLocation': 'Palm Beach Gardens, Florida',
        'stance': 'Regular'
    },
    'chad muska':{
        'age': 46,
        'specialTrick':'360 Shove it Rewind',
        'birthLocation': 'Lorain, Ohio',
        'stance': 'Regular'
    },
    'geoff rowley':{
        'age': 47,
        'specialTrick': 'Darkslide',
        'birthLocation': 'Liverpool, England',
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