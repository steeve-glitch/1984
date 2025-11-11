#!/usr/bin/env node
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const pkgName = '@rollup/rollup-linux-x64-gnu';
const pkgVersion = '4.53.1';

if (process.platform !== 'linux') {
  process.exit(0);
}

if (process.env.ROLLUP_NATIVE_INSTALLING === '1') {
  process.exit(0);
}

try {
  require.resolve(pkgName);
  process.exit(0);
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }
}

const env = { ...process.env, ROLLUP_NATIVE_INSTALLING: '1' };
const installCommand = `npm install ${pkgName}@${pkgVersion} --no-save --prefer-offline`;

try {
  execSync(installCommand, { stdio: 'inherit', env });
} catch (error) {
  console.warn(`\n[postinstall] Failed to install optional ${pkgName}. Vite may still fail to start on Linux.`);
  console.warn(error?.message ?? error);
}
