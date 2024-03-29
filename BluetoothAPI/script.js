const btn = document.getElementById("startBtn");

btn.addEventListener("click", (e) => {
  navigator.bluetooth.getAvailability().then((rsp) => {
    if (rsp) {
      // Discovery options match any devices advertising:
      // . The standard heart rate service.
      // . Both 16-bit service IDs 0x1802 and 0x1803.
      // . A proprietary 128-bit UUID service c48e6067-5295-48d3-8d5c-0395f61792b1.
      // . Devices with name "ExampleName".
      // . Devices with name starting with "Prefix".
      //
      // And enables access to the battery service if devices
      // include it, even if devices do not advertise that service.
      let options = {
        filters: [
          { services: ["heart_rate"] },
          { services: [0x1802, 0x1803] },
          { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
          { name: "ExampleName" },
          { namePrefix: "Prefix" },
        ],
        optionalServices: ["battery_service"],
      };

      navigator.bluetooth
        .requestDevice(options)
        .then((device) => {
          console.log(`Name: ${device.name}`);
          // Do something with the device.
        })
        .catch((error) => console.error(`Something went wrong. ${error}`));
    } else {
      console.log("This device does not supports bluetooth.");
    }
  });
});
