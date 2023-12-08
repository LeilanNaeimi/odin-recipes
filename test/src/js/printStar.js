function printStar(rows) {
  //loop to print rows
  for (let i = rows; i >= 1; i--) {
    let row = '';

    //loop to print space
    for (let j = 1; j <= (rows - 1) * 2; j++) {
      row += ' ';
    }

    //loop to print *
    for (let k = 1; k <= i; k++) {
      row += '* ';
    }
    console.log(row);
  }
}

printStar(7);
