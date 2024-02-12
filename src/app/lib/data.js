import musicFinderImage from '../../../public/images/music-finder.jpg';
import pantryHackerImage from '../../../public/images/pantry-hacker.jpg';
import gregListImage from '../../../public/images/gregs-list.png';
// Data for sections of app
// Hash links for nav bar
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
]

// Data for projects
export const projects = [
    {
        title: "Music Finder",
        description: "Music Finder is a front-end application that allows the user to search any artist's discography and/or upcoming concerts. You're also able to select and favorite any concert or album. The application uses the Apple Music API and the Ticketmaster API to pull from.",
        projectType: "Group project",
        tags: ["JavaScript", "Materialize CSS", "Apple Music API", "Ticketmaster API"],
        image: musicFinderImage,
        imageAlt: "Music Finder Image",
        url: "https://github.com/mtlankenau/gregs-list",
    },
    {
        title: "Greg's List",
        description: "Greg's List is a website built for a community to post and share job, gig, and services opportunities. This a full-stack MERN project completed during my time at UofR.",
        projectType: "Group project",
        tags: ["React", "ChakraUI", "Node.js", "Express", "GraphQL"],
        image: gregListImage,
        imageAlt: "Greg's List Image",
        url: "https://github.com/mtlankenau/gregs-list",
    },
    {
        title: "Pantry Hacker",
        description: "Pantry Hacker is a simple search tool for quick recipe information. This is a full-stack project completed during my time at UofR.",
        projectType: "Group project",
        tags: ["JavaScript", "Handlebars.js", "Node.js", "CSS", "MySQL", "Express"],
        image: pantryHackerImage,
        imageAlt: "Pantry Hacker Image",
        url: "https://github.com/wolfskillobyte/pantry-hacker",
    },
    {
        title: "NavTag",
        description: "Map app to track running and cycling activities",
        projectType: "Solo project",
        tags: ["JavaScript", "Leaflet.js", "CSS"],
        image: musicFinderImage,
        imageAlt: "NavTag Image",
        url: "https://github.com/brendanjflewis/navtag",
    },
]