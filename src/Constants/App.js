import logo from "../logo.svg";
import { wordlists, hashcat, hashes, crackingHashes } from "../Ejaaz/wordlists";
import {
	whatIsAndWhyWeUseReverseEngineering,
	howToProtectSourceCode,
	introToAssembly,
	getStartedInformation,
} from "../Dante/lessonContent";

export const CTF_QUESTIONS = {
	Ejaaz: {
		question1: {
			index: 1,
			question:
				"Use a dictionary attack to crack 7924b792b1fa2078f3c0ed3ffeeeb65ed05455f9dfd08bb0bbc08277554d3537ffc2444f3f0e3f2f48a2d97536a2ff46366b97fc6b247e25fab0e692310a9d18. We believe this was a commonly used password in 2020.",
			answer: "sunshine",
		},
		question2: {
			index: 2,
			question:
				"Use the following words: (hello, world, project, there, giant, goodbye, group, hotel, california, milestone) and a combination attack to crack the following hash: BAC22DF8528D9D9A652FF11B16243CA7",
			answer: "groupproject",
		},
		question3: {
			index: 3,
			question:
				"CHALLENGE: Crack the following hash: a8640eeef5b7f3847dd9f3b0b78e904e for user Dave if we know his password has the following format: Starts with either an uppercase letter or number, followed by first name, followed by a 4 digit number starting with 3, and followed by any 4 letters in alternating case starting with lowercase.",
			answer: "EDave3579oKsB",
		},
	},
	Dante: {
		question1: {
			index: 1,
			question:
				"Find the flag somewhere in this file (The flag looks like this cpscCTF{text here}). https://github.com/EjaazLakhani1/329-Group-Project/blob/main/src/Dante/bank.py",
			answer: "cpscCTF{4lw4y5_ch3ck_50urc3_c0d3}",
		},
		question2: {
			index: 2,
			question:
				"Download this file and find the flag somewhere in this file (The flag looks like this cpscCTF{text here}). https://github.com/EjaazLakhani1/329-Group-Project/blob/main/src/Dante/password.py",
			answer: "cpscCTF{d3c0d1n6_1s_fun}",
		},
		question3: {
			index: 3,
			question:
				"Download this file and find the flag somewhere in this file (Once you find the text, put cpscCTF{} around it and submit). https://github.com/EjaazLakhani1/329-Group-Project/blob/main/src/Dante/vault",
			answer: "cpscCTF{f4ncy_pa5sword}",
		},
	},
};

export const SECTION_CONTENT = {
	Ejaaz: {
		id: 1,
		contents: [wordlists, hashcat, hashes, crackingHashes],
	},
	Habiba: {
		id: 2,
		contents: [wordlists, wordlists, wordlists, wordlists],
	},
	Colton: {
		id: 3,
		contents: [wordlists, wordlists, wordlists, wordlists],
	},
	Dante: {
		id: 4,
		contents: [
			getStartedInformation,
			whatIsAndWhyWeUseReverseEngineering,
			howToProtectSourceCode,
			introToAssembly,
		],
	},
	Auric: {
		id: 5,
		contents: [wordlists, wordlists, wordlists, wordlists],
	},
};

