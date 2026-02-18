// This program draws two resistors on a canvas and lets us change their resistance values using sliders.
class Resistor2 {

    // This will store the total horizontal length of the resistor
    protected width: number;

    // This is the height of the resistor body (rectangle)
    protected height: number = 30;

    // The constructor runs when we create a new resistor
    // r      → resistance value (for example 120 ohms)
    // g      → the canvas drawing tool (used to draw on screen)
    // startx → x-position where the resistor begins
    // endx   → x-position where the resistor ends
    // y      → vertical position (how far down on the screen)
    constructor(
        protected r: number,
        protected g: CanvasRenderingContext2D,
        protected startx: number,
        protected endx: number,
        protected y: number
    ) {

        // Calculate total width from start to end
        // This helps us divide the resistor into parts
        this.width = this.endx - this.startx;

        // Draw the resistor immediately after creating it
        this.draw();
    }

    // This method draws the resistor symbol
    draw() {

        this.g.clearRect(this.startx, this.y-this.height/2, this.width, this.height);
        // -----------------------------
        // 1️⃣ Draw the LEFT wire
        // -----------------------------
        // beginPath() starts a new drawing path
        this.g.beginPath();

        // Move invisible pen to starting position
        this.g.moveTo(this.startx, this.y);

        // Draw a short horizontal line (left wire)
        this.g.lineTo(this.startx + this.width / 4, this.y);

        // Actually show the line
        this.g.stroke();

        // -----------------------------
        // 2️⃣ Draw the resistor BODY
        // -----------------------------
        // We calculate the rectangle position
        const bodyX = this.startx + this.width / 4;     // where rectangle starts
        const bodyY = this.y - this.height / 2;         // center vertically
        const bodyW = this.width / 2;                   // width of rectangle
        const bodyH = this.height;                      // height of rectangle

        // strokeRect draws rectangle directly (no extra lines)
        this.g.strokeRect(bodyX, bodyY, bodyW, bodyH);

        // -----------------------------
        // 3️⃣ Draw the RIGHT wire
        // -----------------------------
        this.g.beginPath();

        // Start from end of rectangle
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);

        // Draw line to final end position
        this.g.lineTo(this.endx, this.y);

        this.g.stroke();

        // -----------------------------
        // 4️⃣ Draw the resistance label
        // -----------------------------
        // Write resistance value inside the rectangle
        this.g.fillText(this.r + " Ω", bodyX + 8, this.y + 5);


    }
    // Change this resistor's resistance value and redraw it
    setR(r:number){
     // Save NEW resistance value INSIDE this resistor 
        this.r=r;
        this.draw(); // Redraw this resistor with the new value showing
        // Canvas updates to show "450 Ω" inside the box
    }
    // Ask this resistor "what is your current resistance?"
    getR():number{
        return this.r; // Give back this resistor's resistance value
        // Example: Returns 450 so slider can match it
    }
        
}

//🎥 Scene 1: Page loads → TS creates r1=120Ω, r2=140Ω on canvas
//🎥 Scene 2: User drags slider → HTML onRange1() wakes up 
//🎥 Scene 3: HTML says "r1.setR(450)!" → TS redraws canvas with 450Ω
//🎥 Scene 4: HTML updates number display "450 Ω"
