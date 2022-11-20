Internet and Networks:

Intro Page:
While you and everyone you know use the internet, the amount of people who understand the inner workings of the internet is only a small subset of its users. This module aims to start by teaching some basic principles of how you connect and traverse the internet. Once the learner knows more about how the internet operates, we will look at three sections involved in this process, and what security practices to implement for each. In the end, the learner will have a basic understanding of what needs protecting when they use the internet, and how to accomplish this.

Page 1: Basics on the internet
While we all know how we can connect to the internet, what actually happens “under the hood” remains ambiguous to most of us. For a simplified example of what's happening, let's look at what happens when you go to watch a youtube video from your home network. 
First, your request is defined as a message, which is broken up into tiny packets which will be the payload sent over the following connections. This request will use either the TCP or UDP protocol over the internet. TCP or Transmission Control Protocol is used when all of the received packets need to be 100% correct with no errors, such as in loading a webpage where you want to see 100% of the text on there. UDP or User Datagram Protocol is used when the request doesn’t need perfect accuracy in the data it receives back, such as video streaming or multiplayer video games. Despite this downside, the reason a request would use UDP over TCP is that it gets the requested data much faster than TCP does, due to the fact that it doesn’t need to check for complete correctness on the incoming data. In our example to watch a youtube video, our request uses the UDP protocol. Then, the device that you are accessing the internet connects to your Local Area Network, or LAN. This is the network that is hosted by your router, and it serves to connect all of your local devices together through itself. After this, your modem is responsible for connecting to a Wide Area Network, or WAN, which is operated by your Internet Service Provider, or ISP. In Canada, these are the companies such as Telus, Rogers, and Shaw. This first WAN is usually local to an area such as your neighbourhood, where it then connects to a bigger scope WAN, such as one for your whole city/town. This process may take a couple more steps, but eventually, you will reach the ISP’s servers. Here, the request for “youtube.com” in our example gets converted to the IP address of youtube’s servers, using the ISP’s Domain Name Server, or DNS. Once the IP address of the youtube server is acquired, your device is finally able to finish the request for data from youtube. Youtube’s server will send an “OK” message to your device in response, and the server sends the data back to your device in the same style of data packets. It follows the same route that your device took to reach its own servers, and eventually arrives at your device with the requested data.

Questions
Short answer question 1: Which protocol for transferring information on the internet allows for the fastest speed of getting the required data?
Answer: UDP
Multiple choice question 2: What does ISP stand for?
Answers: Internet Standard Protocol, Internet Safety Procedure, Internet Secure Protection, Internet Service Provider
True/False question 3: The modem is responsible for the connection to a WAN in your home network setup
Answer: True

Page 2: Home network vulnerabilities
As we learned in the last module, connecting to the internet starts with our home router and modem, which are responsible for establishing greater connections past our LAN. Subsequently, this leaves it as the first point of concern for enforcing your internet security. This module will look at four main points of concern for your home network.
Your router’s default password: After your ISP sets up your home network with your router, it uses the default password written on the back of it to allow devices to connect to its LAN. While great convenience for initial setup, your router password should not stay the default given by your ISP. A stranger with malicious intentions in your house would have instant access to your entire wifi network if they see the password written right on the back of the router, which is not very optimal. In addition, a savvy hacker could guess the password given by your ISP if you keep it the default, as they all tend to follow a similar pattern.
Router firmware updates: Some routers do not have the capability to automatically check and apply new updates to their firmware, which can spell trouble for your home network. Routers should be checked for new updates every 3-5 years. An update may be required to fix a security vulnerability that hackers can exploit if you never update the router’s firmware.
Change settings to promote better security: The default settings of a router can usually be optimized to create better security for your home network, with some changes such as:
Disabling Universal Plug-and-Play (UPnP) if you don’t use it, as it can facilitate malware to spread faster on your home network
Create strong passwords for both the wifi password and the password to manage your network settings
Change the default name of your wifi network, to not give hackers any free information about what kind of network you employ
Use the WPA3 security protocol on your router, as it is the most up-to-date choice for the security threats of today
Questions
Multiple choice question 1: If your router doesn’t automatically update its firmware, how often should you be updating it yourself?
Answers: Monthly, 1-2 years, 3-5 years, never
True/False question 2: Your router comes preconfigured with a strong password for both the wifi network and its router settings
Answer: False
Short Answer question 3: The latest security protocol for wireless security is WPA_?
Answer: 3

