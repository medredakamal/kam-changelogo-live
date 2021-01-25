// -- kamdevofficial | get elements --

const inputEl = document.getElementById("uploadLogo");
const buttonEl = document.getElementById("changeLogoBtn");
const logoEl = document.getElementById("logo_placeholder");
const alertEl = document.getElementById("alert");
const alertMsg = document.getElementById("alert-msg");
// -- kamdevofficial | functions --

// -- kamdevofficial | input handler function --
const handleInput = () => {
  inputEl.click();
};

// -- kamdevofficial | allowed types --
var allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];

// -- kamdevofficial | logo handler function --
const handleLogo = (getInputTarget) => {
  console.log();
  // -- kamdevofficial | get target & files --
  var get_target = getInputTarget.target,
    get_files = get_target.files;

  var file_reader = new FileReader();
  if (
    FileReader &&
    get_files &&
    get_files.length > 0 &&
    allowedTypes.includes(get_files[0].type)
  ) {
    file_reader.onload = function () {
      logoEl.src = file_reader.result;
      makeAlert("Logo changed successfully", "success");
    };
    file_reader.readAsDataURL(get_files[0]);
  } else {
    makeAlert("Extension not allowed !", "error");
  }
};

const makeAlert = (get_message, get_message_type) => {
  const createAlert = document.createElement("div");
  createAlert.innerHTML = `<div id="alert" class="alert ${get_message_type}">
      <span id="alert-msg">${get_message}</span>
    </div>`;
  document.body.appendChild(createAlert);
  setTimeout(() => {
    document.getElementById("alert").remove();
  }, 3000);
};

// -- kamdevofficial | event listeners --

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

inputEl.addEventListener("change", (e) => handleLogo(e));
