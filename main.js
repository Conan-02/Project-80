var display = "";

function addParagraph() {
    var para = [];


    for (var i = 1; i <= 6; i++) {
        para.push(document.getElementById("sentence" + i).value);

        console.log(para);
    }

    var array_length = para.length;

    console.log(array_length);

    para = para.join(". "); 

    display = display + "<p>" + para + "</p>";

    console.log(display);

    document.getElementById("para_area").innerHTML = display;

    document.getElementById("addPara").innerHTML = "Add Paragraph";
}