var index = 0;

function changecolor() {
    var color = ["red", "blue", "orange", "yellow", "green", "purple"];
    document.getElementsByTagName("body")[0].style.background = color[index++];
    
    if (index > colors.length - 1)
        index = 0;
}