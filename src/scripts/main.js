

(function ($, window, document, undefined) {
  document.body.addEventListener('click', openBox);

  var fireCannon1 = createConfettiCannon('confetti-canvas-1', 100);
  var fireCannon2 = createConfettiCannon('confetti-canvas-2', 250);

  function openBox() {
    document.getElementsByClassName('box')[0].classList.add('open');
    document.getElementsByTagName('h1')[0].classList.add('reveal');

    setTimeout(fireCannon1, 650)
    setTimeout(fireCannon2, 650)
  }

  function createConfettiCannon(id, particles) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;


    // création d'un tableau
    var particle = [];
    var particleCount = 0;
    var gravity = 0.3;
    var colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548'
    ];



    for( var i = 0; i < particles; i++){

      particle.push({
        x : width/2,
        y : height/2,
        boxW : randomRange(5,20),
        boxH : randomRange(5,20),
        size : randomRange(2,8),

        spikeran:randomRange(3,5),

        velX :randomRange(-8,8),
        velY :randomRange(-50,-10),

        angle :convertToRadians(randomRange(0,360)),
        color:colors[Math.floor(Math.random() * colors.length)],
        anglespin:randomRange(-0.2,0.2),

        draw : function(){


          context.save();
          context.translate(this.x,this.y);
          context.rotate(this.angle);
          context.fillStyle=this.color;
          context.beginPath();
          // drawStar(0, 0, 5, this.boxW, this.boxH);
          context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
          context.fill();
          context.closePath();
          context.restore();
          this.angle += this.anglespin;
          this.velY*= 0.999;
          this.velY += 0.3;

          this.x += this.velX;
          this.y += this.velY;
          if(this.y < 0){
            this.velY *= -0.2;
            this.velX *= 0.9;
          };
          if(this.y > height){
            this.anglespin = 0;
            this.y = height;
            this.velY *= -0.2;
            this.velX *= 0.9;
          };
          if(this.x > width ||this.x< 0){

            this.velX *= -0.5;
          };



        },




      });

    }


    function drawScreen(){
      context.globalAlpha = 1;
      for( var i = 0; i < particle.length; i++){
        particle[i].draw();

      }
    }

    function update(){
      context.clearRect(0,0,width,height);

      drawScreen();

      requestAnimationFrame(update);
    }

    function randomRange(min, max){
      return min + Math.random() * (max - min );
    }

    function randomInt(min, max){
      return Math.floor(min + Math.random()* (max - min + 1));
    }

    function convertToRadians(degree) {
      return degree*(Math.PI/180);
    }

    function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
      var rot = Math.PI / 2 * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;

      context.strokeSyle = "#000";
      context.beginPath();
      context.moveTo(cx, cy - outerRadius)
      for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
      }
      context.lineTo(cx, cy - outerRadius)
      context.closePath();
      context.fillStyle=color;
      context.fill();

    }

    return update;
  }

})(Zepto, window, document);
