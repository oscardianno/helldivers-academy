import A_AC_6_Tesla_Tower from '../../assets/icons/stratagems/png/A-AC-6 Tesla Tower.png';
import FLAM_40_Incinerator from '../../assets/icons/stratagems/png/FLAM-40 Incinerator.png';
import REC_6_Demolisher from '../../assets/icons/stratagems/png/REC-6 Demolisher.png';
import AC_22_Dum_Dum from '../../assets/icons/stratagems/png/AC-22 Dum-Dum.png';
import Heavy_Strafing_Run from '../../assets/icons/stratagems/png/Heavy Strafing Run.png';
import Reinforce from '../../assets/icons/stratagems/png/Reinforce.png';
import AD_289_Angel from '../../assets/icons/stratagems/png/AD-289 Angel.png';
import Humblebee_UAV_drone from '../../assets/icons/stratagems/png/Humblebee UAV drone.png';
import REP_80 from '../../assets/icons/stratagems/png/REP-80.png';
import AD_334_Guard_Dog from '../../assets/icons/stratagems/png/AD-334 Guard Dog.png';
import Incendiary_Bombs from '../../assets/icons/stratagems/png/Incendiary Bombs.png';
import Resupply_Pack from '../../assets/icons/stratagems/png/Resupply Pack.png';
import A_GL_8_Launcher_Turret from '../../assets/icons/stratagems/png/A-GL-8 Launcher Turret.png';
import LAS_98_Laser_Cannon from '../../assets/icons/stratagems/png/LAS-98 Laser Cannon.png';
import Resupply from '../../assets/icons/stratagems/png/Resupply.png';
import Airdropped_Anti_Personnel_Mines from '../../assets/icons/stratagems/png/Airdropped Anti-Personnel Mines.png';
import LIFT_850_Jump_Pack from '../../assets/icons/stratagems/png/LIFT-850 Jump Pack.png';
import RL_112_Recoilless_Rifle from '../../assets/icons/stratagems/png/RL-112 Recoilless Rifle.png';
import Airdropped_Stun_Mines from '../../assets/icons/stratagems/png/Airdropped Stun Mines.png';
import M_25_Rumbler from '../../assets/icons/stratagems/png/M-25 Rumbler.png';
import SH_20_Shield_Generator_Pack from '../../assets/icons/stratagems/png/SH-20 Shield Generator Pack.png';
import Airstrike from '../../assets/icons/stratagems/png/Airstrike.png';
import M5_APC from '../../assets/icons/stratagems/png/M5 APC.png';
import SH_32_Directional_Kinetic_Shield from '../../assets/icons/stratagems/png/SH-32 Directional Kinetic Shield.png';
import A_MG_II_Minigun_Turret from '../../assets/icons/stratagems/png/A-MG-II Minigun Turret.png';
import M5_32_HAV from '../../assets/icons/stratagems/png/M5-32 HAV.png';
import Shredder_Missile_Strike from '../../assets/icons/stratagems/png/Shredder Missile Strike.png';
import Anti_Personnel_Barrier from '../../assets/icons/stratagems/png/Anti-Personnel Barrier.png';
import MC_109_Hammer_Motorcycle from '../../assets/icons/stratagems/png/MC-109 Hammer Motorcycle.png';
import Sledge_Precision_Artillery from '../../assets/icons/stratagems/png/Sledge Precision Artillery.png';
import A_RX_34_Railcannon_Turret from '../../assets/icons/stratagems/png/A-RX-34 Railcannon Turret.png';
import ME_1_Sniffer_Metal_Detector from '../../assets/icons/stratagems/png/ME-1 Sniffer Metal Detector.png';
import Static_Field_Conductors from '../../assets/icons/stratagems/png/Static Field Conductors.png';
import AT_47_Anti_Tank_Emplacement from '../../assets/icons/stratagems/png/AT-47 Anti-Tank Emplacement.png';
import MG_94_Machine_Gun from '../../assets/icons/stratagems/png/MG-94 Machine Gun.png';
import Strafing_Run from '../../assets/icons/stratagems/png/Strafing Run.png';
import Close_Air_Support from '../../assets/icons/stratagems/png/Close Air Support.png';
import MGX_42_Machine_Gun from '../../assets/icons/stratagems/png/MGX-42 Machine Gun.png';
import TD_110_Bastion from '../../assets/icons/stratagems/png/TD-110 Bastion.png';
import Distractor_Beacon from '../../assets/icons/stratagems/png/Distractor Beacon.png';
import Missile_Barrage from '../../assets/icons/stratagems/png/Missile Barrage.png';
import Thunderer_Barrage from '../../assets/icons/stratagems/png/Thunderer Barrage.png';
import EAT_17 from '../../assets/icons/stratagems/png/EAT-17.png';
import MLS_4X_Commando from '../../assets/icons/stratagems/png/MLS-4X Commando.png';
import Thunderer_Smoke_Round from '../../assets/icons/stratagems/png/Thunderer Smoke Round.png';
import Emergency_Beacon from '../../assets/icons/stratagems/png/Emergency Beacon.png';
import NUX_223_Hellbomb from '../../assets/icons/stratagems/png/NUX-223 Hellbomb.png';
import TOX_13_Avenger from '../../assets/icons/stratagems/png/TOX-13 Avenger.png';
import EXO_44_Walker_Exosuit from '../../assets/icons/stratagems/png/EXO-44 Walker Exosuit.png';
import Obliterator_Grenade_Launcher from '../../assets/icons/stratagems/png/Obliterator Grenade Launcher.png';
import Vindicator_Dive_Bomb from '../../assets/icons/stratagems/png/Vindicator Dive Bomb.png';
import EXO_48_Obsidian_Exosuit from '../../assets/icons/stratagems/png/EXO-48 Obsidian Exosuit.png';
import Orbital_Laser_Strike from '../../assets/icons/stratagems/png/Orbital Laser Strike.png';
import EXO_51_Lumberer_Exosuit from '../../assets/icons/stratagems/png/EXO-51 Lumberer Exosuit.png';
import Railcannon_Strike from '../../assets/icons/stratagems/png/Railcannon Strike.png';

