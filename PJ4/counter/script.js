// Simple function to get element by ID - easier to type and read
const getElement = (id) => document.getElementById(id);

// Get all the elements we need from the page
const counterDisplay = getElement("counterDisplay");
const startButton = getElement("startBtn");
const stopButton = getElement("stopBtn");
const logger = getElement("logger");

let currentCount = 0; // Stores the current counter value
let counterTimer = null; // Stores the timer reference

// Start counting up
const startCounter = () => {
  if (!counterTimer) {
    counterTimer = setInterval(() => {
      currentCount += 1;
      counterDisplay.value = currentCount;
      updateLogger(`Count increased to: ${currentCount}`);
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
    updateLogger("Counter started!");
  }
};

const stopCounter = () => {
  if (counterTimer) {
    clearInterval(counterTimer);
    counterTimer = null;
    startButton.disabled = false;
    stopButton.disabled = true;
    updateLogger("Counter stopped");
  }
};

const resetCounter = () => {
  stopCounter();
  currentCount = 0;
  counterDisplay.value = currentCount;
  updateLogger("Counter reset to 0");
};

const updateLogger = (message) => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  logger.textContent = `${message} (${timeString})`;
};

const handleKeyboardShortcuts = (event) => {
  if (event.code === "Space") {
    event.preventDefault();

    if (counterTimer) {
      stopCounter();
    } else {
      startCounter();
    }
  }

  if (event.code === "KeyR" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    resetCounter();
  }
};

const setupEventListeners = () => {
  startButton.addEventListener("click", startCounter);
  stopButton.addEventListener("click", stopCounter);

  const resetButton = getElement("resetBtn");
  if (resetButton) {
    resetButton.addEventListener("click", resetCounter);
  }

  document.addEventListener("keydown", handleKeyboardShortcuts);
};

const initializeApp = () => {
  counterDisplay.value = currentCount;
  stopButton.disabled = true;
  updateLogger("Counter ready! Click Start to begin.");
  setupEventListeners();
};

document.addEventListener("DOMContentLoaded", initializeApp);
