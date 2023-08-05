const inputString = `
|-
| style="width:48px; border-right:0;" | [[File:strat_Reinforce_mk1.png|48px|link=Reinforce]] || style="border-left:0;"| [[Reinforce]] || [[File:arrow_4_U.png|30px]][[File:arrow_1_D.png|30px]][[File:arrow_3_R.png|30px]][[File:arrow_2_L.png|30px]][[File:arrow_4_U.png|30px]] || style="border-right:0; text-align:right;" | '''20''' || style="border-left:0;" | seconds || style="text-align:center;" | Unlimited || style="border-right:0; text-align:right;" | '''3.0''' || style="border-left:0;" | seconds
|-
| style="width:48px; border-right:0;" | [[File:strat_NUX-223 Hellbomb_mk1.png|48px|link=NUX-223 Hellbomb]] || style="border-left:0;"| [[NUX-223 Hellbomb]] || [[File:arrow_4_U.png|30px]][[File:arrow_2_L.png|30px]][[File:arrow_3_R.png|30px]][[File:arrow_1_D.png|30px]][[File:arrow_4_U.png|30px]][[File:arrow_1_D.png|30px]] || style="border-right:0; text-align:right;" | '''35''' || style="border-left:0;" | seconds || style="text-align:center;" | Unlimited || style="border-right:0; text-align:right;" | '''15.0''' || style="border-left:0;" | seconds
|-
| style="width:48px; border-right:0;" | [[File:strat_ME-1 Sniffer Metal Detector_mk1.png|48px|link=ME-1 Sniffer Metal Detector]] || style="border-left:0;"| [[ME-1 Sniffer Metal Detector]] || [[File:arrow_1_D.png|30px]][[File:arrow_1_D.png|30px]][[File:arrow_3_R.png|30px]][[File:arrow_4_U.png|30px]] || style="border-right:0; text-align:right;" | '''35''' || style="border-left:0;" | seconds || style="text-align:center;" | Unlimited || style="border-right:0; text-align:right;" | '''10.0''' || style="border-left:0;" | seconds
|-
| style="width:48px; border-right:0;" | [[File:strat_Emergency Beacon_mk1.png|48px|link=Emergency Beacon]] || style="border-left:0;"| [[Emergency Beacon]] || [[File:arrow_4_U.png|30px]][[File:arrow_1_D.png|30px]][[File:arrow_3_R.png|30px]][[File:arrow_4_U.png|30px]]
! colspan="2" style="background:none" |
| style="text-align:center;" | '''1''' || style="border-right:0; text-align:right;" | '''2.0''' || style="border-left:0;" | seconds
|-
`;

function parseStratagemsFromWiki(input) {
  const rows = input.trim().split(/\r?\n/);
  const stratagems = [];

  rows.forEach((row) => {
    const sequenceMatches = row.match(/File:arrow_(\d+_\w)\.png/g);
    const nameMatch = row.match(/\[\[(.*?)\]\]/);

    if (sequenceMatches && nameMatch) {
      const name = nameMatch[1].split('|link=')[1].trim(); // Extract the name after '|link=' and remove extra spaces
      const sequence = sequenceMatches
        .map((match) => {
          const direction = match.match(/_(\w)\.png/)[1];
          switch (direction) {
            case 'U':
              return 'W';
            case 'D':
              return 'S';
            case 'R':
              return 'D';
            case 'L':
              return 'A';
            default:
              return '';
          }
        })
        .join('');

      stratagems.push({
        name,
        sequence,
      });
    }
  });

  return stratagems;
}

const output = parseStratagemsFromWiki(inputString);
console.log(output);
