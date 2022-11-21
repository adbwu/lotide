const reverse = function(strings) {
  for (let j = 2; j < strings.length; j++) {
    let revString = [];
    for (let i = strings[j].length - 1; i >= 0; i--) {
      revString.push(strings[j][i]);
    }
    revString = revString.join("");
    console.log(revString);
  }
};

reverse(process.argv);