import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    alt.emitClient(player, "loadDefaultLocations");
});