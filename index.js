let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea", 
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries", 
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies", 
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw", 
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
 };

//  window.onload=function(){
//    const category = document.getElementById('foodcategory');
//    category.onchange=onStatesSelectionChanged;
   
//  }

 function onStatesSelectionChanged(){

   const category = document.getElementById('foodcategory');
   let categoryVal = category.value;
   if(category==null){
      alert("Please select the category");
   }
   else{
      let finalOption = display(categoryVal);
      
      
   }

 }
 

 function display(categoryVal){
   let theOption=null;
   let items = document.getElementById('items')
  // let length=menu.length;
    if(categoryVal=='drinks'){
      for(let i=0;i<menu.drinks.length;i++){
         
               theOption = new Option(menu.drinks[i], menu.drinks[i]); 
               items.appendChild(theOption);
         }
    }
    if(categoryVal=='entrees'){
      for(let i=0;i<menu.entrees.length;i++){
         
               theOption = new Option(menu.entrees[i], menu.entrees[i]); 
               items.appendChild(theOption);
         }

    }
    if(categoryVal=='desserts'){
      for(let i=0;i<menu.desserts.length;i++){
               theOption = new Option(menu.desserts[i], menu.desserts[i]); 
               items.appendChild(theOption);
         }

    }
 }
 
