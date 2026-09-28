const projects = {

    "coffee-shop": {
        category: "PROJECT · GAME DEVELOPMENT",

        title: "Coffee Shop<br><span>Simulator.</span>",

        intro:
            "A cozy 3D coffee shop simulator focused on preparing drinks, managing customer orders, and creating a relaxed gameplay experience.",

        technologies: [
            "Godot",
            "GDScript",
            "Blender",
            "3D"
        ],

        github: null,
        demo: null,

        media: {
            type: "image",
            src: "./images/projects/Coffee_shop/cafe1.png",
            alt: "Coffee Shop Simulator"
        },

        overview: `
            <p>
                Coffee Shop Simulator is a cozy 3D game prototype centered around
                running a small coffee shop. The player prepares and sells coffees
                while customers choose their own tables and eventually place their
                orders.
            </p>

            <p>
                The game is intentionally designed without a strict countdown timer.
                Instead, customers are handled using a FIFO-style order system, making
                it important for the player to remember which customer ordered first.
                This helps maintain the relaxed atmosphere of the game while still
                giving the player something to manage.
            </p>

            <p>
                Coffees are purchased at a specific price from the coffee machine,
                and incorrectly prepared drinks can be discarded before continuing
                with the next order.
            </p>
        `,

        technical: `
            <p>
                The project was developed in Godot using GDScript. I created the
                game's scripts, environment and other assets myself, with the
                exception of the customer asset provided by VROJD Studio.
            </p>

            <p>
                A large part of the technical work involved learning how Godot
                approaches game development and how object-oriented concepts can
                be applied within a game engine. I also created and worked with
                3D assets using Blender.
            </p>

            <p>
                The customer system required me to explore how simple AI behaviour
                could be implemented in Godot, particularly around customers choosing
                tables, waiting and eventually requesting an order.
            </p>
        `,

        techOutput:
            "Godot · GDScript · Blender · 3D game systems · Customer AI · FIFO order handling",

        challenges: `
            <p>
                The biggest challenge was not a single complicated feature, but
                learning how game development is structured in Godot. I already had
                experience with programming and object-oriented concepts, but applying
                those concepts inside a game engine required learning a different
                way of structuring scenes, scripts and game behaviour.
            </p>

            <p>
                Customer AI was another area that required additional research and
                experimentation, as I had not previously worked with AI behaviour
                inside Godot.
            </p>
        `,

        learning: [
            {
                title: "GDScript",
                text: "Learned how to structure gameplay systems and logic using GDScript."
            },
            {
                title: "Blender",
                text: "Developed practical 3D modelling skills while creating assets for the game."
            },
            {
                title: "Game Development",
                text: "Gained a better understanding of how programming, assets and gameplay systems come together."
            }
        ],

        gallery: [
            "./images/projects/Coffee_shop/cafe2.png",
            "./images/projects/Coffee_shop/cafe1.png",
            "./images/projects/Coffee_shop/cafe3.png"
        ]
    },


    "gamehub": {
        category: "PROJECT · WPL",

        title: "GameHub<br><span>Platform.</span>",

        intro:
            "A gamer-focused online platform for discovering games, managing collections, interacting with other players, and exploring game-related features.",

        technologies: [
            "TypeScript",
            "Express",
            "EJS",
            "MongoDB",
            "Tailwind",
            "Docker",
            "bcrypt"
        ],

        github: "https://github.com/Elke-K/Elke-K-Gamehub",
        demo: null,

        media: {
            type: "video",
            src: "./images/projects/Gamehub/gamehub_demo.mp4"
        },

        overview: `
            <p>
                GameHub is an online platform developed as a collaborative WPL
                project for gamers. The application allows users to discover games
                using data from the RAWG API, view detailed game information and
                personalize their own profile.
            </p>

            <p>
                Users can search and filter games by criteria such as platform,
                release information and whether a game supports single-player or
                multiplayer experiences. Games can also be added to favourites and
                collections, while users receive several starter collections when
                creating an account.
            </p>

            <p>
                The platform also includes community-oriented functionality.
                Users can indicate which games they are currently playing, leave
                reviews and comments, customize their profile and discover other
                users through public profile links or the community page.
            </p>

            <p>
                Beyond the main platform functionality, GameHub contains several
                interactive features, including a game guessing game based on
                descriptions, blurred images or zoomed-in images, as well as a
                comparison feature for comparing games based on their ratings.
            </p>
        `,

        technical: `
            <p>
                The application uses TypeScript with Express on the server side,
                EJS for server-rendered pages and MongoDB for persistent application
                data. Tailwind CSS was used to build the interface, while additional
                visual effects were used to give the application a more game-oriented
                identity.
            </p>

            <p>
                The application also integrates the RAWG API to retrieve game
                information instead of maintaining a complete game catalogue
                internally. User accounts and application data are stored through the
                backend, with bcrypt used for password hashing.
            </p>

            <p>
                The project was developed collaboratively by three students. We
                worked with Git branches and commits throughout development, and
                everyone contributed across different parts of the application,
                including both frontend and backend work.
            </p>

            <p>
                The application was also run continuously in a Docker-based development
                environment through LiveContainer, allowing the project and its services
                to run consistently during development.
            </p>
        `,

        techOutput:
            "TypeScript · Express · EJS · MongoDB · RAWG API · Tailwind CSS · bcrypt · Docker · Git",

        challenges: `
            <p>
                One of the biggest challenges was collaborative development. Changes
                made by one team member could sometimes introduce unexpected bugs in
                another part of the application, requiring us to investigate and
                understand each other's newly added code.
            </p>

            <p>
                The RAWG API also presented an external dependency challenge. At
                times, the API key reached its rate limit and became unavailable for
                extended periods, which required us to adapt our development process
                around the API's limitations.
            </p>
        `,

        learning: [
            {
                title: "Git & Collaboration",
                text: "Gained practical experience working with branches, commits and collaborative debugging."
            },
            {
                title: "Full-Stack Development",
                text: "Worked across both frontend and backend code instead of focusing on one layer."
            },
            {
                title: "External APIs",
                text: "Learned how applications depend on external services and how those limitations affect development."
            }
        ],
        gallery: []
    },


    "oop": {
        category: "PROJECT · OBJECT-ORIENTED PROGRAMMING",

        title: "Object-Oriented<br><span>Programming.</span>",

        intro:
            "A C# library management system developed across multiple deadlines, gradually expanding as new object-oriented concepts were introduced.",

        technologies: [
            "C#",
            ".NET 10",
            "OOP",
            "Interfaces"
        ],

        github: "https://github.com/Elke-K/Library",
        demo: null,

        media: {
            type: "image",
            src: "./images/projects/OOP/OOP1.png",
            alt: "Object-Oriented Programming project"
        },

        overview: `
            <p>
                This project is a library management system developed in C#. The
                assignment was divided into three deadlines, with each version
                expanding the application as new concepts and requirements were
                introduced.
            </p>

            <p>
                The system allows users to add and remove items from a library,
                filter its contents in different ways and read book information
                from a file. It also supports lending and returning items through
                an interface-based system.
            </p>

            <p>
                The library contains several types of publications, including books,
                magazines and newspapers. I also extended the system with a
                <strong>BookSeries</strong> class, allowing books to be grouped into
                a series. For example, multiple Hunger Games books could be associated
                with the same series.
            </p>
        `,

        technical: `
            <p>
                The application was built with C# and .NET 10 using Visual Studio
                2026. The project was implemented without additional external
                libraries, keeping the focus on the language and object-oriented
                design principles.
            </p>

            <p>
                The system makes use of classes and objects, encapsulation,
                abstraction, inheritance, polymorphism and interfaces. Different
                publication types can share common behaviour while still providing
                their own characteristics.
            </p>

            <p>
                The lending and returning functionality uses an interface to define
                behaviour that can be shared by compatible library items. This keeps
                the behaviour separate from the concrete classes that implement it
                and makes the system easier to extend.
            </p>
        `,

        techOutput:
            "C# · .NET 10 · Classes · Interfaces · Inheritance · Encapsulation · Polymorphism",

        challenges: `
            <p>
                The main challenge was not learning what object-oriented programming
                is, but applying it correctly when designing a new application.
                It can be difficult to know beforehand which classes are necessary,
                what responsibilities each class should have and how those classes
                should interact.
            </p>

            <p>
                The project helped reinforce that object-oriented design is largely
                about structuring responsibilities clearly rather than simply
                creating classes whenever something needs to be represented.
            </p>
        `,

        learning: [
            {
                title: "Object-Oriented Design",
                text: "Improved my ability to identify classes, responsibilities and relationships within an application."
            },
            {
                title: "Interfaces",
                text: "Gained practical experience using interfaces to define shared behaviour."
            },
            {
                title: "C# Development",
                text: "Strengthened my understanding of C# and object-oriented programming through a larger application."
            }
        ],

        gallery: [
            "./images/projects/OOP/OOP1.png",
            "./images/projects/OOP/OOP2.png",
            "./images/projects/OOP/OOP3.png",
            "./images/projects/OOP/OOP4.png",
            "./images/projects/OOP/OOP5.png",
            "./images/projects/OOP/OOP6.png"
        ]
    },


    "web-development": {
        category: "PROJECT · WEB DEVELOPMENT",

        title: "Web<br><span>Development.</span>",

        intro:
            "A full-stack animal dossier application built with Express, TypeScript and EJS, including authentication, sessions and database functionality.",

        technologies: [
            "TypeScript",
            "Express",
            "EJS",
            "MongoDB",
            "Tailwind"
        ],

        github: "https://github.com/Elke-K/Project-webontwikkeling",
        demo: null,

        media: {
            type: "image",
            src: "./images/projects/Web_dev/web2.png",
            alt: "Web Development project"
        },

        overview: `
            <p>
                This project is a full-stack web application built around animal
                dossiers. For the assignment, we could choose the subject of the
                application, and I chose to create a collection of animal information.
            </p>

            <p>
                The application retrieves its initial data from a JSON file hosted
                in a separate GitHub repository. Users can browse the available
                animals and open an individual page containing that animal's dossier.
            </p>

            <p>
                The application also includes user authentication and sessions.
                Regular users and guests can browse the application, while
                authenticated administrators receive additional functionality for
                managing the existing information.
            </p>
        `,

        technical: `
            <p>
                The application was developed using TypeScript and Express, with
                EJS used for server-side page rendering and Tailwind CSS used for
                the responsive interface.
            </p>

            <p>
                MongoDB is used for application data, while the animal information
                is retrieved from a JSON file hosted through GitHub. Express routers
                were used to separate the application's routes and keep the server
                structure manageable.
            </p>

            <p>
                Authentication is supported through sessions, allowing the
                application to distinguish between guests, regular users and
                administrators. Administrative forms provide functionality for
                reading, updating and deleting information, while regular users
                retain the same browsing experience as guests.
            </p>

            <p>
                The project also included automated tests, providing experience
                with verifying application behaviour rather than relying solely on
                manual testing.
            </p>
        `,

        techOutput:
            "TypeScript · Express · EJS · MongoDB · Tailwind CSS · Sessions · GitHub JSON · Testing",

        challenges: `
            <p>
                Most of the core functionality was relatively straightforward to
                implement once the application structure was established. Sessions
                were the main new concept for me, as I had not previously worked
                with them in a complete application.
            </p>

            <p>
                Understanding how login state is maintained between requests helped
                me better understand how authenticated web applications distinguish
                between users and protect functionality that should only be available
                to administrators.
            </p>
        `,

        learning: [
            {
                title: "Sessions",
                text: "Learned how sessions maintain user state and support authenticated web applications."
            },
            {
                title: "Testing",
                text: "Learned how automated tests can verify application behaviour and catch problems earlier."
            },
            {
                title: "Full-Stack Web Development",
                text: "Strengthened my understanding of routing, server rendering, databases and authentication together."
            }
        ],

        gallery: [
            "./images/projects/Web_dev/web4.png",
            "./images/projects/Web_dev/web2.png",
            "./images/projects/Web_dev/web3.png",
            "./images/projects/Web_dev/web1.png",
            "./images/projects/Web_dev/web5.png",
            "./images/projects/Web_dev/web6.png", 
            "./images/projects/Web_dev/web7.png"
        ]
    },


    "cloud-systems": {
        category: "PROJECT · CLOUD SYSTEMS",

        title: "Cloud<br><span>Systems.</span>",

        intro:
            "A self-hosted deployment of my web development project, built to explore Linux, containers, networking, HTTPS and automated deployment.",

        technologies: [
            "Linux",
            "Docker",
            "Docker Compose",
            "Caddy",
            "DuckDNS",
            "GitHub Actions"
        ],

        github: "https://github.com/Elke-K/Cloud-systems-project",
        demo: null,

        media: null,

        overview: `
            <p>
                For this project, I took my web development application and deployed
                it myself instead of using a managed online hosting service. The
                goal was to gain practical experience with the infrastructure behind
                hosting a web application.
            </p>

            <p>
                The application was made publicly accessible through a DuckDNS
                domain, allowing users on the internet to access the website,
                create accounts and use the functionality from the original web
                development project.
            </p>

            <p>
                Choosing to self-host the application also meant that I had to deal
                with networking, port forwarding, HTTPS, reverse proxy configuration,
                containers and automated deployment rather than having those
                responsibilities handled by a hosting provider.
            </p>
        `,

        technical: `
            <p>
                The application was hosted on Linux using Docker and Docker Compose.
                Caddy was used as a reverse proxy and to handle HTTPS/TLS for the
                publicly accessible application. DuckDNS provided the domain name
                used to reach the server.
            </p>

            <p>
                The deployment also used GitHub Actions to automate updates. When
                changes were pushed to the repository, the deployment pipeline could
                update the hosted application without requiring every update to be
                performed manually.
            </p>

            <p>
                The existing web application's MongoDB database and application
                stack were also part of the deployment, making this project an
                example of taking a complete application from development into a
                self-managed hosting environment.
            </p>

            <p>
                SSH was used for server administration. I also configured SSH to use
                a different port rather than exposing the default SSH port through
                my router's port forwarding configuration.
            </p>
        `,

        techOutput:
            "Linux · Docker · Docker Compose · Caddy · HTTPS/TLS · DuckDNS · GitHub Actions · SSH · MongoDB",

        challenges: `
            <p>
                One of the biggest challenges was configuring the reverse proxy and
                getting HTTPS to work correctly with the publicly accessible server.
                This also required understanding how my internet connection and router
                handled incoming connections and port forwarding.
            </p>

            <p>
                GitHub Actions was another major troubleshooting area. The deployment
                workflow initially failed repeatedly, requiring me to investigate the
                pipeline and understand how the different stages of an automated
                deployment fit together.
            </p>

            <p>
                I also had to consider how SSH should be exposed through the network.
                This led me to configure SSH on a different port rather than forwarding
                the standard SSH port.
            </p>
        `,

        learning: [
            {
                title: "Self-Hosting",
                text: "Learned what is involved in running and exposing a web application without managed hosting."
            },
            {
                title: "Networking",
                text: "Gained practical experience with port forwarding, DNS, reverse proxies and incoming connections."
            },
            {
                title: "Deployment",
                text: "Learned how containers and GitHub Actions can be combined to automate application deployment."
            }
        ],

        gallery: []
    }

};


