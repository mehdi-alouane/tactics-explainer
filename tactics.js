// tactics.js

export const formations = [
  {
    name: "4-3-3 - Offensive",
    description: "Emphasize attacking play and creating numerous scoring opportunities. Inspired by innovative business solutions.",
    playStyle: "Offensive",
    formation: "4-3-3",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 20, y: 70, number: 2, role: 'Right Back' },
      { x: 35, y: 70, number: 4, role: 'Center Back' },
      { x: 65, y: 70, number: 5, role: 'Center Back' },
      { x: 80, y: 70, number: 3, role: 'Left Back' },
      { x: 30, y: 50, number: 6, role: 'Defensive Midfielder' },
      { x: 50, y: 50, number: 8, role: 'Central Midfielder' },
      { x: 70, y: 50, number: 10, role: 'Attacking Midfielder' },
      { x: 20, y: 20, number: 7, role: 'Right Winger' },
      { x: 50, y: 20, number: 9, role: 'Striker' },
      { x: 80, y: 20, number: 11, role: 'Left Winger' }
    ],
    strengths: [
      "Strong offensive capabilities",
      "Excellent in high-pressure situations",
      "Innovative attacking patterns"
    ],
    weaknesses: [
      "Vulnerable to defensive tactics",
      "Struggles against deep-lying defenses",
      "Weak in prolonged defensive situations"
    ],
    keyPlayers: [
      { number: 10, role: "Attacking Midfielder" },
      { number: 9, role: "Striker" }
    ]
  },
  {
    name: "5-3-2 - Defensive",
    description: "Focus on maintaining a solid defensive structure and minimizing opposition chances. Inspired by robust security systems.",
    playStyle: "Defensive",
    formation: "5-3-2",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 20, y: 70, number: 2, role: 'Right Wing-Back' },
      { x: 35, y: 70, number: 4, role: 'Right Center Back' },
      { x: 50, y: 70, number: 5, role: 'Center Back' },
      { x: 65, y: 70, number: 6, role: 'Left Center Back' },
      { x: 80, y: 70, number: 3, role: 'Left Wing-Back' },
      { x: 30, y: 50, number: 7, role: 'Right Midfielder' },
      { x: 50, y: 50, number: 8, role: 'Central Midfielder' },
      { x: 70, y: 50, number: 11, role: 'Left Midfielder' },
      { x: 40, y: 20, number: 9, role: 'Striker' },
      { x: 60, y: 20, number: 10, role: 'Striker' }
    ],
    strengths: [
      "Strong defensive capabilities",
      "Excellent in maintaining shape",
      "Effective counter-attacking potential"
    ],
    weaknesses: [
      "Vulnerable to wide play",
      "Struggles against possession-based teams",
      "Limited attacking options"
    ],
    keyPlayers: [
      { number: 5, role: "Center Back" },
      { number: 8, role: "Central Midfielder" }
    ]
  },
  {
    name: "4-4-2 - Balanced",
    description: "A classic formation offering balance between attack and defense. Versatile and adaptable to various situations.",
    playStyle: "Balanced",
    formation: "4-4-2",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 20, y: 70, number: 2, role: 'Right Back' },
      { x: 35, y: 70, number: 4, role: 'Center Back' },
      { x: 65, y: 70, number: 5, role: 'Center Back' },
      { x: 80, y: 70, number: 3, role: 'Left Back' },
      { x: 20, y: 50, number: 7, role: 'Right Midfielder' },
      { x: 40, y: 50, number: 6, role: 'Central Midfielder' },
      { x: 60, y: 50, number: 8, role: 'Central Midfielder' },
      { x: 80, y: 50, number: 11, role: 'Left Midfielder' },
      { x: 35, y: 20, number: 9, role: 'Striker' },
      { x: 65, y: 20, number: 10, role: 'Striker' }
    ],
    strengths: [
      "Balanced attack and defense",
      "Flexible for various play styles",
      "Strong presence in midfield"
    ],
    weaknesses: [
      "Can be overrun in midfield by 3-man midfields",
      "Requires high work-rate from midfielders",
      "May lack creativity in attack"
    ],
    keyPlayers: [
      { number: 8, role: "Central Midfielder" },
      { number: 9, role: "Striker" }
    ]
  },
  {
    name: "4-2-3-1 - Modern",
    description: "A popular modern formation that offers defensive stability with attacking flair. Adapts well to high-pressing styles.",
    playStyle: "Modern",
    formation: "4-2-3-1",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 20, y: 70, number: 2, role: 'Right Back' },
      { x: 35, y: 70, number: 4, role: 'Center Back' },
      { x: 65, y: 70, number: 5, role: 'Center Back' },
      { x: 80, y: 70, number: 3, role: 'Left Back' },
      { x: 35, y: 50, number: 6, role: 'Defensive Midfielder' },
      { x: 65, y: 50, number: 8, role: 'Defensive Midfielder' },
      { x: 20, y: 30, number: 7, role: 'Right Winger' },
      { x: 50, y: 30, number: 10, role: 'Attacking Midfielder' },
      { x: 80, y: 30, number: 11, role: 'Left Winger' },
      { x: 50, y: 10, number: 9, role: 'Striker' }
    ],
    strengths: [
      "Strong defensive base",
      "Flexibility in attack",
      "Effective high-pressing capability"
    ],
    weaknesses: [
      "Reliant on strong individual performances",
      "Can be vulnerable to quick counter-attacks",
      "Striker may become isolated"
    ],
    keyPlayers: [
      { number: 10, role: "Attacking Midfielder" },
      { number: 6, role: "Defensive Midfielder" }
    ]
  },
  {
    name: "3-5-2 - Wing Play",
    description: "A formation that utilizes wing-backs to provide width and overloads. Combines solid defense with potent attacking options.",
    playStyle: "Wing Play",
    formation: "3-5-2",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 35, y: 70, number: 4, role: 'Right Center Back' },
      { x: 50, y: 70, number: 5, role: 'Center Back' },
      { x: 65, y: 70, number: 6, role: 'Left Center Back' },
      { x: 20, y: 50, number: 2, role: 'Right Wing-Back' },
      { x: 35, y: 50, number: 7, role: 'Right Midfielder' },
      { x: 50, y: 50, number: 6, role: 'Defensive Midfielder' },
      { x: 65, y: 50, number: 8, role: 'Left Midfielder' },
      { x: 80, y: 50, number: 3, role: 'Left Wing-Back' },
      { x: 40, y: 20, number: 9, role: 'Striker' },
      { x: 60, y: 20, number: 10, role: 'Striker' }
    ],
    strengths: [
      "Strong presence in wide areas",
      "Numerical advantage in midfield",
      "Versatile attacking options"
    ],
    weaknesses: [
      "Vulnerable to attacks down the flanks",
      "Requires high stamina from wing-backs",
      "Can be exposed if wing-backs are caught upfield"
    ],
    keyPlayers: [
      { number: 2, role: "Right Wing-Back" },
      { number: 10, role: "Striker" }
    ]
  },
  {
    name: "4-1-4-1 - Possession",
    description: "A formation designed for teams that prefer to dominate possession. Offers good defensive coverage with creative attacking options.",
    playStyle: "Possession",
    formation: "4-1-4-1",
    positions: [
      { x: 50, y: 90, number: 1, role: 'Goalkeeper' },
      { x: 20, y: 70, number: 2, role: 'Right Back' },
      { x: 35, y: 70, number: 4, role: 'Center Back' },
      { x: 65, y: 70, number: 5, role: 'Center Back' },
      { x: 80, y: 70, number: 3, role: 'Left Back' },
      { x: 50, y: 60, number: 6, role: 'Defensive Midfielder' },
      { x: 20, y: 40, number: 7, role: 'Right Midfielder' },
      { x: 40, y: 40, number: 8, role: 'Central Midfielder' },
      { x: 60, y: 40, number: 10, role: 'Central Midfielder' },
      { x: 80, y: 40, number: 11, role: 'Left Midfielder' },
      { x: 50, y: 20, number: 9, role: 'Striker' }
    ],
    strengths: [
      "Excellent for ball retention",
      "Strong presence in all areas of the pitch",
      "Good defensive structure"
    ],
    weaknesses: [
      "Can lack penetration in attack",
      "Striker may become isolated",
      "Vulnerable to quick counter-attacks"
    ],
    keyPlayers: [
      { number: 6, role: "Defensive Midfielder" },
      { number: 8, role: "Central Midfielder" }
    ]
  }
];

