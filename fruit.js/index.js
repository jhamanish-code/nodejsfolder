const figlet = require("figlet");

figlet("Manish Jha", (err, data) => {
  if (err) {
    console.log("Kuch galat ho gaya...");
    console.dir(err);
    return;
  }
  console.log(data);
});
