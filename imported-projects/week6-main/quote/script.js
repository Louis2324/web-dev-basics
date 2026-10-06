document.addEventListener("DOMContentLoaded", function () {
  const quoteDisplay = document.getElementById("quote-display");
  const generateBtn = document.getElementById("generate");
  const copyBtn = document.getElementById("copy");

  const defaultTags = "inspirational|motivational|wisdom";

  async function fetchRandomQuote(tags = defaultTags) {
    try {
      generateBtn.textContent = "Loading...";
      generateBtn.disabled = true;
      const response = await fetch(
        `https://api.quotable.io/random?tags=${tags}`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      const formattedQuote = `"${data.content}"\n\n— ${data.author}`;
      return formattedQuote;
    } catch (error) {
      console.error("Error fetching quote:", error);
      const fallbackQuotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
        "The only way to look after hitting rock bottom is up. - Haikyuu"
      ];
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      return fallbackQuotes[randomIndex];
    } finally {
      generateBtn.textContent = "Generate Quote";
      generateBtn.disabled = false;
    }
  }

  generateBtn.addEventListener("click", async function () {
    const quote = await fetchRandomQuote();
    quoteDisplay.value = quote;
    quoteDisplay.classList.add("quote-generated");
  });

  copyBtn.addEventListener("click", function () {
    if (quoteDisplay.value.trim()) {
      navigator.clipboard
        .writeText(quoteDisplay.value)
        .then(() => {
          const originalText = this.textContent;
          this.textContent = "✓";
          setTimeout(() => {
            this.textContent = originalText;
          }, 1500);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  });

  // Load a quote on page load
  generateBtn.click();
});
