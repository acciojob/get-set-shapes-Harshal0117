class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;   // Private variable for width
        this._height = height; // Private variable for height
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate the area
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side must be a positive integer.");
        }
        super(side, side); // Call the parent constructor with width and height as side
    }

    // Method to calculate the perimeter
    getPerimeter() {
        return this._width * 4; // Since width and height are the same in a square
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;