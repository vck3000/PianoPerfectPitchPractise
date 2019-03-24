import aifc
import os


def pruneFile(fileName):
    with aifc.open("Piano88KeySounds/{}".format(fileName)) as s:
        # print(s.getcompname())
        # print(s.getframerate())
        # print(s.getnframes())

        numOfSeconds = 4

        data = s.readframes(numOfSeconds * s.getframerate())

        # print(data)

        with aifc.open("Piano88KeySoundsCut/{}".format(fileName), mode='wb') as s2:
            s2.setparams(s.getparams())
            s2.writeframes(data)
            print("Pruned file: " + fileName)


def pruneAll(fileNames):
    for f in fileNames:
        if f[-5:] == ".aiff":
            pruneFile(f)
        else:
            print("Skipping file: " + f)
            # print(f[-5:])


def shortenNames(fileNames, path):
    # for f in fileNames:
    #     splitted = f.split(".")
    #     print(splitted)
    #     os.rename(path + "/" + f, path + "/" + splitted[2])

    for f in fileNames:
        os.rename(path + "/" + f, path + "/" + f + ".aiff")


def main():
    files = os.listdir("Piano88KeySoundsCut")
    # pruneAll(files)

    # shortenNames(files, "Piano88KeySoundsCut")


main()
