export const SupplyStratagems = [
  { name: 'Resupply', sequence: 'SSWD' },
  { name: 'MG-94 Machine Gun', sequence: 'SASWD' },
  { name: 'MGX-42 Machine Gun', sequence: 'SASWWA' },
  { name: 'LAS-98 Laser Cannon', sequence: 'SASWA' },
  { name: 'AC-22 Dum-Dum', sequence: 'SASWWD' },
  { name: 'Obliterator Grenade Launcher', sequence: 'SAWAS' },
  { name: 'M-25 Rumbler', sequence: 'SAWAA' },
  { name: 'FLAM-40 Incinerator', sequence: 'SASDA' },
  { name: 'TOX-13 Avenger', sequence: 'SASDD' },
  { name: 'RL-112 Recoilless Rifle', sequence: 'SADDA' },
  { name: 'EAT-17', sequence: 'SADWS' },
  { name: 'MLS-4X Commando', sequence: 'SAWSD' },
  { name: 'AD-334 Guard Dog', sequence: 'SWAWDS' },
  { name: 'AD-289 Angel', sequence: 'SWAADS' },
  { name: 'Resupply Pack', sequence: 'SWSSD' },
  { name: 'LIFT-850 Jump Pack', sequence: 'SWWSW' },
  { name: 'SH-32 Directional Kinetic Shield', sequence: 'SWADAS' },
  { name: 'SH-20 Shield Generator Pack', sequence: 'SWADAD' },
  { name: 'REP-80', sequence: 'SSADS' },
  { name: 'REC-6 Demolisher', sequence: 'SADWW' },
  { name: 'EXO-44 Walker Exosuit', sequence: 'SDWASS' },
  { name: 'EXO-48 Obsidian Exosuit', sequence: 'SDWASA' },
  { name: 'EXO-51 Lumberer Exosuit', sequence: 'SDWASD' },
  { name: 'MC-109 Hammer Motorcycle', sequence: 'SDSAAW' },
  { name: 'TD-110 Bastion', sequence: 'SDSAWD' },
  { name: 'M5 APC', sequence: 'SDSAAD' },
  { name: 'M5-32 HAV', sequence: 'SDSAWS' },
];

export const DefensiveStratagems = [
  { name: 'Humblebee UAV drone', sequence: 'AWD' },
  { name: 'Distractor Beacon', sequence: 'ASD' },
  { name: 'AT-47 Anti-Tank Emplacement', sequence: 'AAWWDA' },
  { name: 'A/MG-11 Minigun Turret', sequence: 'ASWDA' },
  { name: 'A/RX-34 Railcannon Turret', sequence: 'ASWAD' },
  { name: 'A/GL-8 Launcher Turret', sequence: 'ASWDDS' },
  { name: 'A/AC-6 Tesla Tower', sequence: 'ASSWDA' },
  { name: 'Airdropped Anti-Personnel Mines', sequence: 'ADSW' },
  { name: 'Anti-Personnel Barrier', sequence: 'ADSSD' },
  { name: 'Thunderer Smoke Round', sequence: 'DSWWS' },
  { name: 'Airdropped Stun Mines', sequence: 'ADWS' },
];

export const OffensiveStratagems = [
  { name: 'Static Field Conductors', sequence: 'DWAS' },
  { name: 'Airstrike', sequence: 'DWSDA' },
  { name: 'Vindicator Dive Bomb', sequence: 'DDD' },
  { name: 'Strafing Run', sequence: 'DDW' },
  { name: 'Incendiary Bombs', sequence: 'DWAD' },
  { name: 'Heavy Strafing Run', sequence: 'DDSW' },
  { name: 'Close Air Support', sequence: 'DDSA' },
  { name: 'Missile Barrage', sequence: 'DSSSAS' },
  { name: 'Thunderer Barrage', sequence: 'DSWWAS' },
  { name: 'Sledge Precision Artillery', sequence: 'DWAWSD' },
  { name: 'Orbital Laser Strike', sequence: 'DWAWDA' },
  { name: 'Shredder Missile Strike', sequence: 'DADASSD' },
  { name: 'Railcannon Strike', sequence: 'DSWSA' },
];

export const SpecialStratagems = [
  { name: 'Reinforce', sequence: 'WSDAW' },
  { name: 'NUX-223 Hellbomb', sequence: 'WADSWS' },
  { name: 'ME-1 Sniffer Metal Detector', sequence: 'SSDW' },
  { name: 'Emergency Beacon', sequence: 'WSDW' },
];

export const StratagemsMap = new Map<string, string>();
[
  ...SupplyStratagems,
  ...DefensiveStratagems,
  ...OffensiveStratagems,
  ...SpecialStratagems,
].forEach((stratagem) => {
  StratagemsMap.set(stratagem.sequence, stratagem.name);
});