interface IStratagem {
  name: string;
  sequence: string;
  icon: string;
}

export const SupplyStratagems: IStratagem[] = [
  { name: 'Resupply', sequence: 'SSWD', icon: Resupply },
  { name: 'MG-94 Machine Gun', sequence: 'SASWD', icon: MG_94_Machine_Gun },
  { name: 'MGX-42 Machine Gun', sequence: 'SASWWA', icon: MGX_42_Machine_Gun },
  { name: 'LAS-98 Laser Cannon', sequence: 'SASWA', icon: LAS_98_Laser_Cannon },
  { name: 'AC-22 Dum-Dum', sequence: 'SASWWD', icon: AC_22_Dum_Dum },
  { name: 'Obliterator Grenade Launcher', sequence: 'SAWAS', icon: Obliterator_Grenade_Launcher },
  { name: 'M-25 Rumbler', sequence: 'SAWAA', icon: M_25_Rumbler },
  { name: 'FLAM-40 Incinerator', sequence: 'SASDA', icon: FLAM_40_Incinerator },
  { name: 'TOX-13 Avenger', sequence: 'SASDD', icon: TOX_13_Avenger },
  { name: 'RL-112 Recoilless Rifle', sequence: 'SADDA', icon: RL_112_Recoilless_Rifle },
  { name: 'EAT-17', sequence: 'SADWS', icon: EAT_17 },
  { name: 'MLS-4X Commando', sequence: 'SAWSD', icon: MLS_4X_Commando },
  { name: 'AD-334 Guard Dog', sequence: 'SWAWDS', icon: AD_334_Guard_Dog },
  { name: 'AD-289 Angel', sequence: 'SWAADS', icon: AD_289_Angel },
  { name: 'Resupply Pack', sequence: 'SWSSD', icon: Resupply_Pack },
  { name: 'LIFT-850 Jump Pack', sequence: 'SWWSW', icon: LIFT_850_Jump_Pack },
  { name: 'SH-32 Directional Kinetic Shield', sequence: 'SWADAS', icon: SH_32_Directional_Kinetic_Shield },
  { name: 'SH-20 Shield Generator Pack', sequence: 'SWADAD', icon: SH_20_Shield_Generator_Pack },
  { name: 'REP-80', sequence: 'SSADS', icon: REP_80 },
  { name: 'REC-6 Demolisher', sequence: 'SADWW', icon: REC_6_Demolisher },
  { name: 'EXO-44 Walker Exosuit', sequence: 'SDWASS', icon: EXO_44_Walker_Exosuit },
  { name: 'EXO-48 Obsidian Exosuit', sequence: 'SDWASA', icon: EXO_48_Obsidian_Exosuit },
  { name: 'EXO-51 Lumberer Exosuit', sequence: 'SDWASD', icon: EXO_51_Lumberer_Exosuit },
  { name: 'MC-109 Hammer Motorcycle', sequence: 'SDSAAW', icon: MC_109_Hammer_Motorcycle },
  { name: 'TD-110 Bastion', sequence: 'SDSAWD', icon: TD_110_Bastion },
  { name: 'M5 APC', sequence: 'SDSAAD', icon: M5_APC },
  { name: 'M5-32 HAV', sequence: 'SDSAWS', icon: M5_32_HAV },
];

