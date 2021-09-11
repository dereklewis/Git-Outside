const postNewReview = async (event) => {
  event.preventDefault();

  const campground = document.querySelector("#campground_name").value.trim();
  const city = document.querySelector("#city_name").value.trim();
  const state = document.querySelector("#state_name").value.trim();
  const amenities = document.querySelector("#amenities").value.trim();
  const accessibility = document.querySelector("#accessibility").value.trim();
  const rating = document.querySelector("#rating").value.trim();
  const price = document.querySelector("#price").value.trim();
  const reviewText = document.querySelector("#review_text").value.trim();

  const image = url;

  console.log(image);
  console.log(state);
  console.log(campground);

  if (
    campground &&
    city &&
    state &&
    amenities &&
    accessibility &&
    rating &&
    price &&
    reviewText &&
    image
  ) {
    const response = await fetch("/api/review/new", {
      method: "POST",
      body: JSON.stringify({
        campground,
        city,
        state,
        amenities: amenities === "YES" ? true : false,
        accessibility: accessibility === "YES" ? true : false,
        rating,
        price,
        reviewText,
        image,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace(`/api/${state}`);
    } else {
      alert("Failed to post review.");
    }
  }
};

document.querySelector(".newReview").addEventListener("submit", postNewReview);
