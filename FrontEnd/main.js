const responseWorks = await fetch('http://localhost:5678/api/works');
const works = await responseWorks.json();


const responseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await responseCategories.json();

console.log(works);
console.log(categories);






function generateProject(works) {
    document.querySelector(".gallery").innerHTML= "";


    if (works === {}) {



    }else{


        const sectionGallery = document.querySelector(".gallery");

        for (let i = 0; i < works.length; i++) {
            console.log(works[i]);
            const project = works[i];
            
            const worksElement = document.createElement("figure");

            const imageElement = document.createElement("img");
            imageElement.src = project.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = project.title ?? "Title in progress";


            
            const categoryElement = document.createElement("p");
            categoryElement.innerText = project.categoryId ?? "Category in progress";

            

            sectionGallery.appendChild(worksElement);
            worksElement.appendChild(imageElement);
            worksElement.appendChild(titleElement);

        }
    }
}


generateProject(works);

 



function generateSorting(categories) {

    const sortingButtonDiv = document.querySelector(".sortingButtonDiv");



    for (let i = 0; i < categories.length; i++) {

        const currentIteration = categories[i].name;
            

        const categoriesElement = document.createElement("button");

        

        const sortingText = document.createElement("h3");
        sortingText.innerText = currentIteration;


        sortingButtonDiv.appendChild(categoriesElement);
        categoriesElement.appendChild(sortingText);
        
        categoriesElement.addEventListener("click", function(){ worksFiltering(works, i); });
    

    };

}

document.querySelector(".sortingButtonDiv").innerHtml= "";
generateSorting(categories);

const unfilteringButton = document.querySelector(".sortingButtonDiv button");
unfilteringButton.addEventListener("click", function() {generateProject(works) });

function worksFiltering(works, i) {

    const filteredWorks = works.filter(function (works) {
        return works.categoryId === i;
    });
    document.querySelector(".gallery").innerHTML = "";
    generateProject(filteredWorks);
};


const openModalButton = document.querySelectorAll(".openModalButton");
const closeModalButton = document.querySelectorAll(".closeModalButton");
const modal = document.querySelector(".modal");


for(let i = 0; i < openModalButton.length; i++){
    openModalButton[i].addEventListener("click", function() {
    modal.style.display = "flex";
    modalItself.style.display = "flex";
    modalOtherSelf.style.display = "none";
    });
};


for(let i = 0; i < closeModalButton.length; i++){
    closeModalButton[i].addEventListener("click", function() {
    modal.style.display = "none";
    });
};

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    };
});

	



function generateProjectModal(works) {
    document.querySelector(".modalGallery").innerHTML= "";


    if (works === {}) {

    }else{


        const sectionGallery = document.querySelector(".modalGallery");

        
        for (let i = 0; i < works.length; i++) {
            
            const project = works[i];
            
            const worksElement = document.createElement("figure");

            const imageElement = document.createElement("img");
            imageElement.src = project.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = "éditer";

            const binIcon = document.createElement("i");
            binIcon.classList.add("fa-solid", "fa-trash-can", "icon", "binIcon");
            

            const arrowsIcon = document.createElement("i");
            arrowsIcon.classList.add("fa-solid", "fa-arrows-up-down-left-right", "icon", "arrowsIcon");
            
            
            
            

            sectionGallery.appendChild(worksElement);
            worksElement.appendChild(imageElement);
            worksElement.appendChild(titleElement);
            worksElement.appendChild(binIcon);
            worksElement.appendChild(arrowsIcon);

        }
    }
};


generateProjectModal(works);

function editToggle() {
    const trigger = document.querySelectorAll(".editMode");
    if (sessionStorage.getItem('authenticationToggle') === "true") {
        for (let i = 0; i < trigger.length; i++ ) {
        
            trigger[i].style.display = "flex";
        } 
    } else {
        for (let i = 0; i < trigger.length; i++ ) {
            trigger[i].style.display = "none";
        }
    }
        
    
    
};

console.log(sessionStorage);
console.log(sessionStorage.getItem('authenticationToggle'));

editToggle();



const matches = document.querySelectorAll("div.modalGallery > figure");


