

exports.frequencia = function(config) {

	this.frequencia = function(_mapResult){
		for(var i in _mapResult){			
			for(var ii in _mapResult[i].orderBol){
				config.client.zincrby('lotofacil-frequencia-n', 1, 'lotofacil-frequencia-n'+_mapResult[i].orderBol[ii]);
			}
		}		
	};


	this.cron = function() {
		var $this = this;
		new config.cron(config.cronTime, function(){
		    config.client.lpop('lotofacil-fila-frequencia', function(err, d) {
		    	if(err) console.err('[ERRO] ao ler a chave (lotofacil-fila-frequencia) redis');
				if(d){
					config.client.get(d, function (err, reply) {
						var time = new Date().getTime();
						var _objD = JSON.parse(reply.toString());					
						console.log('consumindo fila (lotofacil-frequencia) redis');
						$this.frequencia(_objD);
						console.log('(lotofacil-frequencia) processado em .......... '+(new Date().getTime()-time)/1000+'s');
					});
				}
			});
		}, null, true, "");
	};

};