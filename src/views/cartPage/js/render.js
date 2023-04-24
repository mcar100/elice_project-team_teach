import addMainContents from './replaceProductComponent.js';
import aa from './setSessionStorage.js';

const render = async () => {
  await addMainContents();
  aa();
};

render();
