
import vec2 from './vec2';

// Sprite Class Definition

export class Sprite {
    constructor (url, pos, size, img, speed, frames, dir, once, wardrobeUrl) {

    // Sprite Row Specs
    this.spritePos = pos;
    this.size = size;

    // Sprite Change Speed
    this.speed = typeof speed === 'number' ? speed : 0; // Frames / sec to animate at
    
    // Img
    this.url = url;
    this.img = img;

    // Wardrobe
    this.wardrobeUrl = wardrobeUrl;
    this.wardrobeImg = null;

    // Frames
    this.frames = frames;
    this.frameIndex = 0;
    
    this.dir = dir || 'horizontal';
    this.once = once;

    // Update function (animation)
    this.update = (dt) => {
        if (!this.frameIndex)
            this.frameIndex = 0.1;

        this.frameIndex += this.speed*dt;
    };

    // Generic rendering function
    this.render = (ctx, location) => {

        let frame = 0;

        // Calculate the sprite frame
        if(this.speed > 0) {
            const max = this.frames.length;
            const idx = Math.floor(this.frameIndex);
            frame = this.frames[idx % max];

            if(this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }


        // Update the position of the element
    
        let x = this.spritePos[0];
        let y = this.spritePos[1];

        if(this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }
        console.log("Player: ", location)

        ctx.drawImage(this.img,
                    x, y,
                    this.size[0], this.size[1],
                    location[0], location[1],
                    this.size[0], this.size[1],
                    );

        if (this.wardrobeImg) {
            ctx.drawImage(this.wardrobeImg,
                x, y,
                this.size[0], this.size[1],
                location[0], location[1],
                this.size[0], this.size[1],
                );
        }
    }
}}
