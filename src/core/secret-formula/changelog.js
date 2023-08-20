export const changelog = [
  /**
   * @template
   * {
   *  @property {Array: Number} date  Date of the release of the update, stored in order of year-month-date.
   *  @property {String} name         Name of the update entry. Optional.
   *  @property {Number} id           Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info  Text body of information for the entry.
   * }
   */
  {
    date: [2023, 8, 20],
    name: "Bugfixes, and finally more upgrades",
    info: 
    `Even more bugfixes that fix things I overlooked. Note: Since school is starting back up for me. this might be the last patch for a while.
    Due to this, the new upgrades weren't tested as much
    <br>
    <br>
    <b>New things:</b>
    <br>
    <ul>
    <li>Added Black Hole and Rebuyable Reality Upgrade Autobuyers to 3 Mend Milestone</li>
    <li>Implemented Mending Upgrades 5 and 9</li>
    <li>Endgame: 7 Mend Milestone, all non-stripped Mending Upgrades.</li>
    </ul>
    <b>Bugfixes:</b>
    <br>
    <ul>
    <li>Fixed the Inverted BH appearing without Hard V being Unlocked</li>
    <li>Fixed being able to enter Pelle immediately after Mend</li>
    <li>Fixed some 1 Mend Milestone multipliers not working in Pelle</li>
    <li>Made all tabs unhidden on Mend</li>
    <li>Added "break" statements to some switch statements to avoid uninteneded behavior</li>
    </ul>
    <b>Known Issues:</b>
    <br>
    <ul>
    <li>There are console errors when viewing the Time Study Tree in Nameless' Reality (I didn't edit anything there). However
    this doesn't seem to affect gameplay in any way.</li>
    <li>Glyph preset importing can equip more than 1 Effarig/Reality Glyph before the 7 Mend milestone. Please unequip before importing :).</li>
    <li>Viewing the credits in the "About the game" modal displays incorrectly, you should be able to hit the Escape key to exit.</li>
    <li>The 2 Mend Milestone is also supposed to give autobuyers for the rebuyable Pelle dilation upgrades, but are currently non-functional. Tip: you can click on them once, then hold the Enter key to rebuy them rapidly.</li>
    <li>The Mending tab has no icon in the Aero theme</li>
    <li>V's reality can hardlock the game, make a backup save before entering</li>
    <li>Multipliers fromthe 1 Mend Milestone do not show up on the Multiplier Breakdown</li>
    <li>Viewing the Mending Upgrades Screen puts a duplicate key error, but Upgrades can still be bought</li>
    </ul>`
  },
  {
    date: [2023, 8, 19],
    name: "New Content!? no just more bugfixes",
    info: 
    `Even more bugfixes that fix things I overlooked. Note: Since school is starting back up for me. this might be the last patch for a while.
    <br>
    <br>
    <b>New things:</b>
    <br>
    <ul>
    <li>Reality Upgrades that required 4 Glyphs now require at LEAST 4 Glyphs</li>
    <li>Added x1,000 Replicanti Speed to 1 Mend Milestone</li>
    <li>Added more Mending Upgrades, but they're not implemented (these might change)</li>
    <li>Changed Dark Matter Dimension Imaginary Upgrades to require the Previous Dark Matter Dimension</li>
    <li>Endgame: still 7 Mends, Mending Upgrades 2 and 3 (the non-stripped ones).</li>
    </ul>
    <b>Bugfixes:</b>
    <br>
    <ul>
    <li>Gave "START" perk after every mend to get around the hardcoded first Reality glyph reward</li>
    <li>Likewise, gave a power Glyph after Mending Upgrade 2 and every Mend after to simulate it</li>
    <li>Changed the Remnant gain formula so the x1.1 from 1 Mend Mlestone applies properly</li>
    <li>Made the Glyph Selection conformation default to ON on Mend</li>
    <li>Improved Mending Upgrade Readability in some themes</li>
    </ul>
    <b>Known Issues:</b>
    <br>
    <ul>
    <li>There are console errors when viewing the Time Study Tree in Nameless' Reality (I didn't edit anything there). However
    this doesn't seem to affect gameplay in any way.</li>
    <li>The Invert BH button still shows up when Hard V is locked</li>
    <li>Glyph preset importing can equip more than 1 Effarig/Reality Glyph before the 7 Mend milestone. Please unequip before importing :).</li>
    <li>Viewing the credits in the "About the game" modal displays incorrectly, you should be able to hit the Escape key to exit.</li>
    <li>The 2 Mend Milestone is also supposed to give autobuyers for the rebuyable Pelle dilation upgrades, but are currently non-functional. Tip: you can click on them once, then hold the Enter key to rebuy them rapidly.</li>
    <li>The Mending tab has no icon in the Aero theme</li>
    <li>V's reality can hardlock the game, make a backup save before entering</li>
    <li>Multipliers fromthe 1 Mend Milestone do not show up on the Multiplier Breakdown</li>
    <li>Viewing the Mending Upgrades Screen puts a duplicate key error, but Upgrades can still be bought</li>
    </ul>`
  },
  {
    date: [2023, 8, 18],
    name: "The second bugifx",
    info: 
    `More bugfixes that fix things I overlooked.
    <br>
    <br>
    <b>New things:</b>
    <br>
    <ul>
    <li>None</li>
    <li>Endgame: still 7 Mends and both Mending Upgrades.</li>
    </ul>
    <b>Bugfixes:</b>
    <br>
    <ul>
    <li>Made "Auto Purge on Reality" glyph setting get set to false on Mend, because it was preventing Reality Resets.</li>
    <li>Changed V's tab visibility post Mend, because they're usually unlocked before Nameless completion.</li>
    <li>Fixed Alchemy not being reset on Mend (I think Pelle usually clears this, but futureproofing for Warp Reality)</li>
    </ul>
    <b>Known Issues:</b>
    <br>
    <ul>
    <li>There are console errors when viewing the Time Study Tree in Nameless' Reality (I didn't edit anything there). However
    this doesn't seem to affect gameplay in any way.</li>
    <li>The Invert BH button still shows up when Hard V is locked</li>
    <li>Glyph preset importing can equip more than 1 Effarig/Reality Glyph before the 7 Mend milestone. Please unequip before importing :).</li>
    <li>Viewing the credits in the "About the game" modal displays incorrectly, you should be able to hit the Escape key to exit.</li>
    <li>The 2 Mend Milestone is also supposed to give autobuyers for the rebuyable Pelle dilation upgrades, but are currently non-functional. Tip: you can click on them once, then hold the Enter key to rebuy them rapidly.</li>
    <li>The Mending tab has no icon in the Aero theme</li>
    <li>V's reality can hardlock the game, make a backup save before entering</li>
    </ul>`
    
  },
  {
    date: [2023, 8, 17],
    name: "The first bugifx",
    info: 
    `No new Content this update, just some bugfixes.
    <br>
    <br>
    <b>New things:</b>
    <br>
    <ul>
    <li>None</li>
    <li>Endgame: still 7 Mends and both Mending Upgrades.</li>
    </ul>
    <b>Bugfixes:</b>
    <br>
    <ul>
    <li>Fixed Parity of Singularity's timer after the first Mend.</li>
    <li>Fixed the Mending button being too wide in Modern UI.</li>
    <li>Fixed readibility of unbought Mending Upgrades in some themes.</li>
    <li>Fixed readibility of unachieved Mending Milestones in some themes.</li>
    <li>Fixed save importing disabiling the ability to do speedruns.</li>
    <li>Fixed pre-Reality achievements reseting on Reality (post Mend).</li>
    <li>Fixed Mending tab being hidden post-Mend on some imported saves.</li>
    <li>probably some other stuff I forgot.</li>
    </ul>
    <b>Known Issues:</b>
    <br>
    <ul>
    <li>There are console errors when viewing the Time Study Tree in Nameless' Reality (I didn't edit anything there). However
    this doesn't seem to affect gameplay in any way.</li>
    <li>The Invert BH button still shows up when Hard V is locked</li>
    <li>Glyph preset importing can equip more than 1 Effarig/Reality Glyph before the 7 Mend milestone. Please unequip before importing :).</li>
    <li>Viewing the credits in the "About the game" modal displays incorrectly, you should be able to hit the Escape key to exit.</li>
    <li>The 2 Mend Milestone is also supposed to give autobuyers for the rebuyable Pelle dilation upgrades, but are currently non-functional. Tip: you can click on them once, then hold the Enter key to rebuy them rapidly.</li>
    <li>The Mending tab has no icon in the Aero theme</li>
    </ul>`
    
  },
  {
    date: [2023, 8, 16],
    name: "The 'get a very primitive alpha out before college starts back up'",
    info: 
    `In the words of YouTube commenters, "first". Yes, you're looking at the first mod with a new prestige layer, and second with new content. 
    Unfortunately since school is starting back up, further updates will be slow to roll out (unless it's a major game-breaking bug).
    <br>
    <br>
    <b>New things:</b>
    <br>
    <ul>
    <li>Added the Mending Prestige Layer.</li>
    <li>Added Mending Upgrades and Milestones.</li>
    </ul>
    <b>Notes:</b>
    <br>
    <ul>
    <li>Speedrun is available from begining of the game (but no splits for Mending content).</li>
    <li>Nothing pre-Mend is changed, so you can grab a save from Buck's savebank: https://buck4437.github.io/save-bank/.</li>
    <li>Endgame: 7 Mends and both Mending Upgrades.</li>
    </ul>
    <b>Known Issues:</b>
    <br>
    <ul>
    <li>Importing a save disables speedruns, be wary until I find a workaround.</li>
    <li>There are console errors when viewing the Time Study Tree in Nameless' Reality (I didn't edit anything there). However
    this doesn't seem to affect gameplay in any way.</li>
    <li>The Invert BH button still shows up when Hard V is locked</li>
    <li>Glyph preset importing can equip more than 1 Effarig/Reality Glyph before the 7 Mend milestone. Please unequip before importing :).</li>
    <li>Viewing the credits in the "About the game" modal displays incorrectly, you should be able to hit the Escape key to exit.</li>
    <li>The 2 Mend Milestone is also supposed to give autobuyers for the rebuyable Pelle dilation upgrades, but are currently non-functional. Tip: you can click on them once, then hold the Enter key to rebuy them rapidly.</li>
    <li>The Mending tab has no icon in the Aero theme</li>
    </ul>`
    
  }
];


for (let i = 0; i < changelog.length; i++) {
  changelog[i].id = i;
}
