const pbkdf2 = require('pbkdf2');
const randomHash = require('random-hash');

type ConfigHash = {
    saltlen: number,
    keylen: number,
}

const defaultConfigHash: ConfigHash = {
    saltlen: 512,
    keylen: 1000,
}

export function hash(value: string, config: ConfigHash = defaultConfigHash) {
    let salt = randomHash.generateHash({ length: config.saltlen });
    let hash = pbkdf2.pbkdf2Sync(value, salt, Number(process.env.HASH_ITERATION), config.keylen, 'sha512').toString('hex');
    return [salt, hash].join('$');
}

export function verify(password: string, combined: string, config: ConfigHash = defaultConfigHash) {
    const [ salt, originalHash ] = combined.split('$');
    const hash = pbkdf2.pbkdf2Sync(password, salt, Number(process.env.HASH_ITERATION), config.keylen, 'sha512').toString('hex');
    return hash === originalHash;
}