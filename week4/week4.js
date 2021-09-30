//Global variables
const media = document.querySelector('video') // this just gets the video element
let playbackSpeed = 1 // Global variable to hold the playbackSpeed


document.body.style.backgroundColor = "#161616";

document.getElementById('title').innerText = 'WEEK4: VIEW SHORT VLOGS'
document.getElementById('title').style.color = '#a33327'




  function pic() {
    var img = new Image();
            img.src = 'moon.png';
            document.getElementById('body').appendChild(img);

}




//for the bottom video button option
function getModifier() {
  let valueElement = O("valueText")
  // get value of input element
  let valueText = valueElement.value
  // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
  let value = Number(valueText)
  return value
}

//add to playback speed
    /* This function reads the value from the valueText element
       and adds it to the global playback speed value */
function addToModifier() {
  let value = getModifier()
  playbackSpeed = playbackSpeed + value // update the global playback speed value
  //or we can shorthand this to an assignment operator
  //playbackSpeed += value
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

//subtracts from playback speed
function subtractModifier() {
  let value = getModifier()
  playbackSpeed = playbackSpeed - value // update the global playback speed value
  //or we can shorthand this
  //playbackSpeed -= value
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback Speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

//to mute or unmute video
function enableMute() {
  media.muted = true;
}

function disableMute() {
  media.muted = false;
}

//reset modifier
  /* This function clears the modifier value and updates the display
  */
function zeroModifier() {
  playbackSpeed = 1; // set the global modifier to 0
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // update the display
  let resultElement = O("playbackSpeed")
  resultElement.innerText = "Playback speed is 1"
}

//pause and play button
function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

//wacky function on top
function vol() {
  let input = O('vol')
  let answer = input.value
  if (answer.toLowerCase() == 'yes') {
    media.volume = 0.3;
  } else if (answer.toLowerCase() == 'no') {
    media.volume = 1;
  } else {
    let wrongAnswer = O('wronganswer')
    wrongAnswer.innerText = "Please say yes or no!"
  }
  input.value = ''
}

//selecting a video to play
function selectVideo() {
  let selectVideo = O('video-select')
  let preference = selectVideo.value

  switch(preference) {
    case ("bird"):
      media.src = "videos/peacock.mp4"
      break;
    case ("mix"):
      media.src = "videos/lights.mp4"
      break;
      case ("nature"):
        media.src = "videos/nature.mp4"
        break;
        case ("cafe"):
          media.src = "videos/coffee.mp4"
          break;
    default:
      break;
  }
}
