var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("serive worker registered");
  });
}

window.addEventListener("beforeinstallprompt", function () {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  return false;
});
