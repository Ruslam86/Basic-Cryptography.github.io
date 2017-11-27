
function Node(parent){
  this.parent = parent;
  this.x = Math.random() * document.body.offsetWidth;
  this.y = document.body.offsetHeight - 50;//Math.random() * 500;
  this.width = 2;//( Math.random() * 30 ) + 10;
  this.height = ( Math.random() * 30 ) + 10;
  this.startX = this.x;
  this.startY = document.body.offsetHeight - 50;
  this.dx = Math.random() * 500;  //for horizontal
  this.dy = Math.random() * 500;  //for vertical
  this.ratio = this.height / 2; //number added for drawing up
  this.div = document.createElement("div");

  this.color = 'rgb(' + Math.floor((Math.random() * 255)) + ',' +
                        Math.floor((Math.random() * 255)) + ',' +
                        Math.floor((Math.random() * 255)) + ')';
  this.drawInParent = function(){
    console.log(document.body.offsetHeight)
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.style.position = "absolute";
    this.div.style.left = this.x + 'px';
    this.div.style.top = this.y + 'px';
    this.div.style.backgroundColor = this.color;
    this.parent.appendChild(this.div);
  };
  this.getRandomCoordonate = function(){
    this.dx = Math.random() * 500;
    this.dy = Math.random() * 500;
  };


}

var view = document.getElementById('view'); //parent
var node_list = []; //impruve
var NODE_NUMBERS = 50; //number points
var SPEED = 1.3; //speed for interval
var ROUND = 5;
var curent_round = 1;
var refreshIntervalId = setInterval(function(){
  if(ROUND == curent_round){
    clearInterval(refreshIntervalId);
  }
  else{
    curent_round++;
  }
  for(var i = 1;i<=NODE_NUMBERS ;i++){
     let node = new Node(view); //node
     node.drawInParent();
     var interval = setInterval(function(){
       if(node.y < 0){
        // clearInterval(interval);
        node.x = node.startX;
        node.y = node.startY;
       }
       node.y -= node.ratio;
       node.div.style.top = node.y + 'px';
     },100);
  }
},2000);
