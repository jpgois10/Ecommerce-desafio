import { initMenuToggle } from "./menuToggle.js";
import { initSubmenu } from "./submenu.js";
import { validateEmail } from "./emailValidation.js";

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initSubmenu();
    validateEmail();
});