import {join} from 'node:path';
import {renameSync, readdirSync} from 'node:fs';
import {getAddress} from '@ethersproject/address';

const TOKENS = './tokens';

const dirs = readdirSync(TOKENS).filter(name => name !== getAddress(name));

for (const name of dirs) {
	renameSync(join(TOKENS, name), join(TOKENS, getAddress(name)));
}
const getToken = join(TOKENS,	)