import * as singleSpa from 'single-spa';
import { loadApp } from './helper'
import _ from 'lodash'

import { GlobalEventDistributor } from './globalEventDistributor';

const globalEventDistributor = new GlobalEventDistributor();

const app4 = 'app4';
const appGame = 'appGame';
const appCharlie = 'appCharlie';
const appBeta = 'appBeta';
const appAlpha = 'appAlpha';

export const loadAppConfig = {
  [appGame]: {
    appName: 'appGame',
    hash: '/app4',
    appURL: '/appGame/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appCharlie]: {
    appName: 'appCharlie',
    hash: '/app4',
    appURL: '/appCharlie/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appBeta]: {
    appName: 'appBeta',
    hash: '/app5',
    appURL: '/appCharlie/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appAlpha]: {
    appName: 'appAlpha',
    hash: '/app4',
    appURL: '/appAlpha/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [app4]: {
    appName: 'app4',
    hash: '/app4',
    appURL: '/app4/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  }
}

export async function appLoader(apps) {
  const loadingPromises = [];

  for(let i in apps) {
    let base = apps[i].base;
    let config = _.extend(_.clone(loadAppConfig[base]), apps[i]);
    let appName = config.appName;


    const appStatus = singleSpa.getAppStatus(appName);

    if(appStatus !== null) {
      console.log('UNLOAD ### unloadApplication ###', appName);
      singleSpa.unloadApplication(appName);
    }

    const findApp = _.find(singleSpa.getAppNames(), (_appName) => {
      if(_appName === appName) return true;
    });

    if(!findApp) {
      console.log('LOAD @@@ ', appName, ' @@@');

      // let customProps = _.extend(config.options)
      let customProps = {
        appName: config.appName,
        globalEventDistributor: globalEventDistributor,
        options: config
      };

      loadingPromises.push(
        loadApp(
          config.appName,
          config.hash,
          config.appURL,
          config.storeURL,
          customProps
        )
      );
    }
  }

  await Promise.all(loadingPromises);
}