// -----------------------------------------
// Get project
// -----------------------------------------

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects[projectId];


// -----------------------------------------
// Stop if project doesn't exist
// -----------------------------------------

if (!project) {
    document.title = "Project not found | Elke";

    document.getElementById("project-title").innerHTML =
        "Project<br><span>Not Found.</span>";

    document.getElementById("project-intro").textContent =
        "The project you are looking for does not exist.";

} else {

    document.title = `${projectId} | Elke`;

    // Hero
    document.getElementById("project-category").textContent =
        project.category;

    document.getElementById("project-title").innerHTML =
        project.title;

    document.getElementById("project-intro").textContent =
        project.intro;


    // Technology tags
    const meta = document.getElementById("project-meta");

    project.technologies.forEach(technology => {
        const tag = document.createElement("span");
        tag.textContent = technology;
        meta.appendChild(tag);
    });


    // Buttons
    const actions = document.getElementById("project-actions");

    if (project.github) {
        const github = document.createElement("a");

        github.href = project.github;
        github.target = "_blank";
        github.rel = "noopener";
        github.className = "button primary";
        github.textContent = "View on GitHub";

        actions.appendChild(github);
    }

    if (project.demo) {
        const demo = document.createElement("a");

        demo.href = project.demo;
        demo.target = "_blank";
        demo.rel = "noopener";
        demo.className = "button secondary";
        demo.textContent = "Live Demo";

        actions.appendChild(demo);
    }


    // Main media
    const media = document.getElementById("project-media");

    if (project.media) {

        if (project.media.type === "video") {

            media.innerHTML = `
                <video
                    class="project-detail-video"
                    controls
                    preload="metadata">
                    <source src="${project.media.src}" type="video/mp4">
                    Your browser does not support video playback.
                </video>
            `;

        } else {

            media.innerHTML = `
                <div class="project-detail-image">
                    <img
                        src="${project.media.src}"
                        alt="${project.media.alt}">
                </div>
            `;
        }

    } else {
        media.style.display = "none";
    }


    // Text sections
    document.getElementById("project-overview").innerHTML =
        project.overview;

    document.getElementById("project-technical").innerHTML =
        project.technical;

    document.getElementById("project-tech-output").textContent =
        project.techOutput;

    document.getElementById("project-challenges").innerHTML =
        project.challenges;


    // Learning cards
    const learning = document.getElementById("project-learning");

    project.learning.forEach(item => {

        const card = document.createElement("div");

        card.className = "project-learning-card";

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;

        learning.appendChild(card);
    });


    // Gallery
    const gallerySection =
        document.getElementById("project-gallery-section");

    const gallery =
        document.getElementById("project-gallery");

    if (project.gallery.length === 0) {

        gallerySection.style.display = "none";

    } else {

        project.gallery.slice(0, 7).forEach((image, index) => {

            const item = document.createElement("div");

            item.className = "project-gallery-item";

            item.innerHTML = `
                <img
                    src="${image}"
                    alt="${projectId} screenshot ${index + 1}">
            `;

            gallery.appendChild(item);
        });
    }
}