const codeMaker = (code, input, functionName) => {
    let fullCode= `
    var logBackup = console.log;
    var logMessages = [];

    console.log = function() {
      logMessages.push.apply(logMessages, arguments);
      logBackup.apply(console, arguments);
    };\n` + code + `
    console.log = logBackup;
    return {ans:${functionName}(${JSON.stringify(input)}), logs:logMessages};
    `
    return fullCode;
}

const codeExecutor = (code, testCases, functionName) => {
    const results = [];
    for (let i=0; i < testCases.length; i++) {
        try {
            const fullCode = codeMaker(code, testCases[i].input, functionName);
            const result = new Function(fullCode)();
            results.push(result);
        } catch (error) {
            results.push({error: error});
        }
    }
    return results;
}

export default codeExecutor;