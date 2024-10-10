import { welcome } from './helpers/output.js';
import { parseArgs, parseCommandArgs } from './helpers/commandLine.js';

const args = parseArgs();

welcome(args.username);
