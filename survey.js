const readline = require('readline');
const profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? ', (answer) => {
  profile.name = answer;
  rl.question(`What's an activity you like doing? `, (answer)=>{
    profile.activity = answer;
    rl.question(`What do you listen to while doing that? `, (answer)=>{
      profile.jam = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer)=>{
        profile.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer)=>{
          profile.food = answer;
          rl.question(`Which sport is your absolute favourite? `, (answer)=>{
            profile.sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! What can you do? (read minds, travel back in time, etc..) `, (answer)=>{
              profile.superpower = answer;
              console.log(`\nHello ${profile.name}. I hear you enjoy ${profile.activity} in your spare time, when you have it, ha ha.
              \nI hear you like to listen to ${profile.jam} while you're doing that, that's... neat. I guess.
              \nI think you should probably just stick to eating ${profile.meal}, since you like ${profile.food} so much... 
              \nOr maybe try your luck at ${profile.sport} instead? You might be a better fit doing that... I mean this is coding after all! Who do you think you are?
              \n... OH NO.... I forgot... you can ${profile.superpower.toUpperCase()}!!!... YOU GOT THIS!!! SEE YA!!!
              `);
              rl.close();
            });
          });
        });
      });
    });
  });
  
});
