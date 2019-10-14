import { generateModifiersFromSizes, generateModifiersFromProp } from "./util";
import grid from "./modifiers/grid";
import reset from "./modifiers/reset";
import utility from "./modifiers/utility";

const addTitle = (title, modifiers) => "/* " + title + " */\n" + modifiers;

const css = ({ custom, theme, typography }) =>
  [
    `html, body {
      font-size: 16px;
    }`,
    addTitle("reset", reset),
    addTitle("grid", grid(theme.breakpoints, theme.sizes.tiny)),
    addTitle(
      "whitespaces",
      generateModifiersFromSizes(
        [
          ["padding", "padding"],
          ["padding-left", "padding--left"],
          ["padding-right", "padding--right"],
          ["padding-top", "padding--top"],
          ["padding-bottom", "padding--bottom"],
          ["margin-left", "margin--left"],
          ["margin-right", "margin--right"],
          ["margin-top", "margin--top"],
          ["margin-bottom", "margin--bottom"]
        ],
        theme.sizes
      )
    ),
    addTitle(
      "borders",
      generateModifiersFromSizes(
        [
          ["border-radius", "border--radius"],
          ["border-top-left-radius", "border--top-left-radius"],
          ["border-top-right-radius", "border--top-right-radius"],
          ["border-bottom-left-radius", "border--bottom-left-radius"],
          ["border-bottom-right-radius", "border--bottom-right-radius"]
        ],
        theme.borderRadius
      )
    ),
    addTitle("colors", generateModifiersFromProp("color", theme.colors)),
    addTitle("layers", generateModifiersFromProp("z-index", theme.layers)),
    addTitle(
      "fonts",
      generateModifiersFromProp("font-size", theme.sizes) +
        "\n" +
        generateModifiersFromProp("font-weight", theme.fontWeights) +
        "\n" +
        Object.keys(typography)
          .reduce(
            (modifiers, key) => [
              ...modifiers,
              `${key}, .font--type-${key} { ${typography[key](theme)} }`
            ],
            []
          )
          .join("\n")
    ),
    utility,
    custom(theme)
  ].join("\n\n");

const ds = obj => ({
  css: css(obj), // .replace(/\s+/g, ""),
  theme: obj
});

export default ds;
