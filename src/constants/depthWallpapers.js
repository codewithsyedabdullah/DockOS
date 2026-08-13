/**
 * Depth Wallpaper Presets
 *
 * Maps wallpaper paths to their optimal depth effect settings.
 * `subjectTop` is the percentage from the TOP of the screen where the
 * foreground subject starts becoming visible (via gradient mask).
 *
 * Lower values = subject extends higher up (more clock overlap).
 * Higher values = subject stays lower (less overlap).
 */

export const depthPresets = {
  "/Wallpaper/26-Tahoe-Beach-Dawn-thumb.jpeg": {
    name: "Tahoe Beach Dawn",
    subjectTop: 35,
    suitable: true,
    recommended: true,
  },
  "/Wallpaper/GtB-Ex7WYAA9yAD.jpeg": {
    name: "Coastal Sunset",
    subjectTop: 32,
    suitable: true,
  },
  "/Wallpaper/HJv1q-1bAAAxn-W.jpg": {
    name: "Glacier Bay",
    subjectTop: 30,
    suitable: true,
  },
  "/Wallpaper/HKT-kq1W8AA8dat.jpg": {
    name: "Mountain Lake",
    subjectTop: 28,
    suitable: true,
  },
  "/Wallpaper/1175801.jpg": {
    name: "Desert Dunes",
    subjectTop: 34,
    suitable: true,
  },
};

/**
 * Get the depth preset for a given wallpaper path.
 * Returns the preset if found, or a default preset.
 */
export const getDepthPreset = (wallpaperPath) => {
  return depthPresets[wallpaperPath] || {
    name: "Custom",
    subjectTop: 30,
    suitable: true,
  };
};

/**
 * Check if a wallpaper has a depth-ready preset.
 */
export const hasDepthPreset = (wallpaperPath) => {
  return wallpaperPath in depthPresets;
};