export const LESSON_QUESTIONS = {
	Ejaaz: {
		Wordlists: {
			question1: {
				index: 1,
				question:
					"What is the EXACT number of words in the rockyou.txt file (comma seperated)?",
				answer: "14,341,564",
				error: false,
			},
			question2: {
				index: 2,
				question:
					"Which wordlist would be best for cracking a hash for a dutch password. Include file extension in your answer (filename.txt)",
				answer: "dutch_passwordlist.txt",
				error: false,
			},
		},
		"What are Hashes": {
			question1: {
				index: 1,
				question:
					"What is the type if the following hash AK1AAECAwQFBgcICRARNGqgeC3is8gv2xWWRony9NJnDgE=",
				answer: "FortiGate (FortiOS)",
			},
			question2: {
				index: 2,
				question:
					"What attack mode would you use for the following hash: 012cb9b334ec1aeb71a9c8ce85586082467f7eb6",
				answer: "6000",
			},
		},
		"Cracking Hashes": {
			question1: {
				index: 1,
				question:
					"What is the command you would run for a dictionary attack using wordlist rockyou.txt and a md5 hash stored in hash.txt",
				answer: "hashcat -a 0 -m 0 hash.txt rockyou.txt",
			},
			question2: {
				index: 2,
				question:
					"What is the command you would run for a combination attack where your fist wordlist is wordlist1.txt, your second wordlist is words2.txt, and a SHA1 hash stored in hash.txt",
				answer: "hashcat -a 1 -m 100 hash.txt wordlist1.txt words2.txt",
			},
			question3: {
				index: 3,
				question:
					"What is the command you would run for a mask attack on a md5 hash in hash.txt, where the users password is a 5 letter word where the first and last character is uppercase, followed by a 4 digit number ending in 0, and finally a special character.",
				answer: "hashcat -a 3 -m 0 hash.txt ?u?l?l?l?u?d?d?d0?s",
			},
		},
	},
	Habiba: {},
	Dante: {
		"Tools & Terminal Commands & Information to get started": {
			question1: {
				index: 1,
				question:
					"What is the command to remove read permissions from the file helloWorld.txt? (use the symbolic method, like the example above)",
				answer: "chmod -r helloWorld.txt",
			},
			question2: {
				index: 2,
				question:
					"What is the command to search for a string in test.txt that is at least 6 characters long? (Answer doesn't include -n)",
				answer: "strings -6 test.txt",
			},
		},
		"Intro to assembly": {
			question1: {
				index: 1,
				question:
					"What value does the register ebx hold in the code in figure 1 above:",
				answer: "8",
			},
			question2: {
				index: 2,
				question:
					"What value does the register eax hold in the code in figure 2 above:",
				answer: "3",
			},
		},
	},
	Colton: {},
	Auric: {},
};

export const PATHS = {
	Ejaaz: {
		id: 1,
		topic: "password-cracking",
		subtopics: [
			"wordlists",
			"intro-to-hashcat",
			"what-are-hashes",
			"cracking-hashes",
		],
	},
	Habiba: {
		id: 2,
		topic: "social-engineering",
		subtopics: [
			"wordlists",
			"intro-to-hashcat",
			"what-are-hashes",
			"cracking-hashes",
		],
	},
	Dante: {
		id: 3,
		topic: "reverse-engineering",
		subtopics: [
			"ToolsTerminalCommandsInformation-to-get-started",
			"What-is-and-why-use-reverse-engineering",
			"How-to-protect-source-code-against-attacks-and-what-could-happen-if-you-don't-protect-it",
			"Intro-to-assembly",
		],
	},
	Colton: {
		id: 4,
		topic: "how-to-protect-yourself-on-the-internet",
		subtopics: [
			"wordlists",
			"intro-to-hashcat",
			"what-are-hashes",
			"cracking-hashes",
		],
	},
	Auric: {
		id: 5,
		topic: "web-exploits",
		subtopics: [
			"wordlists",
			"intro-to-hashcat",
			"what-are-hashes",
			"cracking-hashes",
		],
	},
};

export const SECTIONS = {
	Ejaaz: {
		id: 1,
		topic: "Password Cracking",
		author: "Ejaaz",
		image: logo,
		subtopics: [
			"Wordlists",
			"Intro to Hashcat",
			"What are Hashes",
			"Cracking Hashes",
		],
		paths: PATHS.Ejaaz,
		content: SECTION_CONTENT.Ejaaz,
	},
	Habiba: {
		id: 2,
		topic: "Social Engineering",
		author: "Habiba",
		image: logo,
		subtopics: [
			"Wordlists",
			"Intro to Hashcat",
			"What are Hashes",
			"Cracking Hashes",
		],
		paths: PATHS.Habiba,
		content: SECTION_CONTENT.Habiba,
	},
	Dante: {
		id: 3,
		topic: "Reverse Engineering",
		author: "Dante",
		image: logo,
		subtopics: [
			"Tools & Terminal Commands & Information to get started",
			"What is and why use reverse engineering",
			"How to protect source code against attacks and what could happen if you don't protect it",
			"Intro to assembly",
		],
		paths: PATHS.Dante,
		content: SECTION_CONTENT.Dante,
	},
	Colton: {
		id: 4,
		topic: "How to Protect Yourself on the Internet",
		author: "Colton",
		image: logo,
		subtopics: [
			"Wordlists",
			"Intro to Hashcat",
			"What are Hashes",
			"Cracking Hashes",
		],
		paths: PATHS.Colton,
		content: SECTION_CONTENT.Colton,
	},
	Auric: {
		id: 5,
		topic: "Web Exploits",
		author: "Auric",
		image: logo,
		subtopics: [
			"Wordlists",
			"Intro to Hashcat",
			"What are Hashes",
			"Cracking Hashes",
		],
		paths: PATHS.Auric,
		content: SECTION_CONTENT.Auric,
	},
};
