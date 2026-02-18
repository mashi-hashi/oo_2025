// This program draws two resistors on a canvas and lets us change their resistance values using sliders.
class Resistor3 {

    // This will store the total horizontal length of the resistor
    protected width: number;

    // This is the height of the resistor body (rectangle)
    protected height: number = 30;

    //added for this version...
    // electrical state (added)
    protected u: number = 0;   // voltage in volts
    protected i: number = 0;   // current in amps
    protected p: number = 0;   // power in watts

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


        //===========for this version additional labels==========
        this.g.fillText(this.p.toFixed(3) + " W", bodyX + 8, this.y + this.height - 6);
        this.g.fillText(this.u + " V, " + this.i.toFixed(3) + " A", this.startx + Math.round(this.width / 4), this.y - this.height / 3 - 2);


    }
    setR(r:number){
    this.r=r;
    this.draw();
    }
    getR():number{
        return this.r;
    }

    //=========methods for this version========
    // Set voltage and update electrical quantities
    setU(u: number) {
        this.u = u;
        this.calculateCurrent();
        this.calculatePower();
        this.draw();
    }

    getU(): number {
        return this.u;
    }

    // I = U / R (avoid division by zero)
    calculateCurrent() {
        if (this.r === 0) {
            this.i = 0;
        } else {
            this.i = this.u / this.r;
        }
    }

    // P = U * I
    calculatePower() {
        this.calculateCurrent();
        this.p = this.u * this.i;
    }
        
}