export function initializeTacticsApp() {
  const pitch = document.getElementById("pitch");
  const formationSelect = document.getElementById("formation");
  const tacticDetails = document.getElementById("tacticDetails");
  const playerRoles = document.getElementById("playerRoles");
  const tacticStrengths = document.getElementById("tacticStrengths");
  const tacticWeaknesses = document.getElementById("tacticWeaknesses");

  function populateFormationSelect() {
    formationSelect.innerHTML = '';
    formations.forEach((formation, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = formation.name;
      formationSelect.appendChild(option);
    });
    updateFormation();
  }

  function updateFormation() {
    const selectedIndex = formationSelect.value;
    const formation = formations[selectedIndex];

    // Clear previous players
    pitch.innerHTML = "";

    // Add new players
    formation.positions.forEach((pos) => {
      const player = document.createElement("div");
      player.className = "player";
      player.style.left = `${pos.x}%`;
      player.style.top = `${pos.y}%`;
      player.textContent = pos.number;
      player.title = pos.role;
      pitch.appendChild(player);
    });

    // Update tactic details
    tacticDetails.innerHTML = `
      <h3>${formation.name}</h3>
      <p><strong>Play Style:</strong> ${formation.playStyle}</p>
      <p><strong>Formation:</strong> ${formation.formation}</p>
      <p>${formation.description}</p>
    `;

    // Update player roles
    playerRoles.innerHTML = formation.positions
      .map(pos => `<li><strong>${pos.number}:</strong> ${pos.role}</li>`)
      .join('');

    // Add key players
    playerRoles.innerHTML += '<h4>Key Players:</h4>';
    playerRoles.innerHTML += formation.keyPlayers
      .map(player => `<li><strong>${player.number}:</strong> ${player.role}</li>`)
      .join('');

    // Update strengths and weaknesses
    tacticStrengths.innerHTML = formation.strengths
      .map(strength => `<li>${strength}</li>`)
      .join('');
    tacticWeaknesses.innerHTML = formation.weaknesses
      .map(weakness => `<li>${weakness}</li>`)
      .join('');
  }

  formationSelect.addEventListener("change", updateFormation);

  // Initial formation setup
  populateFormationSelect();
}