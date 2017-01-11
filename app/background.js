const rand = (num) => Math.round(Math.random() * num);

class BackgroundManager {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.canvas.width = innerWidth;
    this.size = window.innerWidth < 931 ? 2 : 5;
    this.canvas.height = innerHeight;
    this.stage = new createjs.Stage(this.canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", () => this.tick());
    this.draw();
  }

  tick(){
    this.stage.update();
  }

  draw(){
    let i = 0
    window.setInterval( () => {
      let circle = new createjs.Shape();
      i += 1;
      this.addCircle(circle, i);
    }, 50);
  }

  addCircle(circle, i){
    let color = i % 2 === 0 ? '#8f9193' : 'rgb(106,168,79)';
    let x = Math.round(Math.random() * this.canvas.width);
    let y = Math.round(Math.random() * this.canvas.height);
    circle.graphics.beginFill(color).drawCircle(x, y, rand(this.size));
    this.move(circle);
    this.stage.addChild(circle);
  }

  move(circle){
    const x = circle.x + rand(10);
    const y = circle.y + rand(10);
    createjs.Tween.get(circle, { loop: true })
      .to({ x: x }, 1000, createjs.Ease.getPowInOut(4))
      .to({ alpha: 0, y: y - 100 }, 500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, y: y + 40 }, 100)
      .to({ alpha: 1, y: x - 100 }, 500, createjs.Ease.getPowInOut(2))
      .to({ x: y }, 800, createjs.Ease.getPowInOut(2))
      .call(() => this.tweenComplete(circle));
  }

  tweenComplete(circle){
    this.stage.removeChild(circle);
  }
}

export default BackgroundManager;
