function applyDefault(defaults, key, value) {
    // Logic to apply default values
    if (value === undefined) {
        // Apply the default value from `defaults`
        return defaults[key];
    }
    return value;
}

function processProps(props, defaults, skipKeys = []) {
    const processedProps = {};
    
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const skip = skipKeys.includes(key);
            
            if (!skip) {
                processedProps[key] = applyDefault(defaults, key, props[key]);
            } else {
                processedProps[key] = props[key];
            }
        }
    }
    
    return processedProps;
}

// Example usage:
const props = {
    a: 1,
    b: undefined,
    c: 3
};

const defaults = {
    a: 10,
    b: 20,
    c: 30
};

const skipKeys = ['a'];

const processedProps = processProps(props, defaults, skipKeys);
console.log(processedProps);  // Output: { a: 1, b: 20, c: 3 }
