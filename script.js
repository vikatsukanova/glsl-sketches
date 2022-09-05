const sketches = [
  {
    name: "Hello World",
    url: "sketches/hello-world/index.html",
    date: 'August 27th, 2021',
  },
  {
    name: "Psyche Noise",
    url: "sketches/psyche-noise/index.html",
    date: 'August 27th, 2021',
  },
  {
    name: "Gradient Noise",
    url: "sketches/gradient-noise/index.html",
    date: 'August 27th, 2021',
  },
  {
    name: "aaa",
    url: "sketches/aaa/index.html",
    date: 'August 27th, 2021',
  },
  {
    name: "Zebra Wave",
    url: "sketches/zebra-wave/index.html",
    date: 'August 27th, 2021',
  },
];

let str = "";

sketches.forEach(function(sketch, index) {
  str += `<a id="sketches-links" href=${sketch.url}><div>${sketch.name}</div><div class="number">${index+1}</div></a>`;
}); 

document.getElementById("sketches").innerHTML = str;