// function myFunction(){
// 	var x = document.getElementById('myList').textcontent

// 	document.getElementById('demo').innerHTML = x
// }

// myFunction()



// function getInfo(){
// 	var userInput = document.getElementById('username').value
// 	var password = document.getElementById('password').value
// 	document.getElementById('demo').textContent = "Your username is " + userInput + " and your password is " + password
// }


// var cars = ["honda", "acura", "lexus", "toyota"]

// console.log("the first car is a " + cars[0] + " and the second car is a " + cars[1])

// for(i = 0; i < cars.length; i++){
// 	console.log(cars[i])
// }

// var num = [22, 44, 66, 88]
// var check = 0

// function findLargest() {
// for(i = 0; i < num.length; i++)	{
// 	if(check < num[i]) {
// 		check = num[i];
// }
// }
// }
// findLargest();
// console.log(check);

// var carObject = {
// 	make: "fiat",
// 	year: 2010,
// 	purchased: false
// }
// console.log(carObject.make)


// getInfo(
// var userlogin = [
// {
// 	name: "pikachu",
// 	password: "electric"
	
// },
// {
// 	name: "squirtle",
// 	password: "electric"
	
// },
// {	
// 	name: "charmander",
// 	password: "fire"
	
// 	}
// 	]
// 	)
// 	if(userlogin.name = name, userlogin.password = password) {
// 		console.log("welcome " + name)
// 	} else {
// 		document.write("gtfo")
// 	}


var peopleObjects = [
{
	username: "mike",
	password: "poop"
},
{
	username: "tom",
	password: "jones"
}
]

function getInfo(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	for(i = 0; i < peopleObjects.length; i++){
		if(username == peopleObjects[i].username && password == peopleObjects[i].password){
			alert(username + " is logged in!!!")
			console.log(username + " is logged in!!!")
			return
		}
	}
	alert("incorrect username or password")
}
