import * as alt from 'alt-client';
import * as native from 'natives';

// When using things such as markers, you will notice your webview flicker when the marker is being rendered. This is a well know GTA V bug and can be easily fixed.
alt.everyTick(() => {
    native.drawRect(0, 0, 0, 0, 0, 0, 0, 0, false);
});