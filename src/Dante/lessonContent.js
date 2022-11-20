export const whatIsAndWhyWeUseReverseEngineering =
	"Reverse engineering is the process of dismantling an application to see how it works, and breaking it down to see its internal components. Reverse engineering is mostly used to improve functionality of an application, analyze the application for viruses and malware, and possibly recreate and fix an application that does not work anymore. One of the main reasons to reverse engineer an application is to discover any vulnerabilities. This is to ensure application safety and make sure all the users information or anything important related to users and the application stays safe. If a company deploys an application with any vulnerabilities this can put the application and other users who use the application at risk. Hackers can use reverse engineering attacks to take apart programs and make an exact copy but add malicious code into it. This would allow the hackers to take some valuable information from users. If the company doesn't reverse engineer their application, there might be some sensitive information about APIs, passwords and databases that hackers could easily access, which would also allow them to steal information from the application.";
export const howToProtectSourceCode =
	"One of the most popular ways to make an applications source code more secure against these reverse engineering attacks is to use code obfuscation. Code obfuscation is a programming technique where you disguise parts of the source code. This can change the programs code and functions, but the output will never change. This will allow you to change your programs code to make it more difficult for hackers to understand it. If a company doesn't protect the source code of their application, hackers can attack the application and might have access to plenty of sensitive information about users or possibly damage the application. If the hacker somehow gets access to some API by reverse engineering for example, depending on what the API sends and receives, the hackers could steal credit card information, full names, emails, passwords, location, and plenty more sensitive data. Depending on the stolen information, the hacker can sell a users information, commit identity theft, post the information online for everyone to see, apply for credit cards and loans using a users stolen information and they can still do plenty more terrible things using stolen information.";
export const introToAssembly =
	"Assembly is a low-level programming language that is used to communicate directly with the computers hardware. Assembly language is designed to be readable for humans, unlike binary. Registers are the most important part of any assembly language because they are used to store data without having to access the memory, but there are only a handful of registers available to use. If you would like to learn more about registers here is a useful link, https://cs.brown.edu/courses/csci0330/docs/guides/x64_cheatsheet.pdf, but you don't have to worry about them too much for this section.\n\nHere are a couple important instructions that you will see a lot in assembly language:\n\n    mov dest, src -- Copy src into dest -- Example: mov eax, 10 (eax now holds the value of 10)\n\n    add dest, src -- this operation does dest = dest + src -- Example: add eax,2 (if eax = 2, then eax = 2 + 2, so eax will hold 4 after the execution of this line)\n\n    sub dest, src -- this operation does dest = dest - src -- Example: sub eax,2 (if eax = 4, then eax = 4 - 2, so eax will hold 2 after the execution of this line)\n\nFigure 1 for question 1:\nmov ebx, 6\nmov ecx, 4\nadd ebx, ecx\nmov eax, 2\nsub ebx, eax\n\nMore important instructions in assembly are conditionals and jumps, which act as if/elif/else statements and help you jump around the code like calling a function. Here is a cheat sheet with all the conditionals and jumps: https://www.bencode.net/blob/nasmcheatsheet.pdf. Here is a little example:\n\ncmp x,y\njump somewhere when a certain condition is met\n\nFigure 2 for question 2:\n    mov ebx, 4\n    mov ecx, 1\n    cmp ebx, ecx\n    jg L2\nL1:\n    add ebx, ecx\n    mov eax, ebx\nL2:\n    sub ebx, ecx\n    mov eax, ebx ";
export const getStartedInformation =
	"cat [options] <filename> - Displays the contents of the file.\n\nchmod [options] <permissions> <filename> - Changes the permissions of a certain file.\nFor example, chmod +x gives Execute permissions to the file specified. Here is a useful resource to help you understand chmod https://linuxize.com/post/chmod-command-in-linux/.\n\nstrings [options] <filename> - Displays any string that can be read from a file.\nUseful resource to see all the flag options for strings https://www.ibm.com/docs/en/aix/7.2?topic=s-strings-command.\n\n./filename - This will execute any executable file if you have permission.\n\nCutter: Cutter is a very useful tool for reverse engineering, it comes with plenty of helpful tools inside of the app to help with your reverse engineering experience. You can download the most recent version of Cutter for your system from this website https://github.com/rizinorg/cutter/releases. You will need this for the 3rd CTF challenge. Once you have downloaded it, open it up with any file, Cutter is much better used with an executable file or any file that uses a programming language like C or python and have a look around. Everything is labeled in Cutter, so it is easy to navigate around. If you'd like to learn more about Cutter you can check the documentation here https://cutter.re/docs/user-docs.html.";