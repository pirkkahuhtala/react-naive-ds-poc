const generateModifier = (prop, modifier, value) => {
  return `.${modifier} { ${prop}: ${value}; }`;
};

export const generateModifiersFromSizes = (props, sizes) =>
  props
    .reduce(
      (propStyles, [prop, modifier]) => [
        ...propStyles,
        Object.keys(sizes)
          .reduce(
            (modifiers, size) => [
              ...modifiers,
              generateModifier(prop, `${modifier}-${size}`, sizes[size])
            ],
            []
          )
          .join("\n")
      ],
      []
    )
    .join("\n");

export const generateModifiersFromProp = (prop, obj) =>
  Object.keys(obj)
    .reduce(
      (modifiers, key) => [
        ...modifiers,
        generateModifier(prop, `${prop}--${key}`, obj[key])
      ],
      []
    )
    .join("\n");
