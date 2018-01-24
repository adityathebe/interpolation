class Interpolation {

	constructor (x, fx) {
		if ( x instanceof Array && fx instanceof Array ) {
			if ( x.length === fx.length ) {
				this.input = x;
				this.output = fx;
			} else throw 'Invalid Array'
		} else throw 'Please pass in array';
	}
	
	// creates a difference Table 
	dTable() {
		let table = [this.output];
		for (let i = 0; i < this.output.length - 1; i++) {
			table.push([]);
			for ( let j = 0; j < table[i].length - 1 ; j++ ) {
				table[i+1].push(table[i][j+1] - table[i][j]);
			}
		}
		return table;
	}

	// creates a divided difference Table 
	ddTable () {
		let table = [this.output];
		for (let i = 0; i < this.output.length - 1; i++) {
			table.push([]);
			for ( let j = 0; j < table[i].length - 1 ; j++ ) {
				let current_row = table[i+1]
				current_row.push( this.output[j+i+1] - this.output[j] );
			}
		}
		return table;
	}
	

	display() {
		for (let i = 0; i < this.input.length; i++) {
			console.log(`| ${this.input[i]}  |  ${this.output[i]} |`)
		}
	}

	newtonForward(point_x) {
		let d_table = this.dTable();
		let results = 0;
		let h = (this.input[1] - this.input[0]);
		let p = (point_x - this.input[0] ) / h;

		let getP = (p, index) => {
			let result = 1;
			for (let i = 0; i <= index; i++) {
				result *= ( (p - i) / (i+1) );
			}
			return result;
		}

		for (let i = 0; i < d_table.length; i++) {
			results += d_table[i][0] * getP(p, i - 1);
		}

		return(results);
	}
}

module.exports = Interpolation;