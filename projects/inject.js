function injectScript(url) {
  fetch(url).then((x) => {
    x.blob().then((y) => {
      y.text().then((z) => {
        var script = document.createElement("script");
        script.innerHTML = z;
        document.body.appendChild(script);
      });
    });
  });
}
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/libraries/thirdparty/cs/comlink.js")
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/libraries/common/cs/text-color.js")
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/content-scripts/cs.js")
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/content-scripts/prototype-handler.js")
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/content-scripts/load-redux.js")
injectScript("https://raw.githubusercontent.com/FlamedDogo99/ScratchScript/main/projects/content-scripts/fix-console.js")

        
// javascript:fetch(
//   window.atob(
//     "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZsYW1lZERvZ285OS9TY3JhdGNoU2NyaXB0L21haW4vcHJvamVjdHMvaW5qZWN0Lmpz"
//   )
// ).then((x) => {
//   x.blob().then((y) => {
//     y.text().then((z) => {
//       var script = document.createElement("script");
//       script.innerHTML = z;
//       document.body.appendChild(script);
//     });
//   });
// });
// /*/Bookmarklet/*/