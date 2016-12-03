/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === "j") {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();