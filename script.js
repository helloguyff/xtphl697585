const overlay = document.getElementById("ytOverlay");
const shell = document.getElementById("ytShell");
const iframe = document.getElementById("yt");

// On click: hide overlay + try to start playback by reloading embed with autoplay=1.
// This works on most browsers because it's triggered by a user gesture.
overlay.addEventListener("click", () => {
  shell.classList.add("playing");

  // Add autoplay & start at current point (optional).
  // IMPORTANT: Autoplay requires user gesture (this click is the gesture).
  const base = "https://www.youtube.com/embed/83oa5fE9f9A";
  const params = new URLSearchParams({
    autoplay: "1",
    controls: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3"
  });

  iframe.src = `${base}?${params.toString()}`;
});
