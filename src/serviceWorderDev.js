export const serviceWorkerDev = () => {
  let swPath = `${process.env.PUBLIC_URL}serviceWorker.js`;
  console.log(swPath, process.env.PUBLIC_URL);
  navigator.serviceWorker
    .register(swPath)
    .then((res) => console.log(res.active, "res"));
};
