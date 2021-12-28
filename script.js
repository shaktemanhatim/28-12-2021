// const mycar = document.querySelector("#mycar");
// const home = document.querySelector("#home");
// const obsCallback = function (entries, observ) {
//   entries.forEach(function (entry) {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: home,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(mycar);

///////////////////////////////////////////////////////////////////

const box = document.querySelector(".box");
const mycar = document.querySelector("#mycar");
const obsCallback = function (entry) {
  entry.forEach(function (entries) {
    console.log(entries);
    if (entries.isIntersecting) box.classList.remove("hidden");
    else box.classList.add("hidden");
  });
};
const obsOption = {
  root: null,
  threshold: 0.5,
};

const obsbox = new IntersectionObserver(obsCallback, obsOption);
obsbox.observe(mycar);
