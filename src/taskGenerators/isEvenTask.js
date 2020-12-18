import randomNum from '../tools/randomGen.js';

export default function(){
  const task = randomGen({ min: 0, max: 100 });
  const answer = task % 2 === 0 ? 'yes' : 'no';
  return [ task, answer ];
}

