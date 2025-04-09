document.getElementById("dowryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("dowryForm").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");

  // Load quotes dynamically
  fetch("data/quotes.json")
    .then((res) => res.json())
    .then((data) => {
      const quotesContainer = document.getElementById("quotes");
      const quotesHTML = data.map(q => `
        <blockquote>
          “${q.quote}”
          <footer>— ${q.author}</footer>
        </blockquote>
      `).join("");
      quotesContainer.innerHTML = `<h3>Voices that Matter</h3>${quotesHTML}`;
    })
    .catch(() => {
      document.getElementById("quotes").innerHTML = "<p>Could not load quotes.</p>";
    });
});
