document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var select = this.querySelector("select");
    if (select.value !== "0") {
      var baseUrl = "https://app.hellodesk.com/locations/";
      var selectedOption = select.value.toLowerCase().replace(" ", "-");
      location.href = baseUrl + selectedOption;
    }
  });