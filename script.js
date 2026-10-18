function getStatusMessage() {
  return "Приложение работает успешно!";
}

if (typeof document !== "undefined") {
  const button = document.getElementById("check-btn");
  const status = document.getElementById("status");

  if (button && status) {
    button.addEventListener("click", () => {
      status.textContent = getStatusMessage();
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = { getStatusMessage };
}