Page 3: Exploitation on Public Wifi
While securing our home network gives us peace of mind to browse the internet, we will find ourselves using public wifi when out in public. Public wifi is generally defined as wifi networks commonly offered by businesses or the like when you are on their premises, and they are for your convenience and usually free to use. The main caveat to this luxury is that their security is much less robust than our configured home networks. Here are a number of ways in which this can be evident:
The network may be unencrypted, as this can be off by default for routers. This can expose your personal web traffic to other people, simply if you are both on that same network
Can allow man-in-the-middle (MITM) attacks, which is essentially where the attacker gets in between your device and its connection to the internet, allowing them to get ahold of this web traffic
Fake public wifi’s can trick you into connecting to them when you are expecting it to just be free wifi, but it turns out to be a malicious ploy by attackers who can now steal your data using your connection to this wifi network
While these instances may make public wifi seem like a terrible decision to use at all, here are a number of solutions that greatly secure your browser when you choose to use public wifi:
HTTPS is the secure form of HTTP for websites, where your information to and from the website is encrypted. This makes it drastically harder for attackers to snoop on your web traffic. You can implement this simply by making sure the website addresses you visit over this public wifi start with HTTPS
A VPN is a Virtual Private Network that adds an extra level of security to your connection to the internet using a VPN tunnel to access a private network, even when using public wifi. This greatly limits what attackers can see in your connection
Avoid accessing personal information when on public networks, such as online banking. If you don’t request sensitive data from websites, it greatly limits what personal data an attacker can get if they are able to read your web traffic

Questions
Short answer question 1: ____ is a type of attack where the attacker gets in between your device and its communication to the internet, allowing them to access the data being transferred (4 letter acronym)
Answer: MITM
Short Answer question 2: What is the secure version of HTTP?
Answer: HTTPS
Multiple Choice question 3: What is not a way to limit MITM attacks?
Answers: Set up your computer's firewall, configure a VPN, access only websites utilizing HTTPS, and don’t access sensitive data over public connections

Page 4: Security for web browsing
By now, you know how to secure your home internet connection, as well as how to avoid the threats that may come when connecting to public wifi networks. While your connections are much more secure with these practices in mind, there are still a number of pitfalls to watch out for when simply browsing the internet. Lots of these can be avoided by implementing pre-emptive measures, starting with recognizing what dangers we will need to be aware of.
Threats to know of:
Some threats on the internet have easy technical solutions available to limit the effect of attacks. Some common problems and solutions we will look at are listed below:
Websites can track you between other websites you visit while on the internet. While some may just be using this data to gauge traffic on their site, it can also be used to harvest your data for services such as targeted advertising. To greatly hinder their ability to track you, there are two solutions you can implement:
Browser Extensions can add an extra level of security to your internet browsing. Two extensions that improve your safety are AdBlock and uBlock. Search how to install each of these for your specific browser, and your security browsing the web will be greatly improved.
Browser settings can be configured to better tailor to user security, which may not be switched on by default. Some examples in Chrome are to go to settings -> Privacy and security -> Send a “Do Not Track” request with your browsing traffic, and toggle this option to on. Another option on this page to limit what data websites can collect of you is to switch “Block third-party cookies”
Many identifying aspects are available through just your internet connection alone, mainly the IP address that your computer uses. The most sensitive information this can carry about yourself is a pretty decent approximate of your location, which for obvious reasons, isn’t something you want internet strangers to have access to. In addition, if someone with malicious intentions gets ahold of your IP address, they can attack you with what's called a DDoS attack. A DDoS (distributed denial-of-service attack) send a massive wave of traffic from many computers to the network of your IP address, where this immense amount of traffic will overwhelm the capabilities of your router, rendering your network offline. While both of these susceptibilities exist because your IP address is naturally exposed, there are ways to mask your IP and browse the internet more anonymously. Two solutions are:
Using a VPN whenever you browse the internet is a very easy way to mask your IP address to the greater internet.
Browser Isolation is the practice of removing the connection between your hardware and your internet browsing, so harmful activities don't impact the actual hardware of your device. This is commonly done using a virtual browser, such as one running on a virtual machine on your computer.

Questions
Short Answer question 1: Two easy techniques to secure your online presence include installing security oriented browser ____ and configuring browser ____ (separate them with a comma) Answer: extensions, settings
Short Answer question 2: “DDoS” stands for “distributed _____-of-service”
Answer: denial
True/False Choice question 3: A virtual machine can be used to remove the worry of your internet browsing affecting the hardware of your device
Answer: True