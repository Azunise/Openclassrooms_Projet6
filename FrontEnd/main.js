import {works} from "./fetch.js";
import {categories} from "./fetch.js";

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
    });
};


for(let i = 0; i < closeModalButton.length; i++){
    closeModalButton[i].addEventListener("click", function() {
    modal.style.display = "none";
    });
};

	



function generateProjectModal(works) {
    document.querySelector(".modalGallery").innerHTML= "";


    if (works === {}) {

    }else{


        const sectionGallery = document.querySelector(".modalGallery");

        console.log("17");
        for (let i = 0; i < works.length; i++) {
            console.log(works[i]);
            const project = works[i];
            
            const worksElement = document.createElement("figure");

            const imageElement = document.createElement("img");
            imageElement.src = project.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = "éditer";

            //const binIcon = document.createElement("i");
            //binIcon.classList.add("fa-solid");
            //binIcon.classList.add("fa-trash-can");
            //binIcon.classList.add("binIcon")
            
            
            
            

            sectionGallery.appendChild(worksElement);
            worksElement.appendChild(imageElement);
            worksElement.appendChild(titleElement);
            //worksElement.appendChild(binIcon);

        }
    }
};

console.log("18");
generateProjectModal(works);

