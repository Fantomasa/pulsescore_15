module.exports = {
  apps: [
    {
      name: "pulsescore",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "fork"
    }
  ]
};
