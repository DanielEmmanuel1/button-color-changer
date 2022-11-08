let index = 0;

function changeColors() {
    let colors = ["yellow", "red", "green", "indigo", "blue"];
    document.getElementsByTagName("body")[0,4].style.background = colors[index++];

    if (index > colors.length - 1);
    index = 0;
}
