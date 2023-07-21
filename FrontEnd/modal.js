
import { works } from "./fetchDatas.js";

import { categories } from "./fetchDatas.js";



export function modal() {

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

	
};


export function generateProjectModal(works) {
    document.querySelector(".modalGallery").innerHTML= "";


    if (works === {}) {

    }else{


        const sectionGallery = document.querySelector(".modalGallery");

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