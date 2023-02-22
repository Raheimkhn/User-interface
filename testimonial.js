const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "https://static.fusionmovies.to/images/character/R_KORNQrZHWp8c_ULSlfLWXXch7NkqKFmE19rGUAUoTNZ72cOIT92ZNmhyhJQ213-AmYGR1jPryMF5_fyR3ok3W5dniC8uo2PwFjRQuKDBQ0ZmYlFfSw_ZaTy0o1F3bK.jpg?1&resize_w=320",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "https://th.bing.com/th/id/R.bd112a54b96fd0af1165030a17ecd963?rik=6msn%2fDLbsqlhNA&riu=http%3a%2f%2fwww2.pictures.zimbio.com%2fpc%2fCher%2bGlamour%2bMagazine%2b2010%2bWomen%2bYear%2bGala%2bGf6kT8LpF82x.jpg&ehk=ZdiQcr9B4x1ya%2bHcNWk2MLi%2b9E8IXG6FaWgv3oADfXg%3d&risl=&pid=ImgRaw&r=0",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "https://www.dutchcultureusa.com/wp-content/uploads/old_dcusa/Jaap-Robben%20(1)%20(square).jpg",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image: "https://www.winkworth.co.uk/getmedia/4df9bf1e-bfb6-4ce7-b42a-aa358ddd12f6/Nicola-Blake.jpg?width=800",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;