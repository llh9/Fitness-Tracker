async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log("hey");
    if (workout) {
      location.search = "?id=" + workout._id;
      console.log(workout);
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
console.log("hey");
init();