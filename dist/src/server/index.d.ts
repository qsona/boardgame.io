/**
 * Build config object from server run arguments.
 *
 * @param {number} portOrConfig - Either port or server config object. Optional.
 * @param {function} callback - Server run callback. Optional.
 */
export declare const createServerRunConfig: (portOrConfig?: any, callback?: any) => any;
/**
 * Instantiate a game server.
 *
 * @param {Array} games - The games that this server will handle.
 * @param {object} db - The interface with the database.
 * @param {object} transport - The interface with the clients.
 */
export declare function Server({ games, db, transport }: any): {
    app: any;
    db: any;
    run: (portOrConfig: any, callback: any) => Promise<{
        apiServer: any;
        appServer: any;
    }>;
    kill: ({ apiServer, appServer }: any) => void;
};
