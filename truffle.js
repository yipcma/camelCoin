module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "localhost",
            port: 8545, // ganache-cli default
            port: 7545, // ganache default
            network_id: "*"
        }
    }
};
