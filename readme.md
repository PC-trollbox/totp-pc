# TOTP-PC

I tried(tm).

I tried doing it as in specification, but... failed.
That will always happen when you don't read the docs enough.

## Methods

### createNewSecret()

As the name suggests, creates a new random secret. It must be random, so it is random!

### getHash(secret, ogtime, algorithm, frame, length, time)

secret is a String - The secret generated by some script or createNewSecret.

ogtime is a Number - The time to start counting from.

algorithm is a String with default - TOTP hashing algorithm (default = sha256)

frame is a Number with default - TOTP timer (default = 30 seconds)

length is a Number with default - TOTP length (default = 6 digits)

time is a Number with default - Current time (default = Math.floor(Date.now() / 1000))

This gets the actual TOTP code. It generates the code using the specified secret and time.
It also creates a hash. That's why the algorithm is required.

# index.html

index.html inside this module adds a GUI to generate keys. You can provide it to the user so they could understand everything without even installing Node.JS!

## Features

### h button

H button hides or reveals the code. By default, the codes are hidden, and you'll need to unblock the codes with the H button.

### i button

I button imports the backup made with E button. Unless you modify PC-TOTP, you can only make an encrypted backup.

### d button (aka easter egg)

D button has... no meaning at all. It is used to display the easter egg and "easteregger 2fa". Targeted for users, but tech geeks also have rights on valid solving.

Solving routes: PC#7105 (Discord)

### e button

E button exports the backup for importing with the I button.

You'll have to put a password on it, because unless you modify PC-TOTP, you can only make an encrypted backup.

### + button

Adds a "counter". Once you complete the setup, the counter will display:
 - the name of the counter
 - the code
 - the delete option [x button]

### x button

On a counter, there's an X button. It removes the counter.

Notice that if you have the counter used as a factor, you first need to get another way of getting codes, or remove multi-factor authentication.

# eof
