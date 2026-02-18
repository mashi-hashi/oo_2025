// This class represents one resistor that can draw itself on the screen
//A resistor is a two-terminal, passive electronic component that restricts or limits the 
// flow of electrical current in a circuit.
class Resistor {

    // This variable will store the resistance value (for example: 110 ohms)
    protected r: number;

    // This variable will store the drawing tool (canvas context)
    // We use this tool to draw shapes and text on the canvas
    protected g;

    // The constructor runs automatically when we create a new Resistor
    // It receives:
    // 1. r → the resistance value
    // 2. g → the canvas drawing tool
    constructor(r: number, g: CanvasRenderingContext2D) {

        // Save the resistance value inside this object
        // "this.r" belongs to this specific resistor
        this.r = r;

        // Save the drawing tool inside this object
        // Now this resistor knows how to draw itself
        this.g = g;

        // Immediately draw the resistor after it is created
        this.draw();
    }

    // This method draws the resistor on the canvas
    draw() {

        // Start drawing a new shape
        this.g.beginPath();

        // Draw a rectangle at position (50,10)
        // Width = 100 pixels, Height = 30 pixels
        // This rectangle represents the resistor body
        this.g.rect(50, 10, 100, 30);

        // Actually show the rectangle on the screen
        this.g.stroke();

        // Write the resistance value inside the rectangle
        // "" + this.r converts the number into text
        this.g.fillText("" + this.r, 80, 28);
    }
}