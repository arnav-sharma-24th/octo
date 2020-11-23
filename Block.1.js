class block {
  constructor(x, y, width, height) {
    var options = {
      _isStatic: false,
      get isStatic() {
        return this._isStatic;
      },
      set isStatic(value) {
        this._isStatic = value;
      },
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    
    push();
    
    
    translate(this.body.position.x, this.body.position.y);
   
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    
    
    pop();
  }
}

  


