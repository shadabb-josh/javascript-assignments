// Go to youtube. Open any video. Add a button to the page using JS. On click of the button,
// the video playback speed should change to 10x

const speedButton = document.createElement("button");
speedButton.innerText = "10x Speed";
document.body.appendChild(speedButton);

speedButton.addEventListener("click", () => {
  const video = document.querySelector("video");

  if (video) {
    video.playbackRate = 10;
    console.log("Playback speed set to 10x");
  } else {
    console.error("Video element not found!");
  }
});

