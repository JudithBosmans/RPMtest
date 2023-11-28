import React from "react";
import {
  AvatarCreator,
  AvatarCreatorConfig,
  AvatarExportedEvent,
  UserSetEvent,
} from "@readyplayerme/react-avatar-creator";

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none" };

export default function AvatarCreatorProject() {
  const handleOnUserSet = (event: UserSetEvent) => {
    console.log(`User ID is: ${event.data.id}`);
  };

  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <AvatarCreator
      subdomain="test-appplication"
      config={config}
      style={style}
      onUserSet={handleOnUserSet}
      onAvatarExported={handleOnAvatarExported}
    />
  );
}
