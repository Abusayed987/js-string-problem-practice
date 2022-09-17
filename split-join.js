// practice:01

const lyrics = 'Shishir veJa SOBUJ GASHE. SURJO JOKON misti hase. toKon biYa koRai dImu';
const wordSplit = lyrics.split(' ');
const sentenceSplit = lyrics.split('.');
const letterSplit = lyrics.split('');
// console.log(wordSplit, sentenceSplit,letterSplit);

// practice:02
var lyrics2 = 'apon ghor adar kalo vule geso naki. tumay nite anbe ora four Pa ola palki.'
var wordSplit2 = lyrics2.split(' ');
var sentenceSplit2 = lyrics2.split('.');
const letterSplit2 = lyrics2.split('');
// console.log(wordSplit2,sentenceSplit2,letterSplit2);

// practice:03
const lyrics3 = '      porer jaiga porer jomi gor banaiya ami roi . ami to sei gorer makil noi            ';
const wordSplit3 = lyrics3.split(' ');
const letterSplit3 = lyrics3.split('');
const sentenceSplit3 = lyrics3.split('.')
// console.log(wordSplit3,letterSplit3,sentenceSplit3);


// practice:05 .slice
const slice = lyrics.slice(5, 15)
// console.log(slice);
const slice2 = lyrics2.slice(10, 20)
// console.log(slice2);
const slice3 = lyrics3.slice(0, 26);
// console.log(slice3);


// practice:06 .trim
const trim = lyrics3.trim();
console.log(trim);
// practice:07 .join
const join = ['porer', 'jaiga','porer', 'jomi','gor', 'banaiya','ami', 'roi','.', 'ami','to', 'sei','gorer', 'makil','noi']
console.log(join.join(' '));
console.log(join.join('>'));
console.log(join.join(' '));
// practice:08