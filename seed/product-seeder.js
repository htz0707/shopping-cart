var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop');

var products = [
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-12-14_Onis_Royale.jpg',
        title: 'Itto',
        description: 'Despite appearing as "mean and overbearing", Itto is a kind soul at heart, apart from trying to pick a fight with Kujou Sara at every possible opportunity.',
        price: 5,
    }),
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-11-24_Secretum_Secretorum.jpg',
        title: 'Albedo',
        description: 'A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.',
        price: 10,
    }),
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-10-12_Farewell_of_Snezhnaya.jpg',
        title: 'Childe',
        description: 'He is the Eleventh of the Fatui Harbingers. Following danger wherever he goes, Childe is always eager for a challenge, making him extremely dangerous despite being the youngest.',
        price: 15,
    }),
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-09-21_Drifting_Luminescence.jpg',
        title: 'Kokomi',
        description: `The young Divine Priestess of Watatsumi Island and a descendant of theSangonomiya Clan. Kokomi is in charge of most of Watatsumi's affairs.`,
        price: 20,
    }),
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-09-01_Reign_of_Serenity.jpg',
        title: 'Ei',
        description: 'She is the vessel of Beelzebul, the current Electro Archon of Inazuma, andmeditates inside the Plane of Euthymia while letting her puppet control the daily affairs ofthe nation.',
        price: 25,
    }),
    new Product({
        imagePath: 'https://www.gensh.in/fileadmin/Database/Banner_Gacha/2021/2021-02-23_EpitomeInvocation.jpg',
        title: 'Weapon',
        description: 'There are currently five different types of weapons in Genshin Impact. Eachcharacter is only able to wield one weapon type (Bows,Catalysts, Claymores, Polearms, or Swords).',
        price: 30,
    }),
]
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();    
        }
    });
}
function exit() {
    mongoose.disconnect();
}