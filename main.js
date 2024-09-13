import './style.css'
import { formations } from './tactics.js';

import './style.css'
import { initializeTacticsApp } from './tactics.js';

document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="pitch-container">
    <h1>FOOTBALL TACTICS EXPLORER</h1>
    <div class="formation-selector">
      <label for="formation">FORMATION</label>
      <select id="formation"></select>
    </div>
    <div id="pitch">
      <!-- Players will be added here dynamically -->
    </div>
  </div>
  <div class="sidebar">
    <h2>Tactic Details</h2>
    <div id="tacticDetails">
      <p>Select a formation to see details.</p>
    </div>
    <div class="player-roles">
      <h3>Player Roles</h3>
      <ul id="playerRoles"></ul>
    </div>
    <div class="tactic-strengths">
      <h3>Strengths</h3>
      <ul id="tacticStrengths"></ul>
    </div>
    <div class="tactic-weaknesses">
      <h3>Weaknesses</h3>
      <ul id="tacticWeaknesses"></ul>
    </div>
    <div class="resources">
      <h3>Learn More</h3>
      <p>For more in-depth guides on football tactics, visit:</p>
      <ul>
        <li><a href="https://guidetofm.com" target="_blank">Guide to FM</a></li>
        <li><a href="https://guidetofootball.com" target="_blank">Guide to Football</a></li>
      </ul>
    </div>
  </div>
</div>
`

initializeTacticsApp()