// This class draws a resistor symbol on a canvas
var Resistor1 = /** @class */ (function () {
    // The constructor runs when we create a new resistor
    // r      → resistance value (for example 120 ohms)
    // g      → the canvas drawing tool (used to draw on screen)
    // startx → x-position where the resistor begins
    // endx   → x-position where the resistor ends
    // y      → vertical position (how far down on the screen)
    function Resistor1(r, g, startx, endx, y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        // This is the height of the resistor body (rectangle)
        this.height = 30;
        // Calculate total width from start to end
        // This helps us divide the resistor into parts
        this.width = this.endx - this.startx;
        // Draw the resistor immediately after creating it
        this.draw();
    }
    // This method draws the resistor symbol
    Resistor1.prototype.draw = function () {
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
        var bodyX = this.startx + this.width / 4; // where rectangle starts
        var bodyY = this.y - this.height / 2; // center vertically
        var bodyW = this.width / 2; // width of rectangle
        var bodyH = this.height; // height of rectangle
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
    };
    return Resistor1;
}());
