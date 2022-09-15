const TARGET_ATTRIBUTE_NAME = "data-target";
const TOGGLE_CLASS_NAME = "ncla-toggle";

let toggles = Array.from(document.getElementsByClassName(TOGGLE_CLASS_NAME));

console.log(toggles);

toggles.forEach((toggle) => {
    if(toggle.hasAttribute(TARGET_ATTRIBUTE_NAME)) {
        let target = document.querySelector(toggle.getAttribute(TARGET_ATTRIBUTE_NAME));

        // switch the display none on the target
        const switcher = () => {
            console.log("ciao");

            if(toggle.checked)
                target.classList.remove("d-none");              // replace with display: none; if there is NOT Bootstrap
            else
                target.classList.add("d-none");
        };

        switcher();              // call the switcher to init the state
        toggle.addEventListener("click", switcher);      // set event listener
    }
});