export enum ScreenTypes {
  // UnPermissioned
  ON_BOARDING = "Onboarding",

  // Permissioned
  STACK_PERMISSIONED = "StackPermissioned",

  EXTERNAL_LINK = "ExternalLink",

  STACK_HOME = "StackHome",
  HOME = "HomeView",
  DETAIL = "DetailView",

  STACK_SEARCH = "StackSearch",
  SEARCH = "Likes",

  STACK_LIKES = "StackLikes",
  LIKES = "Likes",

  STACK_SETTINGS = "StackSettings",
  SETTINGS = "Settings",

  // Shared by tabs
  SHARED_POST_DETAIL = "SharedPostDetail",
  SHARED_POST_WRITE = "SharedPostWrite",
  SHARED_POST_CHAT = "SharedPostChat",
}

export type PermissionedParamsList = {
  [ScreenTypes.STACK_HOME]: undefined;
  [ScreenTypes.STACK_SEARCH]: undefined;
  [ScreenTypes.STACK_LIKES]: undefined;
  [ScreenTypes.STACK_SETTINGS]: undefined;
};

export type HomeParamsList = {
  [ScreenTypes.HOME]: undefined;
  [ScreenTypes.DETAIL]: undefined;
  [ScreenTypes.EXTERNAL_LINK]: { url: string } | undefined;
};

export type SearchParamsList = {
  [ScreenTypes.SEARCH]: undefined;
  [ScreenTypes.DETAIL]: undefined;
  [ScreenTypes.EXTERNAL_LINK]: { url: string } | undefined;
};

export type LikesParamsList = {
  [ScreenTypes.LIKES]: undefined;
  [ScreenTypes.DETAIL]: undefined;
  [ScreenTypes.EXTERNAL_LINK]: { url: string } | undefined;
};

export type SettingsParamsList = {
  [ScreenTypes.SETTINGS]: undefined;
  [ScreenTypes.EXTERNAL_LINK]: { url: string } | undefined;
};
