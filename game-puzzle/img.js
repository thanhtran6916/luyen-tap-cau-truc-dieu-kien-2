class Img {
    index;
    width;
    height;
    arr;
    constructor(width, height,arr, index) {
        this.arr = arr;
        this.index = index;
        this.width = width;
        this.height = height;
    }

    displayImg() {
        return "<img src=" + this.arr[this.index] + " alt=\"\" width=" + this.width + " height=" + this.height + ">";
    }

    setSrc(index) {
        this.index = index;
    }
}