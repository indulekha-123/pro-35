var database ,dog,dog1,dog2
var position

var feed,add
var foodobject
var Feedtime
var Lastfeed


function preload()

{
  dogimg1 = loadImage("Dog.png")
  dogimg2 = loadImage("happydog.png")

}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED DRAGO")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)

} 

function draw(){
 background(46,139,87);

 foodobject.display()
 
 drawSprites();
  
 fill(255,255,254);
 textSize(15);
if(Lastfeed>=12){
  text("Last Feed :" + Lastfeed%12+"PM",350,30);

}else if(Lastfeed==0){
  text("Last Feed : 12AM",350,30);

}else{
  text("Last Feed:"+"AM",350,30);

}
FeedTime=database.ref('FeedTime')
;
FeedTime.on("value",function(data){
  lastFeed=data.val();

})
drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}


function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(happydog.png)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}