(function( Vue, axios, moment ) {
	new Vue( {
		el: '#app',
		data: {
			eventos: []
		},
		filters: {
			changeImageURL: function( value ) {
				return value.replace('/img', 'http://projects-api.webtraining.zone/events-images');;
			}
		},
		mounted: function() {
			var serverURL = 'http://projects-api.webtraining.zone:3000/events';
			var _this = this;

			// Obtener la lista de proyectos por AJAX
			var configAxios = {
				url: serverURL,
				method: 'get',
				responseType: 'json',
				data: {},
				headers: {}
			};
			axios.request( configAxios ).then( function( response ) {
				console.log( response );
				_this.eventos = response.data;
			} );
		},
		methods: {
			deleteEvento: function( evento ) {
				console.log( evento );
			}
		}
	} );
})( window.Vue, window.axios, window.moment );