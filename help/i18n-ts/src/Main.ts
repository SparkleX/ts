import * as i18n from "i18n";

i18n.configure({
  locales: ["en", "cn"],
  defaultLocale: "cn",
  directory: __dirname + "/i18n"
});
var greeting = i18n.__("Hello");
console.debug(greeting);
