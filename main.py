import os
import sys
from playsound import playsound
import random


def main():
    files = os.listdir("Piano88KeySoundsCut")
    files = list( filter(lambda x: len(x.split(".")[0]) == 2, files) )

    print(len(files))

    path = os.path.dirname(os.path.abspath(__file__))
    folderPath = "Piano88KeySoundsCut"

    helpMessage = """\
\nWelcome! Here is how to use the program: (Note: all commands are case-insensitive for your convenience!)
\tq - exit the program
\th - print this help message again
\tr - replay the last key
\t<key guess> - your guess for the key. E.g. a2, e4. 
"""

    print(helpMessage)

    lastInput = ""
    r = random.randrange(0, len(files))

    while lastInput != "q":
        filePath = "{}{}{}{}{}".format(path, os.sep, folderPath, os.sep, files[r])
        playsound(filePath, False)

        lastInput = input("What would you like to do? ")
        lastInput = lastInput.lower()

        if(lastInput == "q"):
            print("Goodbye!")
            print()
            break
        elif(lastInput == "r"):
            continue
        elif(lastInput == "h"):
            print(helpMessage)
            print()
        else:
            print("\nYour guess was: " + lastInput)
            print("The key was: " + files[r].split(".")[0].lower())
            print()
            r = random.randrange(0, len(files))











main()
