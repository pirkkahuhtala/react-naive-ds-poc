import { generateModifiersFromSizes, generateModifiersFromProp } from "./util";
import grid from "./modifiers/grid";
import reset from "./modifiers/reset";
import utility from "./modifiers/utility";

const addTitle = (title, modifiers) => "/* " + title + " */\n" + modifiers;

const css = obj =>
  [
    addTitle("reset", reset),
    addTitle("grid", grid(obj.breakpoints, obj.sizes.tiny)),
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
        obj.sizes
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
        obj.borderRadius
      )
    ),
    addTitle("colors", generateModifiersFromProp("color", obj.colors)),
    addTitle("layers", generateModifiersFromProp("z-index", obj.layers)),
    addTitle(
      "fonts",
      generateModifiersFromProp("font-size", obj.sizes) +
        "\n" +
        generateModifiersFromProp("font-weight", obj.fontWeights)
    ),
    utility
  ].join("\n\n");

const ds = obj => ({
  css: css(obj).replace(/\s+/g, ""),
  theme: obj
});

export default ds;
