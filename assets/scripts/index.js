var allFileNames = [];
var soundsPath = "Piano88KeySoundsCut/";

var sounds = {};
var r;

$(document).ready(function () {
    // Load in all the files and trim the first entry to get rid of the extra white space.
    allFileNames = $("#mp3Filenames")[0].innerText.split(",");
    allFileNames[0] = allFileNames[0].trim();

    // console.log(allFileNames);

    // Default no sharps or flats
    fileNames = allFileNames.filter(function (fileName) {
        if (fileName.trim().split(".")[0].length == 2) {
            return true;
        }
        else {
            return false;
        }
    })

    // Initial text
    $(".keyNoteReveal")[0].innerText = "♪♪♪";

    $("#sharpFlatCheckBox").on("click", function () {
        console.log($(this)[0].checked);
        if ($(this)[0].checked === true) {
            fileNames = allFileNames;
        }
        else {
            fileNames = allFileNames.filter(function (fileName) {
                if (fileName.trim().split(".")[0].length == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
        }

    });


    $("#replayButton").on("click", function () {
        if ($(this)[0].classList.contains("disabled") == false) {
            playSound(r);
        }
    });



    $("#revealButton").on("click", function () {
        var thisButton = $(this)[0];

        if (thisButton.innerText === "Start") {
            r = Math.floor(Math.random() * fileNames.length - 1) + 1;
            playSound(r);

            $(".keyNoteReveal")[0].innerText = "♪♪♪";

            this.innerText = "Reveal note";
            this.classList.remove("btn-success");
            this.classList.add("btn-warning");

            $("#replayButton")[0].classList.remove("disabled");
        }

        else if (thisButton.innerText === "Reveal note") {
            $(".keyNoteReveal")[0].innerText = fileNameToNote(fileNames[r]);

            this.innerText = "Start";
            this.classList.remove("btn-warning");
            this.classList.add("btn-success");

            $("#replayButton")[0].classList.add("disabled");

        }

        else {
            alert("Something went wrong. Contact the admin. Error code 1.");
        }

        // if ($(this)[0].classList.contains("disabled") == false) {
        //     playSound(r);
        // }
    });


});





function playSound(r) {
    s = new Audio(soundsPath + fileNames[r]);
    s.currentTime = 0.2;
    s.play();

    // if (sounds[fileNames[r]] == undefined) {
    //     sounds[fileNames[r]] = new Audio(soundsPath + fileNames[r]);
    // }
    // else {
    //     sounds[fileNames[r]].pause();
    // }
    // sounds[fileNames[r]].currentTime = 0.2;
    // sounds[fileNames[r]].play();
}



function fileNameToNote(name) {
    console.log(name);
    name = name.split(".")[0];
    if (name[1] == 'b') {
        flatName = name[0] + name[2] + "♭";

        sharpName = musicNotesToSharp[name[0]] + name[2] + "#";
        return sharpName + " or " + flatName;
    }
    else {
        return name;
    }

}


musicNotesToSharp = {
    "A": "G",
    "B": "A",
    "C": "B",
    "D": "C",
    "E": "D",
    "F": "E",
    "G": "F",
};