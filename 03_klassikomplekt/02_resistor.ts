// This class draws a resistor symbol on a canvas
class Resistor1 {

    // This will store the total horizontal length of the resistor
    protected width: number;

    // This is the height of the resistor body (rectangle)
    protected height: number = 30;

    // The constructor runs when we create a new resistor
    // r      → resistance value (for example 120 ohms)
    // g      → the canvas drawing tool (used to draw on screen)
    // startx → x-position where the resistor begins .x increases → to the right
    // endx   → x-position where the resistor ends
    // y      → vertical position (how far down on the screen). y increases ↓ downward
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

        // -----------------------------
        // 1️⃣ Draw the LEFT wire
        // -----------------------------
        // beginPath() starts a new drawing path
        this.g.beginPath();

        // Move the invisible drawing pen to the starting point of the resistor.
        // Place the pen at (startx, y).
        // Example: (250, 100) means:
        // 250 pixels from the left,
        // 100 pixels down from the top.
        this.g.moveTo(this.startx, this.y);

        // Draw a short horizontal line (left wire)
        //this.startx → starting x position
        //this.width / 4 → move 1/4 of the total width
        //this.y → same vertical level
        //this.g.lineTo(275, 100);
        this.g.lineTo(this.startx + this.width / 4, this.y);

        // Actually show the line
        //(250,100) -------------- (275,100)
        this.g.stroke();

        // -----------------------------
        // 2️⃣ Draw the resistor BODY
        // -----------------------------
        // We calculate the rectangle position
        //x: The x-axis coordinate of the top-left corner of the rectangle.
        //y: The y-axis coordinate of the top-left corner of the rectangle.
        //width: The width of the rectangle in pixels.
        //height: The height of the rectangle in pixels. 

        const bodyX = this.startx + this.width / 4;     // where rectangle starts
        const bodyY = this.y - this.height / 2;         // center vertically
        const bodyW = this.width / 2;                   // width of rectangle
        const bodyH = this.height;                      // height of rectangle

        // strokeRect draws rectangle directly (no extra lines)
        //this.g.strokeRect(x, y, width, height)
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
        //275 + 8 = 283, Start writing text 8 pixels to the right of the rectangle’s left edge.
        //100 + 5 = 105, 100 + 5 = 105
        this.g.fillText(this.r + " Ω", bodyX + 8, this.y + 5);
    }
}