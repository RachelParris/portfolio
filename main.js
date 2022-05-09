let projects = [
    {
        title: 'Project Name',
        image: 'https://placekitten.com/200/150',
        tech: 'HTML, CSS, JavaScript',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nobis quibusdam veniam voluptatum perferendis harum ullam nemo repudiandae, necessitatibus, recusandae odit iste. Laborum, commodi deserunt.',
        links: {
            github: 'https://github.com/RachelParris/portfolio',
            site: false
        }
    },
    {
        title: 'Project Name',
        image: 'https://placekitten.com/200/150',
        tech: 'HTML, CSS, JavaScript',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nobis quibusdam veniam voluptatum perferendis harum ullam nemo repudiandae, necessitatibus, recusandae odit iste. Laborum, commodi deserunt.',
        links: {
            github: 'https://github.com/RachelParris/portfolio',
            site: false
        }
    },
    {
        title: 'Project Name',
        image: 'https://placekitten.com/200/150',
        tech: 'HTML, CSS, JavaScript',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nobis quibusdam veniam voluptatum perferendis harum ullam nemo repudiandae, necessitatibus, recusandae odit iste. Laborum, commodi deserunt.',
        links: {
            github: 'https://github.com/RachelParris/portfolio',
            site: false
        }
    }
];

let renderProjects = (projects) => {
    // Loop over each project and build the card from the template to render to the page
    let render = projects.map((project) => {
        return `<div class="project">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <h3 class="project-title">${project.title}</h3>
        <h4 class="project-subtitle">${project.tech}</h4>
        <p class="project-description">${project.description}</p>
        <p><a href="${project.links.github || '#'}" class="project-link">GitHub</a> | <a href="${project.links.site || '#'}" class="project-link">Live Site</a></p>
    </div>`
    }).join('');

    document.getElementById('projects').innerHTML = render;
}

window.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
});

