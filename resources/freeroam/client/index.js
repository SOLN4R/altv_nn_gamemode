"use strict";
/// <reference path="typings/altv-client.d.ts"/>
/// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as game from "natives";

alt.onServer("freeroam:spawned", () => {
  game.setPedDefaultComponentVariation(alt.Player.local.scriptID);
});

alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type) => {
  if (in_switch) {
    game.switchInPlayer(alt.Player.local.scriptID);
  } else {
    game.switchOutPlayer(alt.Player.local.scriptID, instant_switch, switch_type);
  }
});

alt.onServer("freeroam:sendNotification", sendNotification);

function sendNotification(textColor, bgColor, message, blink) {
  game.setColourOfNextTextComponent(textColor);
  game.setNotificationBackgroundColor(bgColor);
  game.setNotificationTextEntry("STRING");
  game.addTextComponentSubstringPlayerName(message);
  game.drawNotification(blink, false);
}
