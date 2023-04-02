
# portfolio website based of windows11

Chat Nexus is a web-based chat application that allows users to communicate with each other in real-time.
  <br>
  <br>

## 🚀 Features

-💬 Real-time messaging <br>
- 🔐 User Authentication (Register / Login) <br>
- 💬 Real-time messaging using Socket.io <br>
- 🗑️ Delete account <br>
- 🗑️ Delete chats <br>
- 🚩 Report users <br>
- 📥 Download profile pictures <br>
- 📋 Personalised profile tabs <br>
- 🔍 Search usernames <br> 
- 🎤 Voice recognition for chat messages <br>
- 😀 Send emojis <br> 
- 📜Message history <br>

<br>
<br>

## 🛠️ Technologies

Chat Nexus was built using the following technologies:

- **M**ongoDB: A document-based NoSQL database used to store chat history and user data.
- **E**xpress.js: A web application framework for Node.js used to build the server-side API.
- **R**eact.js: A JavaScript library used to build the user interface.
- **N**ode.js: A JavaScript runtime environment used to build the server-side application.
- **socket.io**: A JavaScript library used for real-time, bidirectional communication between the client and server.

<br>
<br>


## 🔗 Resource Credits

The following resources were used in the creation of Chat Nexus:

- [icons8 bubblegum theme](https://icons8.com/illustrations/style--bubble-gum) <br>
  SVGs and Icons used throughout the app the logo svg all were taken from icons8 bubblegum theme.
  
  ![Screenshot 2023-03-01 232456](https://user-images.githubusercontent.com/91087103/222222424-ef28ebbe-57ab-41d4-bbdf-3a78d8015a4c.png)

- [Dribble login page](https://dribbble.com/shots/5035570-Login-page) <br>
  Inspiration for the login and signup page's design and user interface.
  
  ![Screenshot 2023-01-25 202739](https://user-images.githubusercontent.com/91087103/222221618-39397bba-040e-45a0-b474-56d6eadc322b.png)

- [annyang: ^2.6.1](https://www.npmjs.com/package/annyang) <br>
  This package is used for voice recognition in the Chat Nexus website. The version used in this project is ^2.6.1.
  
  ![image](https://user-images.githubusercontent.com/91087103/222226483-d31775ad-9fa5-474c-bc3c-1cdc5152b1a8.png)

- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react) <br>
  This package is used for the emoji picker feature in the Chat Nexus website. The version used in this project is ^3.6.5.
  
  ![image](https://user-images.githubusercontent.com/91087103/222227277-5c26ab95-e172-4961-9dfb-9235ed07fb42.png)






<br>
<br>

## 🛠️ Installation, Usage, and Configuration

To install, use, and configure Chat Nexus, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/chat-nexus.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open the app in your web browser: `http://localhost:3000`
5. Sign up for a new account or log in with an existing account.
6. Join a chat room or create a new one.
7. Start sending and receiving messages in real-time.

Chat Nexus can be configured using environment variables. The following variables can be set:

- `PORT`: The port number to use for the server. Default is `3000`.
- `MONGODB_URI`: The URI for the MongoDB database. Default is `mongodb://localhost/chat-nexus`.
<br>
<br>

## 💻 Usage through Website Link

Chat Nexus can also be accessed through the following website link: https://chatnexus.tech/

.



## ❓ FAQs

Q: how many accounts chat nexus can handle? <br>
A: at present , as chat nexus is running on free database pack it can only handle about 7-10 accounts and 300 connections.
but with paid database pack it will have no limits and will send and receive messages even faster


Q: Does reporting users actually work? <br>
A: yes, there is a whole seperate report model which sends reporter details,reported details and reason to database.

<br>

Q: Does delete account permanently delete account? <br>
A: yes, delete account permanently deletes the user from collection of users in the database with the chats.

<br>

Q: why i am not able to login even after registering? <br>
A: username,email and password are case sensitive so it is possible you are registered but entering the details incorrectly

<br>

Q: are all chats saved? <br>
A: Yes, Chat Nexus uses secure user authentication and stores chat history in a secure database.

<br>
Q: how much did it take to complete  chat nexus? <br>
A: it took around 2 months to complete chat nexus


<br>

## 📞 feedback

For feedback or review for Chat Nexus, review at [feedback form](https://form.typeform.com/to/yrFOxBqF)







<br>
<br>





MIT License

Copyright (c) 2023 Pradeep Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

