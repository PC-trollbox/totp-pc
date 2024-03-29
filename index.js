const crypto = require("crypto");


module.exports = {
    /**
     * Creates a new secret for getHash function. If secrets get leaked, then the security is compromised.
     * 
     * @returns {String} A random string.
     */
    createNewSecret: function secret() {
        let endToken = "";
        while (endToken.length < 16) {
            endToken = endToken + crypto.randomBytes(1).toString("hex");
        }
        return endToken.split("", 16).join(""); // Return a new secret based on cryptography random number generator.
    },

    /**
     * 
     * @param {String} secret The secret generated by some script or createNewSecret.
     * @param {Number} ogtime The time to start counting from.
     * @param {String} algorithm TOTP hashing algorithm (default = sha256)
     * @param {Number} frame TOTP timer (default = 30 seconds)
     * @param {Number} length TOTP length (default = 6 digits)
     * @param {Number} time Current time (default = Math.floor(Date.now() / 1000))
     */
    getHash: function hash(secret, ogtime, algorithm = "sha256", frame = 30, length = 6, time = Math.floor(Date.now() / 1000)) {
        let c = Math.floor((time - ogtime) / frame); // Create a counter for hash function
        let dM = length ** 10; // Conversion parameter for length
        let hash = crypto.createHash(algorithm).update(secret + c).digest("hex"); // Create a hash with secret and counter.
        let conversion = parseInt(hash, 16); // Start conversion by putting hash as a Number.
        conversion = conversion % dM; // Convert and use dM.
        conversion = conversion.toString(); // Convert into string.
        conversion = conversion.split("", length); // Convert into array and only allow length digits in.
        conversion = conversion.join(""); // Convert back into string.
        return conversion; // Return new TOTP.
    }
}