import addMainContents from './replaceProductComponent.js';
import setProductIdToSessionStorage from './setSessionStorage.js';

const render = async () => {
  await addMainContents();
  setProductIdToSessionStorage();
};

render();
