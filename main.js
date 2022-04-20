Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    image_quality: 90
});
webcam = document.getElementById("camera");
Webcam.attach( '#camera' );

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version, "ml5.version");
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LeL-I6WMj/model.json",modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function identify() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult)
}

Prediction_1 = results[0].label;

function speak(){
    var synth = window.speechSynthesis;
    var speak_1 = "This sign means" + Prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_1);
    synth.speak(utterThis);
}

function gotResult(error, results) {
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    speak();

    if(results[0].label == "amazing")
    {
        document.getElementById("label").innerHTML = "amazing";
        console.log("amazing");
    }
    if(results[0].label == "best")
    {
        document.getElementById("label").innerHTML = "best";
        console.log("best");
    }
    if(results[0].label == "victory")
    {
        document.getElementById("label").innerHTML = "victory";
        console.log("victory");
    }
}
}