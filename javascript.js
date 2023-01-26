document.addEventListener("DOMContentLoaded", function() {
    let rows = document.querySelectorAll('tr');

    for (const row of rows) {
      row.addEventListener('click', function(ev) {
        let toggle_el = ev.currentTarget.querySelector('.target');

        toggle_el.style.display = toggle_el.style.display === "none" ? "block" : "none";
      });
    }
  });

  function showTextInLine(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == "inline") ? "none" : "inline";
}