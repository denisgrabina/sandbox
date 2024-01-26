function beginning(xs) {
  const xsLength = xs.length;
  for (let i = 1; i <= xsLength; i++) {
    let startNum = parseInt(xs.substring(0, i));
    let seq = startNum.toString();
    let curNum = startNum;
    
    while (seq.length < xsLength) {
      curNum += 1;
      seq += curNum.toString();
    }
    
    if (seq === xs) {
      return startNum;
    }
  }
  
  return 0;
}