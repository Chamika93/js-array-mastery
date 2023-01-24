import { methods } from '../constants/methods';

const getMethods = (code) => {
    const sanitisedCode = code.replace(/\s/g, '');
    const usedMethods = methods.reduce((acc, curr) => {
     if(sanitisedCode.includes(`.${curr}(`)) {
        acc.push(curr);
     }
     return acc;
    },[]);
    return usedMethods;
}

export default getMethods;