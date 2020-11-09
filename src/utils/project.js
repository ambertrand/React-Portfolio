import adventureThumbnail from '../img/index-screenshot.png';
import employeeThumbnail from '../img/Start-screen-screenshot.png';
import burgerThumbnail from '../img/Burger-screenshot.png';
import weatherThumbnail from '../img/City-search-screenshot.png';
import passwordThumbnail from '../img/Password-generator-screenshot.png';

const projects = [
    {
        name: "Outdoor Adventure Buddies",
        description: "An interactive web app that allows users to create an account, search for hiking trails and find buddies to hike with!",
        image: adventureThumbnail,
        technologies: [
            "Basic: HTML, CSS, Javascript",
            "Bootstrap. jQuery",
            "Hiking Project API",
            "Node.js, Express, Handlebars",
            "MySQL, Sequelize, Passport.js",
        ],
        code: "https://github.com/dylanbest15/Outdoor-Adventure-Buddies",
        deployment: "https://whispering-castle-57159.herokuapp.com/",

    },
    {
        name: "MyCovidTracker",
        description: "Your one stop shop for all news and statistics on COVID-19!",
        image: "https://media.giphy.com/media/Vh9PHybWF4VsakZqi2/giphy.gif",
        technologies: [
            "Basic: HTML, CSS, Javascript",
            "Materialize",
            "jQuery",
            "NY Times API",
            "Coronavirus Covid-19 API"
        ],
        code: "https://github.com/cjlaflamme1/MyCovidTracker",
        deployment: "https://cjlaflamme1.github.io/MyCovidTracker/",

    },
    {
        name: "Employee Management Tracker",
        description: "This project is a command line application that generates a software engineering team company profile.",
        image: employeeThumbnail,
        technologies: [
            "Basic: Javascript",
            "Node.js",
            "Inquirer",
            "MySQL"
        ],
        code: "https://github.com/ambertrand/Employee-Management-Tracker",
        deployment: "https://www.youtube.com/watch?v=AwSxpIpiAXo",

    },
    {
        name: "Devour The Burger",
        description: "A fun application to track burgers as they are logged and eaten using MySQL, Node, Express & Handlebars.",
        image: burgerThumbnail,
        technologies: [
            "Basic: CSS, Javascript",
            "Bootstrap",
            "Node.js",
            "Express",
            "Express-Handlebars",
            "MySQL"
        ],
        code: "https://github.com/ambertrand/Devour-The-Burger",
        deployment: "https://gentle-wildwood-15676.herokuapp.com/",

    },
    {
        name: "Weather Dashboard",
        description: "A weather dashboard that allows users to search for cities and view current and 5-day forecast data.",
        image: weatherThumbnail,
        technologies: [
            "Basic: HTML, CSS, Javascript",
            "Bootstrap",
            "jQuery",
            "Momentjs",
            "OpenWeather API"
        ],
        code: "https://github.com/ambertrand/Weather-Dashboard",
        deployment: "https://ambertrand.github.io/Weather-Dashboard/",

    },
    {
        name: "Password Generator",
        description: "A random password generator that allows users to input desired length and character choices.",
        image: passwordThumbnail,
        technologies: [
            "Basic: HTML, CSS, Javascript",
            "Bootstrap"
        ],
        code: "https://github.com/ambertrand/Password-Generator",
        deployment: "https://ambertrand.github.io/Password-Generator/",

    },
]

export default projects;