// .pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      const allowList = [
        "@tailwindcss/oxide",
        "core-js",
        "es5-ext",
        "sharp",
        "uglifyjs-webpack-plugin",
        "unrs-resolver",
      ];
      if (allowList.includes(pkg.name)) {
        pkg.scripts = pkg.scripts || {};
      }
      return pkg;
    },
  },
};
