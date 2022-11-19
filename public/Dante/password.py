import random
import string

secretHash = "lyblLCO{m3l0m1w6_1b_odw}"
alphabetSize = 26
shift = 9
lettersAndSpecial = string.ascii_letters + string.digits + string.punctuation


def decode(hashToDecode):
    decoded = ""
    for symbol in hashToDecode:
        if symbol.isupper():
            decoded += chr((ord(symbol) - ord("A") - shift) % alphabetSize + ord("A"))
        elif symbol.islower():
            decoded += chr((ord(symbol) - ord("a") - shift) % alphabetSize + ord("a"))
        else:
            decoded += symbol
    print(decoded)


def encode(message):
    encoded = ""
    for symbol in message:
        if symbol.isupper():
            encoded += chr((ord(symbol) - ord("A") + shift) % alphabetSize + ord("A"))
        elif symbol.islower():
            encoded += chr((ord(symbol) - ord("a") + shift) % alphabetSize + ord("a"))
        else:
            encoded += symbol
    print(encoded)


def makeRandomPassword():
    passwordLength = int(input("How long would you like your password to be? "))
    if passwordLength < 8:
        print("Please choose a longer password to stay safe!")
    else:
        password = random.sample(lettersAndSpecial, passwordLength)
        password = "".join(password)
        print(f"Your random password: {password}")


if __name__ == "__main__":
    makeRandomPassword()