for(let i = 0; i < matches.length; i++){
    matches[i].addEventListener("mouseover", function() {
        const cross = matches[i].querySelector(".arrowsIcon");
        cross.style.display = "flex";
    });
};

for(let i = 0; i < matches.length; i++){
    matches[i].addEventListener("mouseout", function() {
        const cross = matches[i].querySelector(".arrowsIcon");
        cross.style.display = "none";
    });
};






async function rmWork(id) {
	const authenticationToken = sessionStorage.getItem("authenticationToken");

	const deleteWorks = await fetch("http://localhost:5678/api/works/" + id, {
		method: "DELETE",
		headers: {
			"Authorization": "Bearer " + authenticationToken
		},
	});

	
	if (deleteWorks.ok) {
		
        const responseWorks = await fetch('http://localhost:5678/api/works');
        const works = await responseWorks.json();


        const responseCategories = await fetch("http://localhost:5678/api/categories");
        const categories = await responseCategories.json();

        generateProject(works);
        generateSorting(categories);
        generateProjectModal(works);

	};
};



const toggleModal = document.querySelectorAll(".toggleModalButton");
const modalItself = document.querySelector(".modalItself");
const modalOtherSelf = document.querySelector(".modalOtherSelf");
modalItself.style.display = "flex";

for(let i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener("click", function() {
        
        if (modalItself.style.display === "flex") {
            modalItself.style.display = "none";
            modalOtherSelf.style.display = "flex";
        } else {
            modalItself.style.display = "flex";
            modalOtherSelf.style.display = "none";
        };
    });
};


function generateSelectRoll() {
    
    const categorySelect = document.querySelector("#category");
    
    
    for (let i = 0; i < categories.length; i++) {
        categorySelect.innerHTML += "<option value='" + i + "'>" + categories[i].name + "</option>";
    }
    
    
    
}

generateSelectRoll();

const submitWork = document.querySelector("#submitWork")

function homeMadeMax(works) {
    
    var localMax = 0;

    for (let i = 0; i < works.length; i++) {
        
        if (works[i].id > localMax) {
            localMax = works[i].id;
        }
        
    }
    return localMax;
}

const inputImageUrl = document.querySelector("#imageUrl");
inputImageUrl.style.opacity = 0;

const imageUrl = document.querySelector("#imageUrl");

imageUrl.addEventListener("change", function() {
	
	
	if (imageUrl.files[0].size <= 4 * 1024 * 1024) {
		
		
		const imageUrlDiv = document.querySelector(".imageUrlDiv");
		
        imageUrlDiv.innerHTML = "";
		const preview = document.createElement("img");
		preview.src = URL.createObjectURL(inputImageUrl.files[0]);
		preview.className = "";
		imageUrlDiv.appendChild(preview);

		preview.addEventListener("click", function() {
			inputImageUrl.click();
		});


	} else {
		inputImageUrl.value = "";
		return alert ("Taille de l'image supérieure à 4mo.")
	};
});

submitWork.addEventListener("submit", async function(event) {
    event.preventDefault();


    const id = (homeMadeMax(works) + 1) ?? 0;
    const title = document.querySelector("#title").value ?? "0";
    const imageUrl = document.querySelector("#inputImageUrl").value ?? "0";
    const categoryId = document.querySelector("#category").value ?? "0";
    const userId = 0;

	const submitData = {id, title, imageUrl, categoryId, userId};
    console.log(JSON.stringify(submitData));
	
    const authenticationToken = sessionStorage.getItem("authenticationToken");

	const formData = await fetch("http://localhost:5678/api/works", {
	method: "POST",
	headers: {
        "Authorization": "Bearer " + authenticationToken,
        accept: "application/json"			
    },
	body: JSON.stringify(submitData)
  	});

});



function loginTogglin() {
    const authenticationToggle = sessionStorage.getItem("authenticationToggle");
    const loginToggle = document.querySelector("#loginLogout");
    if (authenticationToggle === "true" ) {

        loginToggle.innerText = "logout";
        


    } else {
        loginToggle.innerText = "login";
    };
    console.log(loginToggle.innerText);
}

loginTogglin();
