import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-bootstrap';

function App() {


const rpsGame = (yourChoice) => {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.target.getAttribute("id")
  
  botChoice = numberToChoice(randToRpsInt ());
  console.log(botChoice);

  var results = decideWinner(humanChoice, botChoice);
  console.log(results);
  
  var message = finalMessage(results)
  console.log(message)
  
  rpsFrontEnd(yourChoice.target.getAttribute("id"), botChoice, message)
  }
  
  
  function randToRpsInt () {
  return Math.floor(Math.random()*3);
  }
  
  function numberToChoice (number) {
  return ['rock', 'paper', 'scissors'][number];
  
  }
  
  function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = {
      'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
      'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},
      'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
    };
  
    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
  
    return [yourScore, computerScore];
  
  }
  
  function finalMessage (results) {
  if (results[0] === 0 ) {
    return {'message':'You lost!', 'color':'red'};
  } else if (results[0] === 0.5 ) {
    return {'message': 'You Tied!', 'color':'yellow'};
  } else if (results[0] === 1 ) {
    return {'message': 'You Won!', 'color':'green'};
  }
  
  }
  
  function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
    }
  
  
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
    var humanDiv = document.createElement ('div');
    var botDiv = document.createElement ('div');
    var messageDiv = document.createElement ('div');
  
  
    humanDiv.innerHTML = "<img src=' " + imagesDatabase[humanImageChoice] + "' height=150 width=150 >"
    messageDiv.innerHTML = "<h2 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '> " + finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src=' " + imagesDatabase[botImageChoice] + "' height=150 width=150 >"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
  
  }
  
  return (
    <div className="App">
          <head>

            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>

            <title>Hello, world!</title>
          </head>
          
          <body>

             <ul className="nav">

              <li>
              <button class="btn btn-success">
                  <a class="text1" href="#">Home</a> 
                </button>
              </li>

              <li> 
                <button class="btn btn-success">
                  <a class="text1" href="#">Link1</a> 
                </button>
              </li>

              <li>
                <button class="btn btn-success">
                  <a class="text1" href="#">Link2</a> 
                </button>
              </li>


              <li>
                <button class="btn btn-success">
                  <a class="text1" href="#">Link3</a> 
                </button>
              </li>

             </ul>

              <div class="container-1">
                <h2>Rock, Paper, Scissors</h2>


                <div class="flex-box-rps" id="flex-box-rps-div">
                  <img id="rock" src="https://lh3.googleusercontent.com/proxy/Hpl1EXCg2-Q1rPyIhfOyDzIPUK6s-uJtcFaUA1U0VicIvCKycRLjnJVm7aAo9e09UHBU-YEtBULKSiOVY7Q5b_PZXMRWIm04wTcq" height="150" width="150" alt="rock" onClick={(e)=>rpsGame(e)}></img>
                  <img id="paper" src="https://assets.webiconspng.com/uploads/2017/09/Sticky-Notes-PNG-Image-37516.png" height="150" width="150" alt="paper" onClick={(e)=>rpsGame(e)}></img>
                  <img id="scissors" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33656/scissors-stationery-clipart-md.png" height="150" width="150" alt="scissors" onClick={(e)=>rpsGame(e)}></img>
                </div>

                <div class="flex-box-rps" id="flex-box-rps-div">
                  
                  


                  

                </div>







              </div>



        
            <div class="container">
              <h1 class="page-header"> Hello, world! <small>Secondary Text</small></h1>
              <p class="lead">Press option Z in order for words to wrap.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<mark> Quam id leo in vitae turpis massa sed.</mark> <del>Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.</del> A cras semper auctor neque vitae tempus quam. Massa vitae tortor condimentum lacinia quis. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Libero enim sed faucibus turpis in eu. Nulla pellentesque dignissim enim sit. Lacus luctus accumsan tortor posuere ac. Urna nunc id cursus metus aliquam eleifend mi in nulla. Montes nascetur ridiculus mus mauris vitae. Gravida dictum fusce ut placerat. Id eu nisl nunc mi ipsum faucibus. Dignissim cras tincidunt lobortis feugiat vivamus at.
              </p>
              <hr></hr>
              <p class="text-left"> Left Aligned Text</p>
              <p class="text-center"> Center Aligned Text</p>
              <p class="text-right"> Right Aligned Text</p>
              <p class="text-justify"> Justified Text</p>
              <p class="text-nowrap"> No Wrap Text</p>

              <p class="text-danger"> hello world</p>

            </div>
            <div class="container">

            <button class="btn btn-default"> Default </button>
            <a href="google.com" class="btn btn-default" role="button">Link</a>
            <input type="submit" class="btn btn-default" value="Submit"></input>


            <button class="btn btn-default"> Default </button>
            <button class="btn btn-primary"> Primary </button>
            <button class="btn btn-success"> Success </button>
            <button class="btn btn-info"> Info </button>
            <button class="btn btn-warning"> Warning </button>
            <button class="btn btn-danger"> Danger </button>
            <button class="btn btn-link"> Link </button>


            <button class="btn btn-danger btn-lg"> Danger </button>
            <button class="btn btn-info btn-sm"> Info </button>
            <button class="btn btn-info btn-xsm"> Info </button>

            <div class="alert alert-success" role="alert"> A succesful alert</div>
            <div class="alert alert-info" role="alert"> An informational alert</div>
            <div class="alert alert-warning" role="alert"> A warning alert</div>
            <div class="alert alert-danger" role="alert"> A dangerous alert</div>
            <div class="alert alert-warning alert-dismissible"> <button type="button" class="close" data-dismiss="alert"
            onClick={(e)=>alert("press this button")} style={{width:"100px"}}> text</button> </div>


            <span class="label label-default">Default</span>
            <span class="label label-success">Success</span>
            <span class="label label-info">Info</span>
            <span class="label label-danger">Danger</span>


            <a href="google.com"> Inbox <span class="badge">50</span></a>

            <div class="hero-unit">
              <h1>Heading</h1>
              <p>Tagline</p>
              <p>
                <a class="btn btn-primary btn-large">
                  Learn more
                </a>
              </p>
            </div>


            </div>

            <div class="progress">
            <div class="progress-bar" style={{width: "50%"}}>
            50% 
            </div>
            </div>


            <div container="container">
              <img class="thumbnail" src="https://via.placeholder.com/150"></img>
              <br></br>
              <img class="img-rounded" src="https://via.placeholder.com/150"></img>
              <br></br>
              <img class="img-circle" src="https://via.placeholder.com/150"></img>

            </div>

              


            

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

          </body>
    </div>
  );
}

export default App;

