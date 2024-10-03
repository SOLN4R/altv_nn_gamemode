import * as alt from 'alt-client';

alt.onServer("loadDefaultLocations", () => {

    alt.loadDefaultIpls(); /*
    ONeils Farm Normal                      2469.03 4955.278 45.11892
    LifeInvader                             -1047.9 -233.0 39.0
    Aircraft Carrier            	        3084.73 -4770.709 15.26167
    Train Bridge                            -496.6945 4399.4902 32.7340
    Tunnel	                                -49.415 -558.287 30.10
    Stadium	                                -248.491 -2010.509 34.574
    Lesters Factory                         716.84 -962.05 31.59
    FIB Crash Site (Fountain)               188.9406 -678.9758 43.1303
    Sandy Shores River                      -17.7362 3038.7824 40.9399
    Los Santos Mansion                      -1117.4505 297.4681 65.9787
    PDM (Simeons)                           -54.30 -1109.3767 26.4358
    Jewel Store                             -630.07 -236.332 38.05704
    Max Renda Shop                          -585.8247 -282.72 35.45475
    Union Depository	                    2.6968 -667.0166 16.13061
    Lost's Trailer Park             	    49.49379 3744.472 46.38629
    Red Hill Valley church - Grave          -282.4638 2835.84 55.914
    La Mesa Garage                          970.27453 -1826.56982 31.11477
    Carwash	                                55.7 -1391.3 30.5
    Ferris Wheel	                        -1645.55 -1113.04 12.65
    Arcadius Business Centre                -141.1987 -620.913 168.8205
    Lost Clubhouse	                        984.1552, -95.3662, 74.50
    FIB interior (fake)	                    100.2593 -742.9846 45.7420
    ch1_02_closed (party house)             -3092.7824 343.2922 14.3451 */
   
    alt.removeIpl("rc12b_default");         // Pillbox Hospital         307.1680 -590.807 43.280

    alt.removeIpl("hei_yacht_heist");       // Dignity Heist Yacht     -2027.946 -1036.695 6.707587
    alt.removeIpl("hei_yacht_heist_enginrm");
    alt.removeIpl("hei_yacht_heist_enginrm_lod");
    alt.removeIpl("hei_yacht_heist_Lounge");
    alt.removeIpl("hei_yacht_heist_lounge_lod");
    alt.removeIpl("hei_yacht_heist_lod");
    alt.removeIpl("hei_yacht_heist_slod");
    alt.removeIpl("hei_yacht_heist_Bridge");
    alt.removeIpl("hei_yacht_heist_bridge_lod");
    alt.removeIpl("hei_yacht_heist_Bar");
    alt.removeIpl("hei_yacht_heist_bar_lod");
    alt.removeIpl("hei_yacht_heist_Bedrm");
    alt.removeIpl("hei_yacht_heist_bedrm_lod");
    alt.removeIpl("hei_yacht_heist_DistantLights");
    alt.removeIpl("hei_yacht_heist_LODLights");

    alt.removeIpl("trevorstrailertidy");    // Trevors Trailer (Clean)  1975.552 3820.538 33.44833
    alt.requestIpl("trevorstrailertrash");  // Trevors Trailer (Trash)

    alt.removeIpl("FIBlobbyfake");          // FIB interior (fake)      100.2593 -742.9846 45.7420
    alt.requestIpl("fiblobby");             // FIB interior

    alt.requestIpl("vw_dlc_casino_door");   // Casino Doors             	924.369 47.037 81.093
    alt.requestIpl("hei_dlc_casino_door");

    // Golfflags (golfflags)	            -1032.0 -84.0 44.0                  - Флажки в Гольф-клубе
    // Racetrack (racetrack01)  	        1978.0 3111.0 46.0                  - Гоночная трасса SH.
    // Sunken Cargo Ship (sunkcargoship)    -163.3628 -2385.161 5.999994        - Тонущий корабль
    // Burning Cargo Ship (SUNK_SHIP_FIRE)	-163.3628, -2385.161, 5.999994      - Огонь тонущего корабля
    // Red Carpet (redCarpet)               291.4549 175.9912 104.126           - Красная дорожка
    // Gunrunning Heist (gr_heist_yacht2)   -1418.21 6749.81 10.98968           - Яхта в ПБ
    // Train Bridge (railing_end)           -503.0637 4351.5561 89.7875         - Разрушенный поезд на моту
    // Morgue (Coroner_Int_On)              275.446, -1361.11, 24.5378          - Морг
});