const algorithms = {
  RSASHA1: 0,
  RSASHA256: 1
};

const toSolidity = rawData => ({
  ...rawData,
  algorithm: algorithms[rawData.algorithm.replace("-", "")],
  hash: "0x" + rawData.hash.toString("hex"),
  signature: "0x" + rawData.signature.toString("hex"),
  exponent: "0x" + rawData.exponent.toString(16),
  modulus: "0x" + rawData.modulus.toString("hex").slice(2)
});

module.exports = toSolidity;
