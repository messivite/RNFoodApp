const popularData = [

     {
        id:1,
        image: require('./../images/pizza1.png'),
        title: "Primavera Pizza",
        weight: '540 gr',
        rating: '5.0',
        price:'4.99',
        sizeName:'Medium',
        sizeNumber:'14',
        crust:'Thin Crust',
        deliveryTime:'30 min',
        ingredients:[
           {
              id: '1',
              name:'tomato',
              image: require('./../images/tomato.png')
           },
           {
               id: '2',
               name:'cheese',
               image: require('./../images/cheese.png')
            },
            {
               id: '3',
               name:'garlic',
               image: require('./../images/garlic.png')
            },
            {
               id: '4',
               name:'ham',
               image: require('./../images/ham.png')
            }
        ]

     },
     {
        id:2,
        image: require('./../images/pizza2.png'),
        title: "Vegatarian Pizza",
        weight: '440 gr',
        rating: '5.0',
        price:'5.99',
        sizeName:'Medium',
        sizeNumber:'14',
        crust:'Thin Crust',
        deliveryTime:'30 min',
        ingredients:[
         {
            id: '1',
            name:'tomato',
            image: require('./../images/tomato.png')
         },
         {
             id: '2',
             name:'cheese',
             image: require('./../images/cheese.png')
          },
          {
             id: '3',
             name:'garlic',
             image: require('./../images/garlic.png')
          },
          {
             id: '4',
             name:'ham',
             image: require('./../images/ham.png')
          }
      ]

     },
     {
        id:3,
        image: require('./../images/pizza3.png'),
        title: "Poperaani Pizza",
        weight: '700 gr',
        rating: '4.0',
        price:'2.99',
        sizeName:'Medium',
        sizeNumber:'14',
        crust:'Thin Crust',
        deliveryTime:'30 min',
        ingredients:[
         {
            id: '1',
            name:'tomato',
            image: require('./../images/tomato.png')
         },
         {
             id: '2',
             name:'cheese',
             image: require('./../images/cheese.png')
          }
      ]

     },
];

export default popularData;