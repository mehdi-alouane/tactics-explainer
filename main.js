import './style.css'
import { formations } from './tactics.js';

document.querySelector('#app').innerHTML = `
<div class="container">
      <div class="pitch-container">
        <h1>FOOTBALL TACTICS EXPLORER</h1>
        <div class="formation-selector">
          <label for="formation">FORMATION</label>
          <select id="formation">
            <option value="4231">4-2-3-1 Narrow</option>
            <option value="433">4-3-3</option>
            <option value="442">4-4-2</option>
            <option value="352">3-5-2</option>
          </select>
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
        <div class="resources">
          <h3>Learn More</h3>
          <p>For more in-depth guides on football tactics, visit:</p>
          <ul>
            <li>
              <a href="https://guidetofm.com" target="_blank">Guide to FM</a>
            </li>
            <li>
              <a href="https://guidetofootball.com" target="_blank"
                >Guide to Football</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
`

formations()
