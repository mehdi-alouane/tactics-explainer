export function formations() {

    const pitch = document.getElementById("pitch");
const formationSelect = document.getElementById("formation");
const tacticDetails = document.getElementById("tacticDetails");

const formations = {
    4231: {
        name: "4-2-3-1 Narrow",
        description:
            "A modern formation with 4 defenders, 2 defensive midfielders, 3 attacking midfielders, and 1 forward.",
        pros: "Flexible, good balance between defense and attack.",
        cons: "Relies heavily on the lone striker and attacking midfielders for creativity.",
        positions: [
            { x: 50, y: 90, number: 1 }, // GK
            { x: 20, y: 70, number: 2 }, // RB
            { x: 35, y: 70, number: 5 }, // CB
            { x: 65, y: 70, number: 3 }, // CB
            { x: 80, y: 70, number: 4 }, // LB
            { x: 40, y: 50, number: 23 }, // DM
            { x: 60, y: 50, number: 7 }, // DM
            { x: 30, y: 30, number: 8 }, // AM
            { x: 50, y: 30, number: 21 }, // AM
            { x: 70, y: 30, number: 10 }, // AM
            { x: 50, y: 10, number: 11 }, // ST
        ],
    },
    433: {
        name: "4-3-3",
        description:
            "A balanced formation with 4 defenders, 3 midfielders, and 3 forwards.",
        pros: "Strong attacking presence, good width.",
        cons: "Can be vulnerable to counter-attacks.",
        positions: [
            { x: 50, y: 90, number: 1 }, // GK
            { x: 20, y: 70, number: 2 }, // RB
            { x: 35, y: 70, number: 5 }, // CB
            { x: 65, y: 70, number: 3 }, // CB
            { x: 80, y: 70, number: 4 }, // LB
            { x: 30, y: 50, number: 6 }, // CM
            { x: 50, y: 50, number: 8 }, // CM
            { x: 70, y: 50, number: 10 }, // CM
            { x: 20, y: 20, number: 7 }, // RW
            { x: 50, y: 20, number: 9 }, // ST
            { x: 80, y: 20, number: 11 }, // LW
        ],
    },
    442: {
        name: "4-4-2",
        description:
            "A classic formation with 4 defenders, 4 midfielders, and 2 forwards.",
        pros: "Good defensive cover, strong in midfield.",
        cons: "Can lack creativity in attack.",
        positions: [
            { x: 50, y: 90, number: 1 }, // GK
            { x: 20, y: 70, number: 2 }, // RB
            { x: 35, y: 70, number: 5 }, // CB
            { x: 65, y: 70, number: 3 }, // CB
            { x: 80, y: 70, number: 4 }, // LB
            { x: 20, y: 50, number: 7 }, // RM
            { x: 40, y: 50, number: 6 }, // CM
            { x: 60, y: 50, number: 8 }, // CM
            { x: 80, y: 50, number: 11 }, // LM
            { x: 35, y: 20, number: 9 }, // ST
            { x: 65, y: 20, number: 10 }, // ST
        ],
    },
};

function updateFormation() {
    const selectedFormation = formationSelect.value;
    const formation = formations[selectedFormation];

    // Clear previous players
    pitch.innerHTML = "";

    // Add new players
    formation.positions.forEach((pos) => {
        const player = document.createElement("div");
        player.className = "player";
        player.style.left = `${pos.x}%`;
        player.style.top = `${pos.y}%`;
        player.textContent = pos.number;
        pitch.appendChild(player);
    });

    // Update tactic details
    tacticDetails.innerHTML = `
        <h3>${formation.name}</h3>
        <p>${formation.description}</p>
        <h4>Pros:</h4>
        <p>${formation.pros}</p>
        <h4>Cons:</h4>
        <p>${formation.cons}</p>
    `;
}

formationSelect.addEventListener("change", updateFormation);

// Initial formation setup
updateFormation();


}