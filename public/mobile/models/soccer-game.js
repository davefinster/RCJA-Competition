Ext.regModel('SoccerGame', {
    fields: [
		{name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
	proxy: {
		type: 'rest',
	    url : '/soccer_games',
		reader: {
			type: 'json',
			root: 'soccer_games'
		}
	}
});