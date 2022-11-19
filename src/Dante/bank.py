def breakIntoBank():
    print("I wonder what the bank account password could be?")

    attempts = 0
    while attempts != 3:
        password = input("Enter master account password: ")
        if password == "YouHadMeAtPassword":
            print(
                "Correct Password! Here is your flag!\ncpscCTF{4lw4y5_ch3ck_50urc3_c0d3}"
            )
            break
        else:
            print("Incorrect Password! Please try again.\n")
        attempts += 1
    if attempts == 3:
        print("Account locked! Please try again in 5 minutes!")


if __name__ == "__main__":
    breakIntoBank()
