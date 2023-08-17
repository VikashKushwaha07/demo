// navigator.serviceWorker.ready.then(async (swReg) => {
//   // console.log(swReg);
//   const bgFetch = await swReg.backgroundFetch.fetch(
//     "my-fetch",
//     ["/ep-5.mp3", "ep-5-artwork.jpg"],
//     {
//       title: "Episode 5: Interesting things.",
//       icons: [
//         {
//           sizes: "300x300",
//           src: "/ep-5-icon.png",
//           type: "image/png",
//         },
//       ],
//       downloadTotal: 60 * 1024 * 1024,
//     }
//   );
//   console.log(bgFetch);
// });

const result = document.querySelector("#result");

fetch("https://http203.libsyn.com/rss")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => console.log(data));
