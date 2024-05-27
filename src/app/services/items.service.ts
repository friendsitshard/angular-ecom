import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private data:any[] = [
    {
      "id": 1,
      "name": "Classic Monochrome T-shirt",
      "inStock": true,
      "price": 35.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "white", "gray"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "T-shirts",
      "description": "A timeless classic, this monochrome t-shirt is made from high-quality cotton for comfort and durability."
    },
    {
      "id": 2,
      "name": "Monochromatic Wardrobe",
      "inStock": true,
      "price": 27.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "white", "gray"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Wardrobe Essentials",
      "description": "This monochromatic wardrobe set includes versatile pieces that can be mixed and matched for effortless style."
    },
    {
      "id": 3,
      "name": "Essential Neutrals",
      "inStock": true,
      "price": 22.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["beige", "taupe", "cream"],
      "sizes": ["S", "M", "L"],
      "category": "Neutral Clothing",
      "description": "These essential neutral pieces are wardrobe staples, perfect for creating chic and understated looks."
    },
    {
      "id": 4,
      "name": "UTRANET Black",
      "inStock": true,
      "price": 43.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black"],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "category": "Outerwear",
      "description": "Stay warm and stylish with this UTRANET black jacket, featuring a sleek design and cozy insulation."
    },
    {
      "id": 5,
      "name": "Casual Denim Jeans",
      "inStock": true,
      "price": 40.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["blue", "black"],
      "sizes": ["26", "28", "30", "32", "34"],
      "category": "Jeans",
      "description": "These casual denim jeans offer both style and comfort, with a relaxed fit and durable denim fabric."
    },
    {
      "id": 6,
      "name": "Cozy Knit Sweater",
      "inStock": true,
      "price": 55.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["gray", "navy", "burgundy"],
      "sizes": ["XS", "S", "M", "L"],
      "category": "Sweaters",
      "description": "Wrap yourself in warmth with this cozy knit sweater, perfect for chilly days and nights."
    },
    {
      "id": 7,
      "name": "Elegant Black Dress",
      "inStock": true,
      "price": 65.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black"],
      "sizes": ["S", "M", "L"],
      "category": "Dresses",
      "description": "Make a statement with this elegant black dress, featuring a flattering silhouette and classic design."
    },
    {
      "id": 8,
      "name": "Sporty Hoodie",
      "inStock": true,
      "price": 45.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["blue", "gray", "black"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Activewear",
      "description": "Stay active in style with this sporty hoodie, designed for both comfort and performance."
    },
    {
      "id": 9,
      "name": "Slim Fit Chinos",
      "inStock": true,
      "price": 30.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["khaki", "navy", "black"],
      "sizes": ["28", "30", "32", "34", "36"],
      "category": "Trousers",
      "description": "These slim fit chinos offer a modern and tailored look, perfect for both casual and formal occasions."
    },
    {
      "id": 10,
      "name": "Striped Button-down Shirt",
      "inStock": true,
      "price": 38.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["blue", "white", "red"],
      "sizes": ["S", "M", "L"],
      "category": "Shirts",
      "description": "Add a touch of sophistication to your wardrobe with this striped button-down shirt, crafted from premium cotton."
    },
    {
      "id": 11,
      "name": "Quilted Puffer Jacket",
      "inStock": true,
      "price": 75.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "navy", "olive"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Outerwear",
      "description": "Stay cozy and stylish in cold weather with this quilted puffer jacket, featuring a water-resistant shell."
    },
    {
      "id": 12,
      "name": "Classic Leather Belt",
      "inStock": true,
      "price": 25.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "brown"],
      "sizes": ["30", "32", "34", "36"],
      "category": "Accessories",
      "description": "Complete your look with this classic leather belt, crafted from genuine leather for durability and style."
    },
    {
      "id": 13,
      "name": "Cotton Crewneck Sweatshirt",
      "inStock": true,
      "price": 32.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["gray", "navy", "burgundy"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Sweatshirts",
      "description": "Stay comfortable and casual with this cotton crewneck sweatshirt, perfect for everyday wear."
    },
    {
      "id": 14,
      "name": "Floral Print Dress",
      "inStock": true,
      "price": 50.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "white", "blue"],
      "sizes": ["S", "M", "L"],
      "category": "Dresses",
      "description": "Add a pop of color to your wardrobe with this floral print dress, featuring a flattering fit and vibrant design."
    },
    {
      "id": 15,
      "name": "Casual Sneakers",
      "inStock": true,
      "price": 60.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["white", "black", "gray"],
      "sizes": ["US 7", "US 8", "US 9", "US 10", "US 11"],
      "category": "Shoes",
      "description": "Step out in style with these casual sneakers, perfect for adding a sporty vibe to any outfit."
    },
    {
      "id": 16,
      "name": "Vintage Denim Jacket",
      "inStock": true,
      "price": 70.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["blue"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Jackets",
      "description": "Channel retro vibes with this vintage denim jacket, featuring distressed details and a classic silhouette."
    },
    {
      "id": 17,
      "name": "Ribbed Turtleneck Sweater",
      "inStock": true,
      "price": 48.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "gray", "burgundy"],
      "sizes": ["S", "M", "L"],
      "category": "Sweaters",
      "description": "Stay cozy and stylish in colder weather with this ribbed turtleneck sweater, perfect for layering."
    },
    {
      "id": 18,
      "name": "Tailored Slim Fit Blazer",
      "inStock": true,
      "price": 85.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["black", "navy", "gray"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Blazers",
      "description": "Elevate your look with this tailored slim fit blazer, crafted from premium materials for a sophisticated finish."
    },
    {
      "id": 19,
      "name": "Checked Flannel Shirt",
      "inStock": true,
      "price": 42.0,
      "image": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
      "colors": ["red", "blue", "green"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Shirts",
      "description": "Add a touch of rustic charm to your wardrobe with this checked flannel shirt, perfect for casual weekends."
    },
    {
      "id": 20,
      "name": "Slim Fit Jogger Pants",
      "inStock": true,
      "price": 35.0,
      "image": "./BestSellingImages/image20.svg",
      "colors": ["black", "gray", "navy"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Activewear",
      "description": "Stay comfortable and stylish on the go with these slim fit jogger pants, designed for active lifestyles."
    },
    {
      "id": 21,
      "name": "Patterned Scarf",
      "inStock": true,
      "price": 20.0,
      "image": "./BestSellingImages/image21.svg",
      "colors": ["blue", "red", "green"],
      "sizes": ["One Size"],
      "category": "Accessories",
      "description": "Complete your look with this stylish patterned scarf, perfect for adding a pop of color to any outfit."
    },
    {
      "id": 22,
      "name": "Graphic Print T-shirt",
      "inStock": true,
      "price": 25.0,
      "image": "./BestSellingImages/image22.svg",
      "colors": ["white", "black", "gray"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "T-shirts",
      "description": "Make a statement with this graphic print t-shirt, featuring bold designs and vibrant colors."
    },
    {
      "id": 23,
      "name": "Cropped Wide-Leg Pants",
      "inStock": true,
      "price": 32.0,
      "image": "./BestSellingImages/image23.svg",
      "colors": ["black", "white", "navy"],
      "sizes": ["S", "M", "L"],
      "category": "Trousers",
      "description": "Stay on trend with these cropped wide-leg pants, perfect for pairing with your favorite tops."
    },
    {
      "id": 24,
      "name": "Leather Crossbody Bag",
      "inStock": true,
      "price": 60.0,
      "image": "./BestSellingImages/image24.svg",
      "colors": ["black", "brown", "tan"],
      "sizes": ["One Size"],
      "category": "Bags",
      "description": "Carry your essentials in style with this leather crossbody bag, featuring a sleek and versatile design."
    },
    {
      "id": 25,
      "name": "Printed Midi Skirt",
      "inStock": true,
      "price": 45.0,
      "image": "./BestSellingImages/image25.svg",
      "colors": ["black", "blue", "red"],
      "sizes": ["S", "M", "L"],
      "category": "Skirts",
      "description": "Add a touch of femininity to your wardrobe with this printed midi skirt, featuring a flattering silhouette."
    },
    {
      "id": 26,
      "name": "Hooded Parka Jacket",
      "inStock": true,
      "price": 80.0,
      "image": "./BestSellingImages/image26.svg",
      "colors": ["olive", "navy", "black"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Outerwear",
      "description": "Stay warm and dry in cold and wet weather with this hooded parka jacket, featuring water-resistant fabric and a cozy hood."
    },
    {
      "id": 27,
      "name": "Printed Silk Scarf",
      "inStock": true,
      "price": 35.0,
      "image": "./BestSellingImages/image27.svg",
      "colors": ["red", "blue", "green"],
      "sizes": ["One Size"],
      "category": "Accessories",
      "description": "Elevate your look with this luxurious printed silk scarf, featuring vibrant colors and elegant designs."
    },
    {
      "id": 28,
      "name": "Chunky Knit Cardigan",
      "inStock": true,
      "price": 55.0,
      "image": "./BestSellingImages/image28.svg",
      "colors": ["gray", "beige", "navy"],
      "sizes": ["S", "M", "L"],
      "category": "Sweaters",
      "description": "Wrap yourself in warmth and style with this chunky knit cardigan, perfect for layering over any outfit."
    },
    {
      "id": 29,
      "name": "Retro High-Top Sneakers",
      "inStock": true,
      "price": 65.0,
      "image": "./BestSellingImages/image29.svg",
      "colors": ["white", "black", "red"],
      "sizes": ["US 7", "US 8", "US 9", "US 10", "US 11"],
      "category": "Shoes",
      "description": "Step back in time with these retro high-top sneakers, featuring a classic design and modern comfort."
    },
    {
      "id": 30,
      "name": "Linen Button-up Shirt",
      "inStock": true,
      "price": 28.0,
      "image": "./BestSellingImages/image30.svg",
      "colors": ["white", "blue", "beige"],
      "sizes": ["S", "M", "L", "XL"],
      "category": "Shirts",
      "description": "Stay cool and stylish in warm weather with this linen button-up shirt, perfect for casual and dressy occasions alike."
    }
  ]
  
  constructor() { }

  getData(){
    return this.data
  }

  getItem(id: number): any {
    return this.data.find(item => item.id === id);
  }
}
