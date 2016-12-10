(function () {
    console.log("in SpeakHello.js");
    console.log("this = " + this);
    console.log("window = " + window);

    var speakWord = "Hello";

    this.helloSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    };
})();