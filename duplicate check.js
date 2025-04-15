const xlsx = require('xlsx');

// Excelファイル読み込み
var workbook1 = xlsx.readFile('./20250415.xlsx');
var workbook2 = xlsx.readFile('./Master_20250415.xlsm');
// var worksheet2 = workbook2. Sheets[ sheet_ name];
// シートの取得
const worksheet1 = workbook1.Sheets[workbook1.SheetNames[0]];
const worksheet2 = workbook2.Sheets[workbook2.SheetNames [0]];
// シートをまるごと取得し、json化する
const sheet1 = xlsx.utils.sheet_to_json(worksheet1);
const sheet2 = xlsx.utils.sheet_to_json(worksheet2);
// console.1og(sheet1);
// "Team"キーの値だけを取り出して配列を作成1/ Node.js （Javascript）でキー名に半角スペース（）などが含まれている場合は、ドット記法（
const addTeamNames = sheet1.map (teamItem => teamItem["XXX ID"]);
const addUnitNames = sheet1.map (unitItem => unitItem["YYY ID"]);
const masterTeamNames = sheet2.map(ctsItem => ctsItem["XXX ID"]);
const masterUnitNames = sheet2.map(unitItem => unitItem["YYY ID"]);
// filter関数で重複を取得
// https://qiita.com/hirakuma/items/fd7b6492939951190496
const arrayTeam = masterTeamNames.filter(i => addTeamNames.includes(i))
const arrayUnit = masterUnitNames.filter(i => addUnitNames.includes(i))
                                          
//［」で出力されれば、重複なし
console.log(arrayTeam)
console. log(arrayUnit)
