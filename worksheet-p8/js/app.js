
const profile = {
    name: "Hani",
    role: "Mahasiswa Informatika",
    skills: ["HTML", "CSS", "JavaScript"]
};

const projects = [
    {
        title: "Profil Pribadi",
        year: 2026,
        done: true
    },
    {
        title: "Daftar Series Korea",
        year: 2026,
        done: true
    },
    {
        title: "JavaScript Modern",
        year: 2026,
        done: false
    }
];

// Pure function 1: membuat kalimat perkenalan
function buildIntroduction({ name, role }) {
    return `Halo, nama saya ${name}. Saya adalah ${role}.`;
}

// Pure function 2: menyusun daftar skill
function formatSkills(skills) {
    return skills.join(" · ");
}

// map: mengambil judul semua proyek
const projectTitles = projects.map(
    (project) => project.title
);

// filter: mengambil proyek yang sudah selesai
const completedProjects = projects.filter(
    (project) => project.done === true
);

// find: mencari satu proyek berdasarkan judul
const foundProject = projects.find(
    (project) => project.title === "Profil Pribadi"
);

// Menampilkan hasil di Console
console.log(buildIntroduction(profile));
console.log(formatSkills(profile.skills));

console.table(projects);
console.table(projectTitles);
console.table(completedProjects);
console.log(foundProject);
