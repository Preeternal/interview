function funcA() {
  const a = 1;
  function funcB() {
    const b = 2;
    function funcC() {
      const c = 3;
      console.log('funcC:',a,b,c)
    }
    funcC();
    console.log('funcB:', a,b);
  }
  funcB();
  console.log('funcA:', a)
}

funcA();