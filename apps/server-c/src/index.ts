import { serverC } from './app/server-c';
import * as cowsay from 'cowsay';

const output: string = cowsay.say({ text: 'Hello from typescript!' });

console.log(output);

console.log(`Running ${serverC()}`);
