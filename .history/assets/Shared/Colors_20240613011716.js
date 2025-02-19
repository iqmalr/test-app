// Colors.js

const hslToHex = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // grayscale
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default {
  white: "#fff",
  BLACK: "#45474B",
  PRIMARY: hslToHex(221.2, 83.2, 53.3),
  SECONDARY: hslToHex(210, 40, 96.1),
  LIGHT_GRAY: "#e6e8eb",
  PRIMARY_FOREGROUND: hslToHex(210, 40, 98),
  SECONDARY_FOREGROUND: hslToHex(222.2, 47.4, 11.2),
  GRAY: "#a6a4a4",
  GREY2: "c2c3c4",
  RED: "#FF0000",
  // NAME: hslToHex(A,B ,C ),
};
