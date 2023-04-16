const getArgs = (args) => {
  const [, , ...rest] = args;

  return rest.reduce((acc, value, index, array) => {
    if (value.charAt(0) === "-") {
      if (index === array.length - 1) {
        acc[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== "-") {
        acc[value.substring(1)] = array[index + 1];
      } else {
        acc[value.substring(1)] = true;
      }
    }
    return acc;
  }, {});
};

export { getArgs };
