import { ShoppingBag, ArrowUpRight } from "lucide-react";

const ProductList = ({ products }: { products: any[] }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-xl text-gray-900">Top Products</h3>
        <ShoppingBag className="text-emerald-600" size={20} />
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="group flex items-center justify-between p-2 hover:bg-gray-50 rounded-2xl transition-all cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-[#0D3B2E] group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors">
                {product.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{product.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{product.category}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-bold text-sm text-gray-900">${product.price}</p>
              <div className="flex items-center justify-end text-emerald-500 text-[10px] font-bold">
                <ArrowUpRight size={10} />
                <span>{product.sales} sold</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-8 py-4 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 font-bold text-xs hover:border-emerald-200 hover:text-emerald-600 transition-all">
        View Inventory
      </button>
    </div>
  );
};

export default ProductList;