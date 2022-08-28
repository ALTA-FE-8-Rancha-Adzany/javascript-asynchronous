function jajanBoba(uang, callback) {
  const boba = 5000;
  console.log(`kamu jajan boba Rp.${boba}`);
  callbackconsole.log(`sisa uang kamu Rp.${uang - boba}), jajanSeblak`);
  uang -= boba;
  console.log(jajanSeblak(uang));
}
function jajanSeblak(uang) {
  const seblak = 8000;
  if (uang >= seblak) {
    uang -= seblak;
    return `kamu jajan seblak Rp.${seblak}
  sisa uang kamu Rp.${uang}`;
  } else {
    return Maaf`uang kamu belum cukup untuk membeli seblak/nSisa uang kamu sebesar Rp.${uang}`;
  }
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
