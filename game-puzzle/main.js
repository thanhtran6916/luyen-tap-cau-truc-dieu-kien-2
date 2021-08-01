let imgArrFirst = [
    "img/funny-cat1_part1x1.jpg",
    "img/monkey_part1x1.jpg",
    "img/panda_swap_part1x1.jpg"
];

let imgArrSecond = [
    "img/funny-cat1_part2x1.jpg",
    "img/monkey_part2x1.jpg",
    "img/panda_swap_part2x1.jpg"
];

let imgArrThree = [
    "img/funny-cat1_part3x1.jpg",
    "img/monkey_part3x1.jpg",
    "img/panda_swap_part3x1.jpg"
];

let imgArrFour = [
    "img/funny-cat1_part4x1.jpg",
    "img/monkey_part4x1.jpg",
    "img/panda_swap_part4x1.jpg"
];


let imgFirst = new Img(600, 150, imgArrFirst, Math.floor(Math.random()*3));
document.getElementById("one").innerHTML = imgFirst.displayImg();

let imgSecond = new Img(600, 150, imgArrSecond, Math.floor(Math.random()*3));
document.getElementById("two").innerHTML = imgSecond.displayImg();

let imgThree = new Img(600, 150, imgArrThree, Math.floor(Math.random()*3));
document.getElementById("three").innerHTML = imgThree.displayImg();

let imgFour = new Img(600, 150, imgArrFour, Math.floor(Math.random()*3));
document.getElementById("four").innerHTML = imgFour.displayImg();

function changeImg(display, img) {
    let index = Math.floor(Math.random()*3);
    img.setSrc(index);
    document.getElementById(display).innerHTML = img.displayImg();
    if (imgFirst.index == imgSecond.index && imgFirst.index == imgThree.index && imgFirst.index == imgFour.index) {
        alert("Win");
    }
}










