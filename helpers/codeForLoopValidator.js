const codeForLoopValidator = (code) => {
    const sanitisedCode = code.replace(/\s/g, '');
    return sanitisedCode.includes('for(');
}

export default codeForLoopValidator;