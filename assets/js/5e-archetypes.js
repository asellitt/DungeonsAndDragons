function selectArchetype(archetypeIdentifier) {
  var archetypes = [
    {
      role: 'Heavy'
      ,hitDie: 12
      ,ac: function(dexModifier) { return 14 + d(6) }
      ,abilityWeighting: ['str', 'con']
      ,skillProficiencies: [ 'athletics', 'intimidation', 'perception', 'survival', 'medicine', 'history' ]
      ,spellcasting: false
      ,reactions: [
        {
          name: 'Parry'
          ,description: function(proficiencyBonus) { return 'Add +' + proficiencyBonus + ' to AC against one melee attack that would hit it.' }
        }
        ,{
          name: 'Shield'
          ,description: function(proficiencyBonus) { return 'When a creature makes an attack against an ally wihtin 5 feet that would hit, add +2 to their AC' }
        }
        ,{
          name: 'Redirect Attack'
          ,description: function(proficiencyBonus) { return 'Choose an ally within 5 feet and swap places. The chosen ally becomes the target instead.' }
        }
      ]
      ,bonusActions: []
    }
    ,{
      role: 'Light'
      ,hitDie: 10
      ,ac: function(dexModifier) { return (11 + d(4) + Math.min(2, dexModifier)) }
      ,abilityWeighting: ['dex', 'con']
      ,skillProficiencies: [ 'acrobatics', 'stealth', 'sleight-of-hand', 'investigation', 'perception', 'deception' ]
      ,spellcasting: false
      ,reactions: [
        {
          name: 'Parry'
          ,description: function(proficiencyBonus) { return 'Add +' + proficiencyBonus + ' to AC against one melee attack that would hit it.' }
        }
        ,{
          name: 'Shield'
          ,description: function(proficiencyBonus) { return 'When a creature makes an attack against an ally wihtin 5 feet that would hit, add +2 to their AC' }
        }
        ,{
          name: 'Redirect Attack'
          ,description: function(proficiencyBonus) { return 'Choose an ally within 5 feet and swap places. The chosen ally becomes the target instead.' }
        }
      ]
      ,bonusActions: []
    }
    ,{
      role: 'Ranged'
      ,hitDie: 8
      ,ac: function(dexModifier) { return (11 + d(4) + Math.min(2, dexModifier)) }
      ,abilityWeighting: ['dex', 'wis']
      ,skillProficiencies: [ 'acrobatics', 'stealth', 'nature', 'perception', 'survival', 'animal-handling' ]
      ,spellcasting: false
      ,reactions: []
      ,bonusActions: []
    }
    ,{
      role: 'Arcane Caster'
      ,hitDie: 6
      ,ac: function(dexModifier) { return 10 + dexModifier }
      ,abilityWeighting: ['int', 'cha']
      ,skillProficiencies: [ 'arcana', 'history', 'investigation', 'deception', 'persuasion' ,'sleight-of-hand' ]
      ,spellcasting: true
      ,school: [
        {
          name: 'Mage'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Fire Bolt', 'Light', 'Mage Hand', 'Prestidigitation']
            }
            ,{
              level: '1st level'
              ,spells: ['Detect Magic', 'Mage Armor', 'Magic Missile', 'Shield']
            }
            ,{
              level: '2nd level'
              ,spells: ['Misty Step', 'Suggestion']
            }
            ,{
              level: '3rd level'
              ,spells: ['Counterspell', 'Fireball', 'Fly']
            }
            ,{
              level: '4th level'
              ,spells: ['Greater Invisibility', 'Ice Storm']
            }
            ,{
              level: '5th level'
              ,spells: ['Cone Of Cold']
            }
          ]
        }
        ,{
          name: 'Archmage'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Fire Bolt', 'Light', 'Mage Hand', 'Prestidigitation', 'Shocking Grasp']
            }
            ,{
              level: '1st level'
              ,spells: ['Detect Magic', 'Identify', 'Mage Armor', 'Magic Missile']
            }
            ,{
              level: '2nd level'
              ,spells: ['Detect Thoughts', 'Mirror Image', 'Misty Step']
            }
            ,{
              level: '3rd level'
              ,spells: ['Counterspell', 'Fly', 'Lightning Bolt']
            }
            ,{
              level: '4th level'
              ,spells: ['Banishment', 'Fire Shield', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Cone Of Cold', 'Scrying', 'Wall Of Force']
            }
            ,{
              level: '6th level'
              ,spells: ['Globe Of Invulnerability']
            }
            ,{
              level: '7th level'
              ,spells: ['Teleport']
            }
            ,{
              level: '8th level'
              ,spells: ['Mind Blank']
            }
            ,{
              level: '9th level'
              ,spells: ['Time Stop']
            }
          ]
        }
        ,{
          name: 'Abjurer'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Blade Ward', 'Dancing Lights', 'Mending', 'Message', 'Ray Of Frost']
            }
            ,{
              level: '1st level'
              ,spells: ['Alarm', 'Mage Armor', 'Magic Missile', 'Shield']
            }
            ,{
              level: '2nd level'
              ,spells: ['Arcane Lock', 'Invisibility']
            }
            ,{
              level: '3rd level'
              ,spells: ['Counterspell', 'Dispel Magic', 'Fireball']
            }
            ,{
              level: '4th level'
              ,spells: ['Banishment', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Cone Of Cold', 'Wall Of Force']
            }
            ,{
              level: '6th level'
              ,spells: ['Flesh To Stone', 'Globe Of Invulnerability']
            }
            ,{
              level: '7th level'
              ,spells: ['Symbol', 'Teleport']
            }
          ]
        }
        ,{
          name: 'Apprentice Wizard'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Fire Bolt', 'Mending', 'Prestidigitation']
            }
            ,{
              level: '1st level'
              ,spells: ['Burning Hands', 'Disguise Self', 'Shield']
            }
          ]
        }
        ,{
          name: 'Bard'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Friends', 'Mage Hand', 'Vicious Mockery']
            }
            ,{
              level: '1st level'
              ,spells: ['Charm Person', 'Healing Word', 'Heroism', 'Sleep', 'Thunderwave']
            }
            ,{
              level: '2nd level'
              ,spells: ['Invisibility', 'Shatter']
            }
          ]
        }
        ,{
          name: 'Conjurer'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Acid Splash', 'Mage Hand', 'Poison Spray', 'Prestidigitation']
            }
            ,{
              level: '1st level'
              ,spells: ['Mage Armor', 'Magic Missile', 'Unseen Servant']
            }
            ,{
              level: '2nd level'
              ,spells: ['Cloud Of Daggers', 'Misty Step', 'Web']
            }
            ,{
              level: '3rd level'
              ,spells: ['Fireball', 'Stinking Cloud']
            }
            ,{
              level: '4th level'
              ,spells: ['Evards Black Tentacles', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Cloudkill', 'Conjure Elemental']
            }
          ]
        }
        ,{
          name: 'Diviner'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Fire Bolt', 'Light', 'Mage Hand', 'Message', 'True Strike']
            }
            ,{
              level: '1st level'
              ,spells: ['Detect Magic', 'Feather Fall', 'Mage Armor']
            }
            ,{
              level: '2nd level'
              ,spells: ['Detect Thoughts', 'Locate Object', 'Scorching Ray']
            }
            ,{
              level: '3rd level'
              ,spells: ['Clairvoyance', 'Fly', 'Fireball']
            }
            ,{
              level: '4th level'
              ,spells: ['Acane Eye', 'Ice Storm', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Rarys Telepathic Bond', 'Scrying']
            }
            ,{
              level: '6th level'
              ,spells: ['Mass Suggestion', 'True Seeing']
            }
            ,{
              level: '7th level'
              ,spells: ['Delayed Blast Fireball', 'Teleport']
            }
            ,{
              level: '8th level'
              ,spells: ['Maze']
            }
          ]
        }
        ,{
          name: 'Enchanter'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Friends', 'Mage Hand', 'Mending', 'Message']
            }
            ,{
              level: '1st level'
              ,spells: ['Charm Person', 'Mage Armor', 'Magic Missile']
            }
            ,{
              level: '2nd level'
              ,spells: ['Hold Person', 'Invisibility', 'Suggestion']
            }
            ,{
              level: '3rd level'
              ,spells: ['Fireball', 'Haste', 'Tongues']
            }
            ,{
              level: '4th level'
              ,spells: ['Dominate Beast', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Dominate Monster']
            }
          ]
        }
        ,{
          name: 'Evoker'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Fire Bolt', 'Light', 'Prestidigitation', 'Ray Of Frost']
            }
            ,{
              level: '1st level'
              ,spells: ['Burning Hands', 'Mage Armor', 'Magic Missile']
            }
            ,{
              level: '2nd level'
              ,spells: ['Mirror Image', 'Misty Step', 'Shatter']
            }
            ,{
              level: '3rd level'
              ,spells: ['Counterspell', 'Fireball', 'Lightning Bolt']
            }
            ,{
              level: '5th level'
              ,spells: ['Ice Storm', 'Stoneskin']
            }
            ,{
              level: '6th level'
              ,spells: ['Bigbys Hand', 'Cone Of Cold']
            }
            ,{
              level: '7th level'
              ,spells: ['Chain Lightning', 'Wall Of Ice']
            }
          ]
        }
        ,{
          name: 'Illusionist'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Dancing Lights', 'Mage Hand', 'Minor Illusion', 'Poison Spray']
            }
            ,{
              level: '1st level'
              ,spells: ['Color Spray', 'Disguise Self', 'Mage Armor', 'Magic Missile']
            }
            ,{
              level: '2nd level'
              ,spells: ['Invisibility', 'Mirror Image', 'Phantasmal Force']
            }
            ,{
              level: '3rd level'
              ,spells: ['Major Image', 'Phantom Steed']
            }
            ,{
              level: '4th level'
              ,spells: ['Phantasmal Killer']
            }
          ]
        }
        ,{
          name: 'Necromancer'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Chill Touch', 'Dancing Lights', 'Mage Hand', 'Mending']
            }
            ,{
              level: '1st level'
              ,spells: ['False Life', 'Mage Armor', 'Ray Of Sickness']
            }
            ,{
              level: '2nd level'
              ,spells: ['Blindness/Deafness', 'Ray Of Enfeeblement', 'Web']
            }
            ,{
              level: '3rd level'
              ,spells: ['Animate Dead', 'Bestow Curse', 'Vampiric Touch']
            }
            ,{
              level: '4th level'
              ,spells: ['Blight', 'Dimension Door', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Bigbys Hand', 'Cloudkill']
            }
            ,{
              level: '6th level'
              ,spells: ['Circle Of Death']
            }
          ]
        }
        ,{
          name: 'Transmuter'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Light', 'Mending', 'Prestidigitation', 'Ray Of Frost']
            }
            ,{
              level: '1st level'
              ,spells: ['Chromatic Orb', 'Expeditious Retreat', 'Mage Armor']
            }
            ,{
              level: '2nd level'
              ,spells: ['Alter Self', 'Hold Person', 'Knock']
            }
            ,{
              level: '3rd level'
              ,spells: ['Blink', 'Fireball', 'Slow']
            }
            ,{
              level: '4th level'
              ,spells: ['Polymorph', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Telekinesis']
            }
          ]
        }
      ]
      ,reactions: [
        {
          name: 'Counterspell'
          ,description: function(proficiencyBonus) { return '(3rd Level) If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.' }
        }
        ,{
          name: 'Feather Fall'
          ,description: function(proficiencyBonus) { return '(1st Level) Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.' }
        }
        ,{
          name: 'Hellish Rebuke'
          ,description: function(proficiencyBonus) { return '(1st Level) The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.' }
        }
        ,{
          name: 'Shield'
          ,description: function(proficiencyBonus) { return '(1st Level) Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.' }
        }
      ]
      ,bonusActions: []
    }
    ,{
      role: 'Divine Caster'
      ,hitDie: 8
      ,ac: function(dexModifier) { return 13 + d(6) }
      ,abilityWeighting: ['str', 'wis']
      ,skillProficiencies: [ 'athletics', 'insight', 'perception', 'medicine', 'religion', 'persuasion' ]
      ,spellcasting: true
      ,school: [
        {
          name: 'Priest'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Light', 'Sacred Flame', 'Thaumaturgy']
            }
            ,{
              level: '1st level'
              ,spells: ['Cure Wounds', 'Guiding Bolt', 'Sanctuary']
            }
            ,{
              level: '2nd level'
              ,spells: ['Lesser Restoration', 'Spiritual Weapon']
            }
            ,{
              level: '3rd level'
              ,spells: ['Dispel Magic', 'Spirit Guardians']
            }
          ]
        }
        ,{
          name: 'Druid'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Druidcraft', 'Produce Flame', 'Shillelagh']
            }
            ,{
              level: '1st level'
              ,spells: ['Entangle', 'Longstrider', 'Speak With Animals', 'Thunderwave']
            }
            ,{
              level: '2nd level'
              ,spells: ['Animal Messenger', 'Barkskin']
            }
          ]
        }
        ,{
          name: 'Cultist'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Light', 'Sacredflame', 'Thaumaturgy']
            }
            ,{
              level: '1st level'
              ,spells: ['Command', 'Inflict Wounds', 'Shield Of Faith']
            }
            ,{
              level: '2nd level'
              ,spells: ['Hold Person', 'Spiritual Weapon']
            }
          ]
        }
        ,{
          name: 'Archdruid'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Druidcraft', 'Mending', 'Poison Spray', 'Produce Flame']
            }
            ,{
              level: '1st level'
              ,spells: ['Cure Wounds', 'Entangle', 'Faerie Fire', 'Speak With Animals']
            }
            ,{
              level: '2nd level'
              ,spells: ['Animal Messenger', 'Beast Sense', 'Hold Person']
            }
            ,{
              level: '3rd level'
              ,spells: ['Conjure Animals', 'Meld Into Stone', 'Water Breathing']
            }
            ,{
              level: '4th level'
              ,spells: ['Dominate Beast', 'Locate Creature', 'Stoneskin', 'Wall Of Fire']
            }
            ,{
              level: '5th level'
              ,spells: ['Commune With Nature', 'Mass Cure Wounds', 'Tree Stride']
            }
            ,{
              level: '6th level'
              ,spells: ['Heal', 'Heroes Feast', 'Sunbeam']
            }
            ,{
              level: '7th level'
              ,spells: ['Firestorm']
            }
            ,{
              level: '8th level'
              ,spells: ['Animal Shapes']
            }
            ,{
              level: '9th level'
              ,spells: ['Foresight']
            }
          ]
        }
        ,{
          name: 'Blackguard'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Command', 'Protection From Evil And Good', 'Thunderous Smite']
            }
            ,{
              level: '1st level'
              ,spells: ['Branding Smite', 'Find Stead']
            }
            ,{
              level: '2nd level'
              ,spells: ['Binding Smite', 'Dispel Magic']
            }
          ]
        }
        ,{
          name: 'War Priest'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Light', 'Mending', 'Sacred Flame', 'Spare The Dying']
            }
            ,{
              level: '1st level'
              ,spells: ['Divine Favor', 'Guiding Bolt', 'Healing Word', 'Shield Of Faith']
            }
            ,{
              level: '2nd level'
              ,spells: ['Lesser Restoration', 'Magic Weapon', 'Prayer Of Healing', 'Silence', 'Spiritual Weapon']
            }
            ,{
              level: '3rd level'
              ,spells: ['Beacon Of Hope', 'Crusaders Mantle', 'Dispel Magic', 'Revivify', 'Spirit Guardians', 'Water Walk']
            }
            ,{
              level: '4th level'
              ,spells: ['Banishment', 'Freedom Of Movement', 'Guardian Of Faith', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Flame Strike', 'Mass Cure Wounds', 'Hold Monster']
            }
          ]
        }
      ]
      ,reactions: [
        {
          name: 'Parry'
          ,description: function(proficiencyBonus) { return 'Add +' + proficiencyBonus + ' to AC against one melee attack that would hit it.' }
        }
        ,{
          name: 'Shield'
          ,description: function(proficiencyBonus) { return 'When a creature makes an attack against an ally wihtin 5 feet that would hit, add +2 to their AC' }
        }
      ]
      ,bonusActions: []
    }
    ,{
      role: 'Blighter'
      ,hitDie: 8
      ,ac: function(dexModifier) { return 13 + d(6) }
      ,abilityWeighting: ['str', 'wis']
      ,skillProficiencies: [ 'athletics', 'insight', 'perception', 'medicine', 'religion', 'persuasion' ]
      ,spellcasting: true
      ,school: [
        {
          name: 'Mirran'
          ,spells: [
            {
              level: 'Cantrips'
              ,spells: ['Chill Touch', 'Dancing Lights', 'Mending', 'Poison Spray']
            }
            ,{
              level: '1st level'
              ,spells: ['Cure Wounds', 'Entangle', 'False Life', 'Ray Of Sickness']
            }
            ,{
              level: '2nd level'
              ,spells: ['Blindness/Deafness', 'Ray Of Enfeeblement', 'Web']
            }
            ,{
              level: '3rd level'
              ,spells: ['Bestow Curse', 'Slow', 'Vampiric Touch']
            }
            ,{
              level: '4th level'
              ,spells: ['Blight', 'Dominate Beast', 'Stoneskin']
            }
            ,{
              level: '5th level'
              ,spells: ['Contagion', 'Cloudkill' , 'Tree Stride']
            }
            ,{
              level: '6th level'
              ,spells: ['Circle Of Death', 'Heal', 'Wall Of Thorns']
            }
            ,{
              level: '7th level'
              ,spells: ['Finger Of Death']
            }
            ,{
              level: '8th level'
              ,spells: ['Abi Dalzims Horrid Wilting']
            }
            ,{
              level: '9th level'
              ,spells: ['Power Word Kill']
            }
          ]
        }
      ]
      ,reactions: []
      ,bonusActions: [
        {
          name: 'Wild Shape'
          ,description: function(proficiencyBonus) {
            shapes = '<br/>'
            if(proficiencyBonus >= 4) {
              shapes += '<i>Blight Bear</i>: AC 12, HP 90 (Bite: +7, 1d8+5 and 2x Claw: +7, 2d6+5)<br/>On a bite, target must make a DC' + (10+proficiencyBonus) + ' Constitution saving throw, taking 2d8 poison damage on failure, half on success<br/><br/>'
            }
            shapes += '<i>Plague Wolf</i>: AC 14, HP 60 (Bite: +5, 2d6+3)<br/>On a bite, target must make a DC' + (10+proficiencyBonus) + ' Constitution saving throw, taking 2d8 poison damage on failure, half on success'
            return shapes
          }
        }
      ]
    }
  ]

  for(i = 0; i < archetypes.length; i++) {
    if(archetypes[i].role == archetypeIdentifier) {
      return archetypes[i]
    }
  }
  return archetypes[d(archetypes.length) - 1]
}
