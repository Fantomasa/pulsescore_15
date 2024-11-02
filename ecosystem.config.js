module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      instances: 1, // Use only one instance
      exec_mode: "fork" // Fork mode
    }
  ]
};
