for (let i = 0; i < 10; i++) {
  ((index) => {
    setTimeout(() => { console.log(index); }, i * 1000);
  })(i);
}
