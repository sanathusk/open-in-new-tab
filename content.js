// console.log("i am from content.js1");
// document.addEventListener("click", function (event) {
//   debugger;
//   console.log("i am from content.js1 click");
//   if (event?.target?.tagName === "A") {
//     console.log("i am from content.js1 click A");
//     if (target?.href) {
//       const currentDomain = window.location.hostname;
//       const linkDomain = new URL(target.href).hostname;

//       if (currentDomain !== linkDomain) {
//         event.preventDefault(); // Prevent the default link click behavior
//         chrome.runtime.sendMessage({ url: target.href }); // Send a message to background script
//       }
//     }
//   }
// });
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const anchorHref = anchor?.href;
    if (anchorHref) {
      const currentDomain = window.location.hostname;
      debugger;
      try {
        const linkDomain = new URL(anchorHref)?.hostname;
        if (currentDomain !== linkDomain) {
          event.preventDefault(); // Prevent the default link click behavior
          chrome.runtime.sendMessage({ url: anchorHref }); // Send a message to background script
        }
      } catch (err) {
        console.log(`error occured : ${err}`);
      }
    }
  });
});
