$(function() {
	
	var methods = {

		bind: function()
		{
			var context = this;

			$( 'body' ).on( 'click', '.download', function() {
				var value = $(this).parents('.buttons').find('select').val();
				if(value){
					window.open(value, '_blank');
				}
			});

		},

		initialize: function(){
			this.bind();
		}

	}

	methods.initialize();

});