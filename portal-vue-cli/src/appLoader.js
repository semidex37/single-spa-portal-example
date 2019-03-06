import * as singleSpa from 'single-spa';
import { loadApp } from './helper'
import _ from 'lodash'

const app4 = 'app4'
const appGame = 'appGame'
const appCharlie = 'appCharlie'
const appBeta = 'appBeta'
const appAlpha = 'appAlpha'

export const loadAppConfig = {
  [appGame]: {
    name: 'appGame',
    hash: '/app4',
    appURL: '/appGame/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appCharlie]: {
    name: 'appCharlie',
    hash: '/app4',
    appURL: '/appCharlie/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appBeta]: {
    name: 'appBeta',
    hash: '/app5',
    appURL: '/appCharlie/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [appAlpha]: {
    name: 'appAlpha',
    hash: '/app4',
    appURL: '/appAlpha/singleSpaEntry.js',
    storeURL: null,
    globalEventDistributor: null
  },
  [app4]: {
    name: 'app4',
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
    let name = config.name;


    const appStatus = singleSpa.getAppStatus(name);

    if(appStatus !== null) {
      console.log('UNLOAD ### unloadApplication ###', name);
      singleSpa.unloadApplication(name);
    }

    const findApp = _.find(singleSpa.getAppNames(), (appName) => {
      if(appName === name) return true;
    });

    if(!findApp) {
      console.log('LOAD @@@ ', name, ' @@@');

      loadingPromises.push(
        loadApp(
          config.name,
          config.hash,
          config.appURL,
          config.storeURL,
          config.globalEventDistributor
        )
      );
    }
  }

  await Promise.all(loadingPromises);
}
