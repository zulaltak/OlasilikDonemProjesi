const calculateBtn = document.getElementById("calculate");
const backBtn = document.getElementById('back');

const inputScene = document.getElementById('input');
const outputScene = document.getElementById('output');

var data;

calculateBtn.addEventListener('click',  () =>  {
    inputScene.style.display = 'none';
    outputScene.style.display = 'flex';

    data = document. getElementById("data_set").value;
    var data_value = data.split(",");
    
    var mod = document.getElementById("mod");
    var standartSapma = document.getElementById("standartSapma");
    var medyan = document.getElementById("medyan");
    var varyans = document.getElementById("varyans");
    var ortalamaMutlakHesaplama = document.getElementById("ortalamaMutlakHesaplama");
    var degiskenKat = document.getElementById("degiskenKat");
    var harmonikOrtalama = document.getElementById("harmonikOrtalama");
    var aritmetikOrtalama = document.getElementById("aritmetikOrtalama");
    var geometrikOrtalama = document.getElementById("geometrikOrtalama");

    mod.innerHTML= modHesapla(data_value);
    standartSapma.innerHTML = standartSapmaHesapla(data_value);
    medyan.innerHTML = medyanHesapla(data_value);
    varyans.innerHTML = varyansHesapla(data_value);
    ortalamaMutlakHesaplama.innerHTML = ortalamaMutlakSapmaHesapla(data_value);
    degiskenKat.innerHTML = degiskenKatsayisiHesapla(data_value);
    harmonikOrtalama.innerHTML = harmonikOrtHesapla(data_value);
    aritmetikOrtalama.innerHTML = aritmetikOrtHesapla(data_value);
    geometrikOrtalama.innerHTML = geometrikOrtHesapla(data_value);
    

    /*LOGS
    console.log(modHesapla(data_value));
    console.log(aritmetikOrtHesapla(data_value));
    console.log(standartSapmaHesapla(data_value));
    console.log(medyanHesapla(data_value));
    console.log(varyansHesapla(data_value));
    console.log(ortalamaMutlakSapmaHesapla(data_value));
    console.log(degiskenKatsayisiHesapla(data_value));
    console.log(geometrikOrtHesapla(data_value));*/

})
backBtn.addEventListener('click',  () =>  {
    inputScene.style.display = 'flex';
    outputScene.style.display = 'none';
    
})

var modHesapla = function(numbers)
{
  let frekans = 0, tfrekans = 0, mod = "";
  for (var i = 0; i < numbers.length; i++) 
  {
    let tModArray = mod.split(',');
    let controlVal = false;
    tModArray.forEach((element)=>{if(parseFloat(element) == numbers[i]) controlVal = true;});
    if(controlVal)
      continue;
  
    numbers.forEach((element)=>{
    if(numbers[i] == element)
      frekans++;
    });
    if (frekans == tfrekans) 
    {
      mod += numbers[i] + ',';
    }
    else if(frekans > tfrekans)
    {
      mod = numbers[i] + ',';
      tfrekans = frekans;
    }
    frekans=0;
  }
  
    mod = mod.substring(0, mod.length - 1);
  
    if (tfrekans <= 1)
      return 'Mod yoktur';
  
    return 'Mod: ' + mod + ' , Frekans: ' + tfrekans;
}


var aritmetikOrtHesapla = function(numbers)
{
  var sum = 0;
  numbers.forEach(num => sum += parseFloat(num) / numbers.length);
  return sum.toFixed(2);
}


var geometrikOrtHesapla = function(numbers)
{
  var sum = 1;
  var numLen = parseFloat(numbers.length);
  numbers.forEach(num => sum *= parseFloat(num));
  return (Math.pow(sum, parseFloat(1.0 / numLen))).toFixed(2);
}


var standartSapmaHesapla = function(numbers)
{
  let aritmetikOrt = aritmetikOrtHesapla(numbers);
  let sum = 0;
  numbers.forEach(num => sum += Math.pow(num - aritmetikOrt, 2));
  return (Math.sqrt(sum / (numbers.length - 1))).toFixed(2);
}


var medyanHesapla = function(numbers)
{
  var medyan = 0;
  var numLen = numbers.length;
  numbers.sort(function(a, b){ return a - b; }); 
  if (numLen % 2 === 0)
    medyan = (parseFloat(numbers[numLen / 2 - 1]) + parseFloat(numbers[numLen / 2])) / 2;
  else
    medyan = numbers[(numLen - 1) / 2];
    
  return medyan;
}


var varyansHesapla = function(numbers)
{
  return (Math.pow(standartSapmaHesapla(numbers), 2)).toFixed(2);
}
  

var ortalamaMutlakSapmaHesapla = function(numbers)
{
let aritmetikOrt = aritmetikOrtHesapla(numbers);
var numLen = parseFloat(numbers.length);
let sum = 0;
numbers.forEach(num => sum += Math.abs(parseFloat(num) - parseFloat(aritmetikOrt)));
return (sum / numLen).toFixed(2);
}


var degiskenKatsayisiHesapla = function(numbers)
{
  let aritmetikOrt = parseFloat(aritmetikOrtHesapla(numbers));
  let standartSapma = parseFloat(standartSapmaHesapla(numbers));
  return (aritmetikOrt / standartSapma * 100).toFixed(2);
}


var harmonikOrtHesapla = function(numbers)
{
  var payda = 0;
  var numLen = parseFloat(numbers.length);
  numbers.forEach(num => payda += 1 / parseFloat(num));
  return (numLen / payda).toFixed(2);
}