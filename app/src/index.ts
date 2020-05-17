// export class C {
//     private x = 10;
//     getX = () => this.x;
//     setX = (newVal: number) => { this.x = newVal; }
// }

// export let x = new C();
// export let y = { ...{ some: "value" } };

import appPackageJson from '../package.json';
import libPackageJson from '../../lib/package.json';

import { mulAB } from 'my-lib/lib.common';

export function run() : void {
  // console.log(`x.getX() == ${x.getX()}`);

  console.log(`App name "${appPackageJson.name}" with version ${appPackageJson.version}`);

  console.log(`Lib name "${libPackageJson.name}" with version ${libPackageJson.version}`);  

  console.log(`mulAB(2, 33) = `, mulAB(2, 33));
}

run();
