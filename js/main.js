console.log('Working')

// below is the burger of the day code to search date in the API.  Needs to be tweaked

// document.querySelector('button').addEventListener('click', getBurger)

// function getBurger(){
//     let epID = document.querySelector('input').value


// fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[${epID}]`)
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     document.querySelector('h4').innerText = data[0].name
//     document.querySelector('.season').innerText = data[0].season
//     document.querySelector('.episode').innerText = data[0].episode
//     document.querySelector('.price').innerText = data[0].price

// })
// .catch(err => {
//     console.log('error ${err}')
// })}