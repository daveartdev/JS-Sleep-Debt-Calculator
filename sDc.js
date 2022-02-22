const getSleepHours = (day) => {
  switch (day) {
  case 'monday':
      return 8
      break;  
  case 'tuesday':
      return 8
      break;  
  case 'wednesday':
      return 8
      break;  
  case 'thursday':
      return 8
      break;  
  case 'friday':
      return 8
      break;  
  case 'saturday':
      return 8
      break;  
  case 'sunday':
      return 8
      break;  
  default:
      return 'Error!'
  }
};

const getActualSleepHours = () => 
  getSleepHours('sunday') +
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
console.log ('You got the perfect amount of sleep');
}
  else if (actualSleepHours >= idealSleepHours){
console.log ('You overslept');
}
  else if (actualSleepHours < idealSleepHours){
console.log ('You need more sleep');  
  }
};  

calculateSleepDebt();
