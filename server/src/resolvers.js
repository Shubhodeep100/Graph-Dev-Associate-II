const resolvers = {
    Query: {
        // Returns an array of Tracks that will be used to
        //  populate the homeapge grid of our web clinet.
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },

    },
    Track:{
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    }

    
};

module.exports = resolvers;
