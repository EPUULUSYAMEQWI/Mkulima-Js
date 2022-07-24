class Mkulima{
    constructor(){
        this.farm=[]
        this.products=[]
        this.vendorsOrders=[]
        this.addFarm=(farmId,farmname,farmer,phonenumber,address)=>{
            this.farm.push({farmId,farmname,farmer,phonenumber,address})
        }
        this.removeFarm=(farmId)=>{
        let remove=this.farm.find(element=>element.farmId==farmId);
        let item=this.farm.indexOf(remove);
        this.farm.splice(item,1)
        }
        this.updateFarm=(farmId,farmId1,farmname1,farmer1,phonenumber1,address1)=>{
        let newfarm=this.farm.find(item=>item.farmId==farmId)
        newfarm.farmId=farmId1
        newfarm.farmname=farmname1
        newfarm.farmer=farmer1
        newfarm.phonenumber=phonenumber1
        newfarm.address=address1

        }
        this.getFarm=(farmid)=>{
         console.log(this.farm.find(object=>object.farmId=farmid))   
        }
        this.addProduct=(productId,name,price)=>{
            this.products.push({productId,name,price})
        }
        this.removeProduct=(productId)=>{
            let item=this.products.find(element=>element.productId==productId);
            let indexItem=this.products.indexOf(item)
            this.products.splice(indexItem,1)
        }
        this.updateProduct=(productId,newProductId,newname,newprice)=>{
            let newproducts=this.products.find(item=>item.productId==productId)
             newproducts.productId=newProductId
             newproducts.name=newname
             newproducts.price=newprice
        }
        this.getProducts=(productId)=>{
            console.log(this.products.find(element=>element.productId=productId))
        }
        this.printProducts=()=>{
            console.log(this.products)
        }
        this.calculateOrderCost=(productId,quantity)=>{
            let selectedProduct=this.products.find(item=>item.productId=productId)
            let totalprice=quantity*selectedProduct.price
            console.log(`${quantity}  ${selectedProduct} for KSH  ${totalprice}`)
        }

    }

}
       let newfarm=new Mkulima();
       newfarm.addFarm("333","Turkana","Amekwi","07999999","Eliye Springs")
       newfarm.addFarm('7T6Y','December','Epuu','07666666','Kiamunyi')
       newfarm.addFarm('789','Max','Lucy','07888888','Kiondoo')
       newfarm.addFarm('555','Min','Verah','075555555','Kilimani')
       newfarm.addFarm('888','Char','Bright','07444444','Ruiri')
       newfarm.addProduct('254','Sukuma',60)
       newfarm.addProduct('444','Beans',50)
       newfarm.calculateOrderCost(999,3)
       console.log(newfarm.farm)
       newfarm.removeFarm("777")



