function setup() {
    createCanvas (600, 600);
    background("black");
  }
  
  function draw(){
  
     stroke ("#03A9F4");
     fill ("green");
  
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }
