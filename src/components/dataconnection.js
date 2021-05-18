var data={0:{category:"mobile",brand:"OPPO",simtype:"dual sim",hsslot:"NO",tscreen:"YES",otgc:"NO", model:"A31",version:11,description:"4GB RAM(Mystery black)",status:"Certified good condition",color:"red",price:1100,discount:10,img:"images/oppo.jpg",img2:"images/11.jpg",img3:"images/12.jpg"},
    1:{category:"mobile",brand:"Honor",simtype:"dual sim",hsslot:"NO",tscreen:"YES",otgc:"NO",otgc:"NO",model:"Magic",version:1.1,description:"32GB RAM(Mystery black)",status:"Certified Unboxed",color:"black",price:700,discount:20,img:"images/honor.jpg",img2:"images/11.jpg",img3:"images/12.jpg"},
2:{category:"mobile",brand:"SAMSUNG",simtype:"single sim",hsslot:"YES",tscreen:"YES",otgc:"YES",model:"B31",version:11,description:"8GB RAM(Mystery black)",status:"Certified good condition",price:1100,color:"purple",discount:15,img:"images/2.jpeg",img2:"images/11.jpg",img3:"images/12.jpg"},
3:{category:"mobile",brand:"Apple",simtype:"dual sim",hsslot:"YES",tscreen:"YES",otgc:"YES",model:"A31",version:11,description:"16GB RAM(Mystery black)",status:"Certified Unboxed",price:1500,color:"purple",discount:18,img:"images/apple.jpg",img2:"images/11.jpg",img3:"images/12.jpg"},
4:{category:"mobile",brand:"Apple",simtype:"single sim",hsslot:"NO",tscreen:"YES",otgc:"NO",model:"A31",version:11,description:"64GB RAM(Mystery black)",status:"Certified good condition",price:8000,color:"purple",discount:10,img:"images/5.jpg",img2:"images/12.jpg",img3:"images/12.jpg"},
5:{category:"mobile",brand:"Redmi",simtype:"dual sim",hsslot:"YES",tscreen:"YES",otgc:"YES",model:"A31",version:11,description:"16GB RAM(Mystery black)",status:"Certified Unboxed",price:14000,color:"blue",discount:25,img:"images/5.jpg",img2:"images/12.jpg",img3:"images/12.jpg"},
6:{category:"laptop",brand:"Honor",simtype:"dual sim",hsslot:"YES",tscreen:"YES",otgc:"YES",model:"A31",version:11,description:"16GB RAM(Mystery black)",status:"Certified Unboxed",price:14000,color:"blue",discount:25,img:"images/honorlap.jpg",img2:"images/12.jpg",img3:"images/12.jpg"}};




var review={1:{name:"Kevin",coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.pariatur" ,identity:"Youtube influencer",img:"images/blog1.jpg",img2:"images/blog2.jpg"}}
class BeebizzlData{
    static getData(){
        return  data;
    }
    static getDataByCategory(category){
       
        return  data;
    }
    static getDataByProdId(prodId){
        return  data[prodId];
    }
    static getItemCount(){
        var count=0
        for(let i in data)
         count++
        return count;
    }
    static getReview(){
        return review;
    }
}
export default BeebizzlData;