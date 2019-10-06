/**
 * Creates a new game.
 *
 * @param {object} db - The storage API.
 * @param {object} game - The game config object.
 * @param {number} numPlayers - The number of players.
 * @param {object} setupData - User-defined object that's available
 *                             during game setup.
 * @param {object } lobbyConfig - Configuration options for the lobby.
 */
export declare const CreateGame: (db: any, game: any, numPlayers: any, setupData: any, lobbyConfig: any) => Promise<any>;
export declare const createApiServer: ({ db, games, lobbyConfig }: {
    db: any;
    games: any;
    lobbyConfig: any;
}) => any;
export declare const addApiToServer: ({ app, db, games, lobbyConfig }: {
    app: any;
    db: any;
    games: any;
    lobbyConfig: any;
}) => any;
