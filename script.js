var responses = {}; // Object to store the responses

function saveRating(page) {
  if (page === "first") {
    var rating = document.querySelector(
      `input[name="rating${pageNumber}"]:checked`
    ).value;
    responses[`rating${pageNumber}`] = rating;
    localStorage.setItem("responses", JSON.stringify(responses));

    // Hide the current page and show the next page
    document.querySelector(
      `.rating-page:nth-child(${pageNumber})`
    ).style.display = "none";
    document.querySelector(
      `.rating-page:nth-child(${pageNumber + 1})`
    ).style.display = "block";
  } else {
    alert("Wrong input");
  }
}

// Show the first rating page
document.querySelector(".rating-page:first-child").style.display = "block";

// Retrieve saved responses if available
var savedResponses = localStorage.getItem("responses");
if (savedResponses) {
  responses = JSON.parse(savedResponses);
}

var responses = {}; // Object to store the responses

function saveRating(page) {
  if (page === "second") {
    var rating = document.querySelector(
      `input[name="rating${pageNumber}"]:checked`
    ).value;
    responses[`rating${pageNumber}`] = rating;
    localStorage.setItem("responses", JSON.stringify(responses));

    // Hide the current page and show the next page
    document.querySelector(
      `.rating-page:nth-child(${pageNumber})`
    ).style.display = "none";
    document.querySelector(
      `.rating-page:nth-child(${pageNumber + 1})`
    ).style.display = "block";
  } else {
    alert("Wrong input");
  }
}

// Show the first rating page
document.querySelector(".rating-page:first-child").style.display = "block";

// Retrieve saved responses if available
var savedResponses = localStorage.getItem("responses");
if (savedResponses) {
  responses = JSON.parse(savedResponses);
}

var responses = {}; // Object to store the responses

function saveRating(page) {
  if (page === "third") {
    var rating = document.querySelector(
      `input[name="rating${pageNumber}"]:checked`
    ).value;
    responses[`rating${pageNumber}`] = rating;
    localStorage.setItem("responses", JSON.stringify(responses));

    // Hide the current page and show the next page
    document.querySelector(
      `.rating-page:nth-child(${pageNumber})`
    ).style.display = "none";
    document.querySelector(
      `.rating-page:nth-child(${pageNumber + 1})`
    ).style.display = "block";
  } else {
    alert("Wrong input");
  }
}

// Show the first rating page
document.querySelector(".rating-page:first-child").style.display = "block";

// Retrieve saved responses if available
var savedResponses = localStorage.getItem("responses");
if (savedResponses) {
  responses = JSON.parse(savedResponses);
}

var responses = {}; // Object to store the responses

function saveRating(page) {
  if (page === "fourth") {
    var rating = document.querySelector(
      `input[name="rating${pageNumber}"]:checked`
    ).value;
    responses[`rating${pageNumber}`] = rating;
    localStorage.setItem("responses", JSON.stringify(responses));

    // Hide the current page and show the next page
    document.querySelector(
      `.rating-page:nth-child(${pageNumber})`
    ).style.display = "none";
    document.querySelector(
      `.rating-page:nth-child(${pageNumber + 1})`
    ).style.display = "block";
  } else {
    alert("Wrong input");
  }
}

// Show the first rating page
document.querySelector(".rating-page:first-child").style.display = "block";

// Retrieve saved responses if available
var savedResponses = localStorage.getItem("responses");
if (savedResponses) {
  responses = JSON.parse(savedResponses);
}

const ul = document.querySelector(".page-number");
let allPages = 5;

function elem(allPages, page) {
  let li = "";

  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;

  if (page > 1) {
    li += `<li class="btn" onclick="elem(allPages, ${
      page - 1
    })" ><i class="fas fa-angle-left"></i></li>`;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > allPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }

    if (page == pageLength) {
      liActive = "active";
    } else {
      liActive = "";
    }

    li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span>${pageLength}</span></li>`;
  }

  if (page < allPages) {
    li += `<li class="btn" onclick="elem(allPages, ${
      page + 1
    })" ><i class="fas fa-angle-right"></i></li>`;
  }

  ul.innerHTML = li;
}
elem(allPages, 2);
