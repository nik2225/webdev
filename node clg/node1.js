const http = require('http');

const hostname = '127.0.0.1';
const port = 3002; // Change this to a different port

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Outfit;
    color: #a6a5a5;
}

.gradcolor-home
{
    background-image: linear-gradient(white,rgb(181, 211, 195));

}
.home-head
{
    font-size: 3rem;
    text-align: center;
    color: rgb(50, 50, 50);
    padding: 0.8rem;
}

nav
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem;
    font-size: 1.2rem;
}

nav a
{
    color: black;
    background-color: rgb(192, 212, 201);
    padding: 0.6rem;
    border-radius: 1rem;
    width: 12rem;
    text-align: center;
    text-decoration: none;
}

.left-menu
{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    width: 17rem;
}

.left-menu-child
{
    width: 15rem;
    height:7.2rem;
    background-color: rgb(250, 254, 252);
    margin-bottom: 0.6rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
    padding-block: 1rem;
    padding-inline: 1rem;
    text-align: center;
    font-size: 1.5rem;
}

.bookstore-img
{
    height: 495px;
    width: 990px;
    border-radius: 2rem;
}

.book-inline
{
    display: flex;
}

.home-img-head
{
    font-size: 1.5rem;
    margin-top: -17rem;
    margin-left: 25rem;
    color: rgb(223, 243, 232);
}

#login
{
    font-size: 2.5rem;
    text-align: center;
    color: rgb(52, 51, 51);
    margin-top: -1rem;
}

.containerl
{
    display: flex;
    width: 25rem;
    height: 27rem;
    background-color:  rgb(223, 244, 237);
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
    justify-content: center;
    gap: 1.6rem;
    margin: 6.2rem 29rem;
    box-shadow: 10px 20px 30px rgb(174, 173, 173);
}
 
.childl
{
    width: 18rem;
    height: 3rem;
    padding: 1.3rem;
    border-radius: 1rem;
    margin: 0.2rem;
    border: none;
    font-size: 1rem;

} 

#loginbtn
{
    width: 18rem;
    height: 3.2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.5rem;
    background-color: rgb(172, 202, 186);
    text-align: center;
    border: none;
    font-size: 1rem;
    color: rgb(37, 37, 37);
    font-size: 1.2rem;
}


#newbtn
{
    width: 18rem;
    height: 2.7rem;
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0.1rem 0.5rem 3rem 0.5rem;
    background-color: rgb(172, 202, 186);
    border: none;
    text-align: center;
    font-size: 1rem;
}

.container-newacc
{
    width: 25rem;
    height: 35rem;
    background-color:  rgb(223, 244, 237);
    border-radius: 2rem;
    box-shadow: 10px 10px 30px rgb(210, 209, 209);
    display: flex;
    gap: 1.1rem;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 3rem 28rem;
}

.container-newacc-child
{
    padding: 0.8rem;
    border-radius: 1rem;
    border: 1px gainsboro;
    width: 19rem;
}

.flexxacc
{
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
}

.container-newacc-child2
{
    padding: 0.8rem;
    border-radius: 1rem;
    border: 1px gainsboro;
    width: 12rem;
}

.createheading
{
    font-size: 2rem;
    color: black;
    padding: 0.5rem;
    margin-top: 0.5rem;
}

.createbtn
{
    padding: 0.8rem;
    font-size: 1.2rem;
    width: 19rem;
    border-radius: 2rem;
    border: none;
    background-color:  rgb(172, 202, 186);
    color: rgb(56, 56, 56);
    font-weight: 500;
}

.cat-head
{
    font-size: 3.2rem;
    background-color:  rgb(172, 202, 186);
    width: 100%;
    padding: 2rem;
    text-align: center;
    color: rgb(53, 53, 53);
}

.flexc
{
    display: flex;
    flex-direction: column;
}

.flexr
{
    display: flex;
    flex-direction: row;
    height: 3rem;
    margin-top: 0.6rem;
    gap: 5rem;
    justify-content: center;
   
}

span
{
    font-size: 1.5rem;
    margin-top: 0.3rem;   
}

.cat-container
{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-evenly;
}

.cat-book
{
    width: 20rem;
    background-color: rgb(223, 244, 237);
    height: 26rem;
    margin: 2rem;
    border-radius: 1rem;
    padding-inline: 1.5rem;
    padding-block: 1.5rem;
}

.img-cat
{
    height:15rem;
    width:17rem; 
    border-radius: 1rem;
}

.cat-book-contain
{
    margin-top: 0.3rem;
}

.cat-btn
{
    padding: 0.5rem;
    font-size: 1rem;
    width: 8rem;
    border-radius: 1rem;
    background-color: rgb(172, 202, 186);
    border: none;
    color: rgb(37, 37, 37);
}
      </style>
  </head>
  <body>
      <section>
      <form method="POST" id="loginform">
          <div class="containerl">
              <p id="login">LOGIN</p>
              <input type="text" placeholder="Username" class="childl" id="uname" name="username">
              <input type="password" placeholder="Password" class="childl" id="password" name="password">
              <button id="loginbtn">LOGIN</button>
          </div>
      </form>
  </section>
      <script src="js.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
