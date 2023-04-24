import addMainContents from './replaceProductComponent.js';
import * as setSession from './setSessionStorage.js';

const render = async () => {
  await addMainContents();
  setSession.setSessionOne();
  setSession.setSessionChecked();
};

render();
