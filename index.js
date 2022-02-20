
let radArg = process.argv.slice(2);

function areaOfCircle(rad) {
 
  let area = Math.PI * Math.pow(rad,2);
  
  console.log(`Yarıçapı ${rad} olan dairenin alanı: ${area}`)
  
}

areaOfCircle(Number(radArg[0]));
