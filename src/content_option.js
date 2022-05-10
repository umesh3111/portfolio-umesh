const logotext = "UMESH";
const meta = {
    title: "Umesh Sharma",
    description: "I’m Umesh Sharma data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Umesh Sharma",
    animated: {
        first: "All round Programmer and a technical geek",
        second: "Fitness Enthusiast",
        third: "Full Stack Software Developer",
    },
    description: "Worked with various domains (Aviation, Insurance, Healthcare, Gaming, e-commerce, ed-tech etc) to develop different software models (SASS, B2C, Admin-panels, B2B etc). My expertise includes building large scale enterprise applications which are robust, fast-performing and scalable.",
    your_img_url: "https://media-exp1.licdn.com/dms/image/C5603AQFURGsGtQPkiw/profile-displayphoto-shrink_800_800/0/1652119025965?e=1657756800&v=beta&t=Vg50mPfiM1-8bWRrRD5TEZivfqPp0yjSu4Kf7VYiDeo",
};

const dataabout = {
    title: "Hi there!",
    aboutme: "I’m Umesh, a software developer from India with about 4 years of end-to-end software development. I am currently studying financial technology here in Toronto, ON. I am a tech enthusiast who loves to work in a tech-focused domain. "
        +
        "My expertise involves building enterprise level products that are scalable, robust and fast performing.I would love to help your tech-team build your product/products. If you find my experience relevant I would love to get in touch and answer any questions you have.",
};
const worktimeline = [{
    jobtitle: "Senior Software Developer",
    where: "ZestIOT technologies pvt Ltd",
    date: "2018",
},
{
    jobtitle: "Software Developer (MEAN)",
    where: "Lumiq",
    date: "2020",
},
{
    jobtitle: "Software Developer",
    where: "Hashtag Poker",
    date: "2021",
},
];

const skillsFrontend = [{
    name: "Angular",
    value: "> 2 Years",
},
{
    name: "React and Nextjs",
    value: "> 2 Years",
},
{
    name: "Html, css, javascript, typescript, MUI, bootstrap, flexbox, material designs etc",
    value: "> 2 Years",
},
{
    name: "Flutter",
    value: "Basics",
},
];

const backendLanguages = [{
    name: "Typescript",
    value: "> 3 Years",
},
{
    name: "JavaScript",
    value: "> 2 Years",
},
{
    name: "Python",
    value: "Basics",
},
];

const backendFrameworks = [{
    name: "Express",
    value: "> 3 Years",
},
{
    name: "Nestjs",
    value: "> 2 Years",
},
{
    name: "Loopback",
    value: "1 year",
},
];

const backendDatabases = [{
    name: "MongoDB",
    value: "> 3 Years",
},
{
    name: "Postgres SQL",
    value: "1 year",
},
];


const backendArchitectures = [{
    name: "Microservices",
    value: "> 2 Years",
},
{
    name: "Micro Frontends",
    value: "1 year",
},
];


const backendCaches = [{
    name: "Redis",
    value: "> 2 Years",
},
{
    name: "In memory Caches",
    value: "",
},
];

const backendMiscellaneous = [{
    name: "gRPC",
    value: "",
},
{
    name: "Kubernetes",
    value: "",
},
{
    name: "Docker",
    value: "",
},
{
    name: "AWS",
    value: "",
},
{
    name: "Nginx",
    value: "",
},
{
    name: "GitHub",
    value: "",
},
{
    name: "Github Actions",
    value: "",
}
];


const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = {
    description: "I would like to take a brief moment of yours to introduce myself. I’m Umesh, a software developer from India with about 4 years of end-to-end software development. I am currently studying financial technology here in Toronto, ON. I am a tech enthusiast and would like to work in a tech-focused domain for the while I’m studying. My expertise involves building enterprise level products that are scalable, robust and fast performing.I would love to help your tech-team build your product/products. If you find my experience relevant I would love to get in touch and answer any questions you have. Also, I am enclosing my skills and the most recent project highlights. Please take a look, and thanks a ton for your time.",
    languages: "Javascript, Typescript, Html, css, dart, python (basics)",
    frameworks: "Express, Looback, NestJS, Angular, React, Nextjs",
    dbs: "MongoDB, MySQL, Maria, Postgres",
    designs: "Microservices, micro-frontends, Pre-rendering",
    miscellaneous: "Docker, K8s, github-actions for CICD pipelines, ELK, AWS etc.",
    brokers: "RabbitMq, KubeMq, ActiveMq",
    cache: "Redis, in-memory caches (eg. node-cache)"
};

const contactConfig = {
    YOUR_EMAIL: "umesh.sh31@gmail.com",
    YOUR_FONE: "(437)262-4547",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    YOUR_SERVICE_ID: "service_imoi6ot",
    YOUR_TEMPLATE_ID: "template_gb5pbi8",
    YOUR_USER_ID: "EjxqmNnqUzHpkK4br",
};

const socialprofils = {
    github: "https://github.com/umesh3111",
    facebook: "https://www.facebook.com/umesh.sharma3111/",
    linkedin: "https://www.linkedin.com/in/umesh-sharma-9b1b7a152/",
    // twitter: "https://twitter.com",
    // youtube: "https://youtube.com",
    // twitch: "https://twitch.com",
};

const mostRecentProjectDetails = {
    title: "Hashtag Poker",
    backend: [
        "Made entirely on microservices",
        "Grpc for inter service communication",
        "Used nestjs (a framework made on top of express and node.js)",
        "Monorepo used to keep all node microservices in one github repository (also increases development speeds)",
        "Github actions for CICD on different servers",
        "Kong as a api gateway",
        "Deployed on a k8s cluster on AWS using EKS(elastic kubernetes service)",
    ],
    frontend: [
        "Made on React and next.js",
        "Pages are pre-rendered (either SSR or cached) wherever possible",
        "Material UI (MUI) library used for UI components",
        "Responsive for mobiles and tablets",
        "Images are optimised wherever possible",
    ],
    frontendlink: "https://learn.hashtagpoker.com/"
};

export {
    meta,
    mostRecentProjectDetails,
    dataabout,
    dataportfolio,
    worktimeline,
    skillsFrontend,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    backendLanguages,
    backendFrameworks,
    backendDatabases,
    backendArchitectures,
    backendCaches,
    backendMiscellaneous
};