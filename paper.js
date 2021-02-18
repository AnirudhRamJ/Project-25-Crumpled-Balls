class Paper {
    constructor(x, y, r) {
        var options = {
            restitution: 0.1,
            density: 1.2,
            friction: 0.3
        }
        this.body = Bodies.circle(x, y, (r/2)-10, options);
        this.image = loadImage("paper.png");
        this.r = r;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}