
var liking = prompt("how much do you like your car");
   
while( liking > 10 ){
  liking = prompt("sory it must be less than 10")
}
var i =1;
var stars = prompt("how do you rate as from 1 - 5")
while(i <= stars && stars<=5){
  document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhL4DCxxisnc4iuug45VPuSszMmBnFjGOJRg&usqp=CAU' />")
  document.write('<h3>'+ i +'</h3>')
  i++
}






