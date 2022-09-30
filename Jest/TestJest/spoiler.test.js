it("display content after click", function () {
  document.body.innerHTML =
    "<div>Voici mon <span class='spoiler'> contenu caché </span></div>";
  require("./spoiler.js");
  const spoilerButton = document.querySelector(".spoiler button");
  const spoilerText = document.querySelector(".spoiler span");

  expect(spoilerButton).not.toBeNull();
  expect(spoilerText).not.toBeNull();
  expect(spoilerText.classList.contains("visible")).toBe(false);
  expect(spoilerText).not.toHaveClass("visible");
  spoilerButton.click();
  expect(spoilerText).toHaveClass("visible");
});
