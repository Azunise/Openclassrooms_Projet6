


let works = window.localStorage.getItem("works");

if (works === null){
    console.log("1");
    
    const response = await fetch('http://localhost:5678/api-docs/#/default/get_works');
    works = await response.json();

    console.log("3");
    
    const valueWorks = JSON.stringify(works);
    
    window.localStorage.setItem("works", valueWorks);
}else{
    console.log("2");
    works = JSON.parse(works);
}

function generateProject(works) {

    const sectionGallery = document.querySelector(".gallery");

    for (let i = 0; i < works.length; i++) {

        const project = works[i];
        
        const worksElement = document.createElement("project");

        const imageElement = document.createElement("img");
        imageElement.src = project.imageUrl;
        const titleElement = document.createElement("figcaption");
        titleElement.innerText = project.title ?? "Title in progress";

        worksElement.dataset.id = works[i].id;
        
        /*
        const categoryElement = document.createElement("p");
        categoryElement.innerText = project.categoryId ?? "Category in progress";
        const userElement = document.createElement("p");
        userElement.innerText = project.userId;
        */

        /*
        worksElement.dataset.categoryId = works[i].categoryId;
        worksElement.dataset.userId = works[i].userId;
        */

        sectionGallery.appendChild(worksElement);
        worksElement.appendChild(imageElement);
        worksElement.appendChild(titleElement);

    }
}

generateProject(works);

const updateButton = document.querySelector();

for (let i = 0; i < works.length; i++) {


};
