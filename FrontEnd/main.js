

const responseWorks = await fetch('http://localhost:5678/api/works');
const works = await responseWorks.json();


const responseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await responseCategories.json();

console.log(works);
console.log(categories);




//fonction qui genere la galerie principale

function generateProject(works) {
    document.querySelector(".gallery").innerHTML= "";

    const sectionGallery = document.querySelector(".gallery");

    for (let i = 0; i < works.length; i++) {
        
        const project = works[i];
        
        const worksElement = document.createElement("figure");

        const imageElement = document.createElement("img");
        imageElement.src = project.imageUrl;
        const titleElement = document.createElement("figcaption");
        titleElement.innerText = project.title ?? "Title in progress";
    
        sectionGallery.appendChild(worksElement);
        worksElement.appendChild(imageElement);
        worksElement.appendChild(titleElement);

    
    }
}

generateProject(works);

 

//Fonction qui genere les autres boutons de tri (autant que de categories)

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

//fonctions qui genere la galerie avec des parties de works plus ou moins filtrées

const unfilteringButton = document.querySelector(".sortingButtonDiv button");
unfilteringButton.addEventListener("click", function() {generateProject(works) });

function worksFiltering(works, i) {

    const filteredWorks = works.filter(function (works) {
        return works.categoryId === i+1;
    });
    document.querySelector(".gallery").innerHTML = "";
    generateProject(filteredWorks);
};


//Gere les ouvertures et fermeture de la modale

const openModalButton = document.querySelectorAll(".openModalButton");
const closeModalButton = document.querySelectorAll(".closeModalButton");
const modal = document.querySelector(".modal");

for(let i = 0; i < openModalButton.length; i++){
    openModalButton[i].addEventListener("click", function() {
    modal.style.display = "flex";
    modalPageOne.style.display = "flex";
    modalPageTwo.style.display = "none";
    });
};


for(let i = 0; i < closeModalButton.length; i++){
    closeModalButton[i].addEventListener("click", function() {
    modal.style.display = "none";
    });
};

modal.addEventListener("click", function(event) {
    if (event.target === modal) { //ne se declenche que lorsqu'on clique sur un élément qui est exactement la modale et pas un de ses descendants
        modal.style.display = "none";
    };
});

	
//Fonction qui genere la galerie pour la modale

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

//Toggle entre edit mode affiché ou non en fonction du statut de connexion

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



//Affichage du fa flèches multidirectionelles on hover

const figures = document.querySelectorAll("div.modalGallery > figure");

for(let i = 0; i < figures.length; i++){
    figures[i].addEventListener("mouseover", function() {
        const cross = figures[i].querySelector(".arrowsIcon");
        cross.style.display = "flex";
    });
};

for(let i = 0; i < figures.length; i++){
    figures[i].addEventListener("mouseout", function() {
        const cross = figures[i].querySelector(".arrowsIcon");
        cross.style.display = "none";
    });
};

//Pour passer de la première à la seconde page de modal et vice-versa (toujours en commencant par la première)

const toggleModal = document.querySelectorAll(".toggleModalButton");
const modalPageOne = document.querySelector(".modalPageOne");
const modalPageTwo = document.querySelector(".modalPageTwo");
modalPageOne.style.display = "flex";

for(let i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener("click", function() {
        
        if (modalPageOne.style.display === "flex") {
            modalPageOne.style.display = "none";
            modalPageTwo.style.display = "flex";
        } else {
            modalPageOne.style.display = "flex";
            modalPageTwo.style.display = "none";
        };
    });
};

//La fonction qui genere la liste des catégories disponibles

function generateSelectRoll() {
    
    const categorySelect = document.querySelector("#category");
    
    
    for (let i = 0; i < categories.length; i++) {
        categorySelect.innerHTML += "<option value='" + (i+1) + "'>" + categories[i].name + "</option>";
    }
    
    
    
}

generateSelectRoll();

//Fonction qui récupère le plus grand id de works
/*
const submitWork = document.querySelector("#submitWork")

function homeMadeMax(works) {
    
    var localMax = 0;

    for (let i = 0; i < works.length; i++) {
        
        if (works[i].id > localMax) {
            localMax = works[i].id;
        }
        
    }
    return localMax;
}*/


const inputImageUrl = document.querySelector("#imageUrl");
inputImageUrl.style.opacity = 0;

const imageUrl = document.querySelector("#imageUrl");

imageUrl.addEventListener("change", function() {
	
	
	if (imageUrl.files[0].size <= 4 * 1024 * 1024) {
		
		const imageUrlDiv = document.querySelector(".imageUrlDiv");
		
        imageUrlDiv.innerHTML = "";
		const preview = document.createElement("img");
		preview.src = URL.createObjectURL(inputImageUrl.files[0]);
		imageUrlDiv.appendChild(preview);

		preview.addEventListener("click", function() {
			inputImageUrl.click();
		});


	} else {
		return alert ("L'image dépasse les 4 Mo")
	};
});


//Le bouton submit pour rajouter les travaux

submitWork.addEventListener("submit", async function(event) {
    event.preventDefault();


    //const id = (homeMadeMax(works) + 1) ?? 0;

    const submitData = new FormData;
    
    submitData.append("image",inputImageUrl.files[0]);
    submitData.append("title",document.querySelector("#title").value);
    submitData.append("category",document.querySelector("#category").value);

	
    const authenticationToken = sessionStorage.getItem("authenticationToken");


	const addWorks = await fetch("http://localhost:5678/api/works/", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + authenticationToken,
            accept: "application/json"		
        },
        body: submitData
  	});

    if (addWorks.ok) {

        const newWorks = works.push(await addWorks.json());
        generateProject(newWorks);
        generateProjectModal(newWorks);
    } else {
        return alert("Erreur lors de l'ajout de projet, tous les champs sont nécessaires");
    };

});

// La fonction qui affiche logout au lieu de login lorsqu'on est connecté

function loginTogglin() {
    const authenticationToggle = sessionStorage.getItem("authenticationToggle");
    const loginToggle = document.querySelector("#loginLogout");
    if (authenticationToggle === "true" ) {
        loginToggle.innerText = "logout";
    } else {
        loginToggle.innerText = "login";
    };

}

loginTogglin();

//La fonction qui permet de retirer des travaux en fonction de leur id

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
        generateProjectModal(works);

	} else {
        return alert("Erreur lors de la suppression de projet");
    };
};

//les fa de poubelles suppriment le travail associé

const binIcon = document.querySelectorAll(".binIcon");

for (let i = 0; i < binIcon.length; i++){
    binIcon[i].addEventListener("click", function() {
        
        rmWork(works[i].id);

    });
};

//Le bouton supprimer la galerie retire tous les travaux d'un coup (sécurité ???)

const rmAll = document.querySelector(".massDeletion");

rmAll.addEventListener("click", function() {
    for (let i = 0; i < works.length; i++){
        
        rmWork(works[i].id);
        
    };
});


//Les fa de flèches multidirectionelles ouvrent les photos dans une nouvelle page

const arrowsIcon = document.querySelectorAll(".arrowsIcon")

for (let i = 0; i < arrowsIcon.length; i++){
    arrowsIcon[i].addEventListener("click", function() {
        
        window.open(works[i].imageUrl);

    });
};

//pour se déconnecter

const logout = document.querySelector("#loginLogout")

logout.addEventListener("click", function() {
    sessionStorage.setItem("authenticationToggle", "false");
});