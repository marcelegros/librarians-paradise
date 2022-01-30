




export const gameBoard = {

    type: 'string', // Have some default types?

    playerConfig: 'string', // 1V1, teamVteam, individual

    name: 'string',

    numPlayers: 'number',

    globalVariables: {

        // This defines the global variables for the game. They can be referenced, edited, and used to determine wins, etc. 

        // These are sent to ALL players consistently.

    },

    rules: {
        // This section needs to robustly describe the game, as it will be played by users... several clauses will need to be outlines.

        winClause: 'function, or something like that. an analysis of the state, and return of the victor. checked at the end of turns, (***or on the update of the globalVariables)',

        nextTurnCluase: 'a function, or description of how the game moves after the end of a turn.',

        turnDefinition: 'definition for what constitutes a turn. All players and events involved.',

        scoreDefinition: 'a definition of how the score is logged within the game.',

    },

    turn: {

        interface: 'defines the UI for a given turn.',

        players: 'defines the players active in a turn',

        outcomeEffect: 'defines how the outcome of the turn effects the globalVariables.',

        data: 'data specific to this turn. Dished out @ the start of the turn, and updated as needed during the turn. temporary.'
        
        // Note: A turn could also technically effect the globalVariables during its runtime!


    }




}