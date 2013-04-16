

exports.repeat = function() {

	this.repeticao = function(_mapResult){
		var tmp = [];
		for(var i = 0 ; i < _mapResult.length ; i++){
			tmp.push(_mapResult[i].ob1+'-'+_mapResult[i].ob2+'-'+_mapResult[i].ob3+'-'+_mapResult[i].ob4+'-'+_mapResult[i].ob5+'-'+_mapResult[i].ob6+'-'+_mapResult[i].ob7+'-'+_mapResult[i].ob8+'-'+_mapResult[i].ob9+'-'+_mapResult[i].ob10+'-'+_mapResult[i].ob11+'-'+_mapResult[i].ob12+'-'+_mapResult[i].ob13+'-'+_mapResult[i].ob14+'-'+_mapResult[i].ob15);
		}
		tmp.push('01-03-05-08-09-10-11-12-13-15-17-20-21-22-23');
		tmp.push('02-04-05-06-09-10-12-13-15-16-18-19-20-23-24');
		tmp.push('03-05-06-07-08-09-10-12-13-14-15-16-17-21-25');
		tmp.push('01-03-04-05-07-09-10-11-14-15-16-19-20-22-23');
		tmp.push('04-05-06-07-09-10-11-12-14-15-16-20-23-24-25');
		tmp.push('02-03-04-06-08-10-11-12-14-15-17-18-23-24-25');
		tmp.push('01-02-04-06-09-10-12-13-14-16-17-18-19-22-25');
		tmp.push('02-03-05-06-08-09-10-11-12-14-15-17-18-19-23');

		tmp.push('02-03-05-06-08-09-10-11-12-14-15-17-18-19-23');
		tmp.push('02-03-04-06-08-10-11-12-14-15-17-18-23-24-25');


		tmp.sort();
		this.isExist(tmp);
	};


	this.isExist = function(arr) { 
	    var len = arr.length, 
	    out = [], 
	    counts = {}; 
	    for (var i=0;i<len;i++) { 
	        var item = arr[i]; 
	        var count = counts[item]; 
	        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1; 
	    } 
	    for (var item in counts) { 
	        if(counts[item] > 1) 
	        out.push(item); 
	    } 	    
	    this.repeticoes = out; 
	};

};