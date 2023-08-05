const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const skaters = {
    'tony hawk':{
        'name': 'Tony Hawk',
        'age': 55,
        'specialTrick':'The 900',
        'birthLocation': 'San Diego, California',
        'stance': 'Goofy'
    },
    'bob burnquist': {
        'name': 'Bob Burnquist',
        'age': 46,
        'specialTrick': 'Burntwist',
        'birthLocation': 'Rio de Janeiro, Brazil',
        'stance': 'Regular' 
    },
    'kareem campbell':{
        'name': 'Kareem Campbell',
        'age': 49,
        'specialTrick': '50 Board Variable',
        'birthLocation': 'Harlem, New York',
        'stance': 'Regular' 
    },
    'rune glifberg':{
        'name': 'Rune Glifberg',
        'age': 48,
        'specialTrick': 'Kickflip McTwist',
        'birthLocation': 'Copenhagen, Denmark',
        'stance': 'Regular'
    },
    'andrew reynolds':{
        'name': 'Andrew Reynolds',
        'age': 45,
        'specialTrick':'Heelflip to Buntside',
        'birthLocation': 'Lakeland, Florida',
        'stance': 'Regular' 
    },
    'bucky lasek':{
        'name': 'Bucky Lasek',
        'age': 50,
        'specialTrick': 'Fingerflip Airwalk',
        'birthLocation': 'Baltimore, Maryland',
        'stance': 'Regular'
    },
    'elissa steamer':{
        'name': 'Elissa Steamer',
        'age': 47,
        'specialTrick': 'Judo Madonna',
        'birthLocation': 'Fort Myers, Florida',
        'stance': 'Regular'
    },
    'jamie thomas':{
        'name': 'Jamie Thomas',
        'age': 48,
        'specialTrick':' 540 Flip',
        'birthLocation': 'Palm Beach Gardens, Florida',
        'stance': 'Regular'
    },
    'chad muska':{
        'name': 'Chad Muska',
        'age': 46,
        'specialTrick':'360 Shove it Rewind',
        'birthLocation': 'Lorain, Ohio',
        'stance': 'Regular'
    },
    'geoff rowley':{
        'name': 'Geoff Rowley',
        'age': 47,
        'specialTrick': 'Darkslide',
        'birthLocation': 'Liverpool, England',
        'stance': 'Regular'
    },
    'create a skater':{
        'name': 'Create a Skater',
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