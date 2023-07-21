export function editToggle() {
	const trigger = document.querySelector(".editMode");
    for (let i = 0; i < trigger.length; i++ ) {
        if (trigger[i].style.display === "none") {
            trigger[i].style.display = "flex";
        } else {
            trigger[i].style.display = "none";
        }
    }
};

