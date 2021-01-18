export class Product {

	// public product_id: BigInteger;
	// public user_id: BigInteger;
	// public code: string;
	// public name: string;
	// public packing: string;
	// public category_id: BigInteger;
	// public tax_rate: number;
	// public price: BigInteger;
	// public category: string;

	constructor(
		public product_id: number,
		public user_id: number, 
		public code: string,
		public name: string, 
		public packing: string, 
		public category_id: number,
		public tax_rate: number, 
		public price: number, 
		public category: string
		) {
		// this.product_id = product_id;
		// this.user_id = user_id;
		// this.code = code;
		// this.name = name;
		// this.packing = packing;
		// this.category_id = category_id;
		// this.tax_rate = tax_rate;
		// this.price = price;
		// this.category = category;

	}
}