export const DefensiveStratagems: IStratagem[] = [
  { name: 'Humblebee UAV drone', sequence: 'AWD', icon: Humblebee_UAV_drone },
  { name: 'Distractor Beacon', sequence: 'ASD', icon: Distractor_Beacon },
  { name: 'AT-47 Anti-Tank Emplacement', sequence: 'AAWWDA', icon: AT_47_Anti_Tank_Emplacement },
  { name: 'A/MG-11 Minigun Turret', sequence: 'ASWDA', icon: A_MG_II_Minigun_Turret },
  { name: 'A/RX-34 Railcannon Turret', sequence: 'ASWAD', icon: A_RX_34_Railcannon_Turret },
  { name: 'A/GL-8 Launcher Turret', sequence: 'ASWDDS', icon: A_GL_8_Launcher_Turret },
  { name: 'A/AC-6 Tesla Tower', sequence: 'ASSWDA', icon: A_AC_6_Tesla_Tower },
  { name: 'Airdropped Anti-Personnel Mines', sequence: 'ADSW', icon: Airdropped_Anti_Personnel_Mines },
  { name: 'Anti-Personnel Barrier', sequence: 'ADSSD', icon: Anti_Personnel_Barrier },
  { name: 'Thunderer Smoke Round', sequence: 'DSWWS', icon: Thunderer_Smoke_Round },
  { name: 'Airdropped Stun Mines', sequence: 'ADWS', icon: Airdropped_Stun_Mines },
];

export const OffensiveStratagems: IStratagem[] = [
  { name: 'Static Field Conductors', sequence: 'DWAS', icon: Static_Field_Conductors },
  { name: 'Airstrike', sequence: 'DWSDA', icon: Airstrike },
  { name: 'Vindicator Dive Bomb', sequence: 'DDD', icon: Vindicator_Dive_Bomb },
  { name: 'Strafing Run', sequence: 'DDW', icon: Strafing_Run },
  { name: 'Incendiary Bombs', sequence: 'DWAD', icon: Incendiary_Bombs },
  { name: 'Heavy Strafing Run', sequence: 'DDSW', icon: Heavy_Strafing_Run },
  { name: 'Close Air Support', sequence: 'DDSA', icon: Close_Air_Support },
  { name: 'Missile Barrage', sequence: 'DSSSAS', icon: Missile_Barrage },
  { name: 'Thunderer Barrage', sequence: 'DSWWAS', icon: Thunderer_Barrage },
  { name: 'Sledge Precision Artillery', sequence: 'DWAWSD', icon: Sledge_Precision_Artillery },
  { name: 'Orbital Laser Strike', sequence: 'DWAWDA', icon: Orbital_Laser_Strike },
  { name: 'Shredder Missile Strike', sequence: 'DADASSD', icon: Shredder_Missile_Strike },
  { name: 'Railcannon Strike', sequence: 'DSWSA', icon: Railcannon_Strike },
];

export const SpecialStratagems: IStratagem[] = [
  { name: 'Reinforce', sequence: 'WSDAW', icon: Reinforce },
  { name: 'NUX-223 Hellbomb', sequence: 'WADSWS', icon: NUX_223_Hellbomb },
  { name: 'ME-1 Sniffer Metal Detector', sequence: 'SSDW', icon: ME_1_Sniffer_Metal_Detector },
  { name: 'Emergency Beacon', sequence: 'WSDW', icon: Emergency_Beacon },
];

export const StratagemsMap = new Map<string, IStratagem>();
[
  ...SupplyStratagems,
  ...DefensiveStratagems,
  ...OffensiveStratagems,
  ...SpecialStratagems,
].forEach((stratagem) => {
  StratagemsMap.set(stratagem.sequence, stratagem);
});
