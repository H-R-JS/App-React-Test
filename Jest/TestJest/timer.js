export async function sleep(t) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      console.log("Yo Bitch !");
    }, t * 1000);
  });
}
