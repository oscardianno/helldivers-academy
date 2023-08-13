const fs = require('fs');
const path = require('path');

const filePath = '/path/to/images/directory'; // Replace this
// The following is the name of the stratagems in the order they appear in the game (in the Spanish version)
const fileNames = [
  'Resupply',
  'MG-94 Machine Gun',
  'MGX-42 Machine Gun',
  'LAS-98 Laser Cannon',
  'Obliterator Grenade Launcher',
  'FLAM-40 Incinerator',
  'RL-112 Recoilless Rifle',
  'EAT-17',
  'Resupply Pack',
  'LIFT-850 Jump Pack',
  'SH-20 Shield Generator Pack',
  'REP-80',
  'EXO-44 Walker Exosuit',
  'M5 APC',
  'M5-32 HAV',
  'AC-22 Dum-Dum',
  'M-25 Rumbler',
  'TOX-13 Avenger',
  'MLS-4X Commando',
  'AD-334 Guard Dog',
  'AD-289 Angel',
  'REC-6 Demolisher',
  'SH-32 Directional Kinetic Shield',
  'EXO-48 Obsidian Exosuit',
  'EXO-51 Lumberer Exosuit',
  'MC-109 Hammer Motorcycle',
  'TD-110 Bastion',
  'Distractor Beacon',
  'A-MG-II Minigun Turret',
  'A-RX-34 Railcannon Turret',
  'A-GL-8 Launcher Turret',
  'A-AC-6 Tesla Tower',
  'Airdropped Anti-Personnel Mines',
  'Thunderer Smoke Round',
  'Airdropped Stun Mines',
  'Humblebee UAV drone',
  'AT-47 Anti-Tank Emplacement',
  'Anti-Personnel Barrier',
  'Static Field Conductors',
  'Airstrike',
  'Vindicator Dive Bomb',
  'Strafing Run',
  'Incendiary Bombs',
  'Heavy Strafing Run',
  'Thunderer Barrage',
  'Orbital Laser Strike',
  'Shredder Missile Strike',
  'Railcannon Strike',
  'Close Air Support',
  'Missile Barrage',
  'Sledge Precision Artillery',
  'Reinforce',
  'NUX-223 Hellbomb',
  'ME-1 Sniffer Metal Detector',
  'Emergency Beacon'
];

fs.readdir(filePath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.sort();

  for (let i = 0; i < files.length; i++) {
    const oldFileName = files[i];
    const newFileName = fileNames[i] + '.png';
    const oldFilePath = path.join(filePath, oldFileName);
    const newFilePath = path.join(filePath, newFileName);

    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming ${oldFileName}:`, err);
      } else {
        console.log(`${oldFileName} renamed to ${newFileName}`);
      }
    });
  }
});