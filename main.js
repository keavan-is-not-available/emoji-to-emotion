Webcam.set({
    height: 350,
    width: 350,
    image_format: "png",
    png_quality: 90
})
camera1 = document.getElementById("camera1")
Webcam.attach("#camera1")
function taken() {
    Webcam.snap(function (data_uri) {
        document.getElementById("camera2").innerHTML = "<img src = " + data_uri + " id='img1' >"
    })
}
c = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gp7PL1SIC/model.json", modelLoaded)
function modelLoaded() {
    console.log("model has been loaded sucsessfuly")
}

function predict() {
    img = document.getElementById("img1")
    c.classify(img, gotResults)
}

function speech() {
    var api = window.speechSynthesis;
    d = "the first prediction is "+ p1  + " and second prediction is " + p2;
    af = new SpeechSynthesisUtterance(d);
    api.speak(af);
  }

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        document.getElementById("n1").innerHTML = results[0].label;
        document.getElementById("n2").innerHTML = results[1].label;

           p1 = results[0].label;
           p2 = results[1].label;
           speech()

        if (results[0].label == "happy") {
            document.getElementById("e1").innerHTML = "😀"
        }
        if (results[0].label == "sad") {
            document.getElementById("e1").innerHTML = "😭"
        }
        if (results[0].label == "angry") {
            document.getElementById("e1").innerHTML = "🤬"
        }


        if(results[1].label == "happy"){
            document.getElementById("e2").innerHTML = "😀"
        }
        if(results[1].label == "sad"){
            document.getElementById("e2").innerHTML = "😭"
        }
        if(results[1].label == "angry"){
            document.getElementById("e2").innerHTML = "🤬"
        }
    }
    }
