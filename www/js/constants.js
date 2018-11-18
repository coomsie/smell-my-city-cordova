/**
 * Namespace for all constants in the application.
 * @namespace Constants
 */
var Constants = {

  CLIENT_ID: "e431cd0eb45ae1619d5208410060470c",
  LOCATION_SERVICES: true,
  PLATFORM_CALLBACK_ONREADY: true,
  APP_VERSION: "0.1.0",
  URL_API: "http://staging.api.smellpittsburgh.org",
  STAGING: "https://localhost",
  URL_MAP: "http://staging.api.smellpittsburgh.org/visualization",

  // Page Ids
  STARTUP_PAGE: "startup",
  HOME_PAGE: "home",
  MAP_PAGE: "map",
  SETTINGS_PAGE: "settings",
  ABOUT_PAGE: "about",
  LOCATION_SELECT_PAGE: "locationselect",
  HOW_IT_WORKS_PAGE: "howitworks",

  // Local Storage keys
  USER_HASH_KEY: "user_hash",
  NOTIFICATION_ENABLED_KEY: "notification",
  SMELL_NOTIFICATION_ENABLED_KEY: "smell_notification",
  SMELLS_KEY: "smells",
  EMAIL_KEY: "email",
  STARTUP_KEY: "startup",
  NAME_KEY: "name",
  PHONE_KEY: "phone",

  // Topic strings
  GLOBAL_TOPIC: "GlobalTopic",
  PITTSBURGH_AQI_TOPIC: "pghaqi",
  SMELL_REPORT_TOPIC: "SmellReports",

  DEFAULT_SIDE_MENU_BG: "../img/side-menu-backgrounds/default.png",
  DEFAULT_SIDE_MENU_BG_COLOR: "#97c93c",

  // Location services enums
  AuthorizationEnum: {
    NOT_REQUESTED: "not requested",
    GRANTED: "granted",
    DENIED: "denied",
    DENIED_ALWAYS: "denied always",
  },
  AccuracyEnum: {
    ENABLED: "enabled",
    DISABLED: "disabled"
  },

  //languages
  LANGUAGES: ["English","Español"],
  APP_TEXT: [],

}
