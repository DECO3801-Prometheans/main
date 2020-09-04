import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public slides = [
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg',
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg',
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg'
  ];

  public best_sellers = [
    [
      {img: '../../assets/imgs/best-seller/brocli.PNG', 
        brief: 'hfie hofeahwoi oifewhiofe ', price: 14.6}, 
      {img: '../../assets/imgs/best-seller/carrot.PNG', 
      brief: 'fdjwof fdowif jiowe fiowifew', price: 14.6}, 
      {img: '../../assets/imgs/best-seller/corn.PNG', 
      brief: '2e iwehfo iofwe fiowjewie wof', price: 14.6}, 
    ],
    [
      {img: '../../assets/imgs/best-seller/onion.PNG', 
        brief: 'fshdi ofsdihfios odosfi dso', price: 14.6}, 
      {img: '../../assets/imgs/best-seller/potato.PNG', 
        brief: 'jido iofdsj foisdj oisjdif', price: 14.6}, 
      {img: '../../assets/imgs/best-seller/spanish.PNG', 
        brief: 'hufids oifsdjiof oisdjfoi', price: 14.6}, 
    ],
  ];

  public bargains = [
    [
      {img: '../../assets/imgs/best-seller/brocli.PNG', 
        brief: 'hfie hofeah', price: 14.6, discount: 0.5}, 
      {img: '../../assets/imgs/best-seller/carrot.PNG', 
      brief: 'fdjwof fdowif j', price: 14.6, discount: 0.5}, 
      {img: '../../assets/imgs/best-seller/corn.PNG', 
      brief: '2e iwehfo iofwes', price: 14.6, discount: 0.5}, 
    ],
    [
      {img: '../../assets/imgs/best-seller/onion.PNG', 
        brief: 'fshdi ofsdihf', price: 14.6, discount: 0.5}, 
      {img: '../../assets/imgs/best-seller/potato.PNG', 
        brief: 'jido iofdsj f', price: 14.6, discount: 0.5}, 
      {img: '../../assets/imgs/best-seller/spanish.PNG', 
        brief: 'hufids oifsdj', price: 14.6, discount: 0.5}, 
    ],
  ];

  public farmers = [
    {
      avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Lorem ipsum',
      labels: ['label1', 'label2', 'label3'],
      products: [
        {
          'img': '../../assets/imgs/best-seller/brocli.PNG',
          'name': 'sdfasd',
        },
        {
          'img': '../../assets/imgs/best-seller/carrot.PNG',
          'name': 'sdfasd',
        },
        {
          'img': '../../assets/imgs/best-seller/tomato2.PNG',
          'name': 'wfhtyhr',
        },
      ],
    },
    {
      avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Lorew rewum',
      labels: ['label1', 'label2', 'label3'],
      products: [
        {
          'img': '../../assets/imgs/best-seller/onion.PNG',
          'name': 'fwewe',
        },
        {
          'img': '../../assets/imgs/best-seller/corn.PNG',
          'name': 'sdfwe',
        },
        {
          'img': '../../assets/imgs/best-seller/spanish.PNG',
          'name': 'dsfwe',
        },
      ],
    },
    {
      avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Dwffdw fowd',
      labels: ['label1', 'label2', 'label3'],
      products: [
        {
          'img': '../../assets/imgs/best-seller/carrot.PNG',
          'name': 'wefwf',
        },
        {
          'img': '../../assets/imgs/best-seller/brocli.PNG',
          'name': 'edfwdfw',
        },
        {
          'img': '../../assets/imgs/best-seller/onion.PNG',
          'name': 'sfwe',
        },
      ],
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
