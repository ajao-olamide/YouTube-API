// Options
const CLIENT_ID =
  "910104828261-qrv6rocsfek1sp2stqmjn94cr0subu0l.apps.googleusercontent.com";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
];

const SCOPES = "http://www.googleapis.com/auth/youtube.readonly";

const authorizeButton = document.getElementById("authorize-btn");
const signoutButton = document.getElementById("signout-btn");
const content = document.getElementById("content");
const chanelForm = document.getElementById("channel-form");
const channelInput = document.getElementById("channel-input");
const videoContainer = document.getElementById("video-container");

const defaultChannel = 'techguyweb'
// load auth2 library
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES,
    })
    .then(() => {
      // listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // handle initial signin State
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
}
// update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    content.style.display = "block";
    videoContainer.style.display = "block";
    getChannel()
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    content.style.display = "none";
    videoContainer.style.display = "none";
  }
}

// handle login
function handleAuthClick(){
    gapi.auth2.getAuthInstance().signIn();
}

// handle logout
function handleSignoutClick(){
    gapi.auth2.getAuthInstance().signOut();
}


// get channel from API
function getChannel(channel){
    console.log(channel)
}