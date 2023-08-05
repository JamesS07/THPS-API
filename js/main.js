console.log('Working')

// below is the burger of the day code to search date in the API.  Needs to be tweaked

document.querySelector('button').addEventListener('click', getSkater)

function getSkater(){
    let skaters = document.querySelector('input').value


fetch(`https://thps-bdf7deda80e6.herokuapp.com/api/[${skaters}]`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('.name').innerText = data.name
    document.querySelector('.age').innerText = data.age
    document.querySelector('.born').innerText = data.birthLocation
    document.querySelector('.price').innerText = data[0].price

})
.catch(err => {
    console.log('error ${err}')
})}