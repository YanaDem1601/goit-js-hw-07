const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
    const space = event.currentTarget.value.trim();
    output.textContent = space === "" ? "Anonymous" : space;
});