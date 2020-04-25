// export class C {
//     private x = 10;
//     getX = () => this.x;
//     setX = (newVal: number) => { this.x = newVal; }
// }

// export let x = new C();
// export let y = { ...{ some: "value" } };

import appPackageJson from '../package.json';
import libPackageJson from '../../lib/package.json';

export function run() {
  // console.log(`x.getX() == ${x.getX()}`);

  console.log(`App name "${appPackageJson.name}" with version ${appPackageJson.version}`);

  console.log(`Lib name "${libPackageJson.name}" with version ${libPackageJson.version}`);  
}

run();
