'use strict';
angular.module('app').factory('dashServices', ['$http', '$q', function ($http, $q) {
    // url servicio
    //var serviceBase = "https://miapp-taller6.herokuapp.com";
    
    var dashFactory = {};

    var _getDashProdcts = function () {
        
        var deferred = $q.defer();
		
		var list_productos = [
            {
                id: 1,
			    images : "https://www.conasi.eu/1860-large_default/libro-hongos-medicinales-josefina-llargues.jpg",
                precio : "910",
                tittle : "Hongos Medicinales",
			    description: "El libro Hongos medicinales nos acerca al mundo de estos tres destacados alimentos-medicina: las setas shiitake, maitake y reishi. Para la medicina tradicional china han sido remedios de primer orden desde antaño, lo cual ya ha sido ampliamente demostrado por la investigación científica."
            },
            {
                id:2,
			    images : "https://http2.mlstatic.com/el-principito-antoine-de-saint-exupery-ilustrado-libro-nuevo-S_219015-MLA25203557581_122016-F.jpg",
                precio : "600",
                tittle : "El Principito",
			    description: "Un clásico de la literatura universal que nos muestra el verdadero sentido de la vida, el amor y la amistad."
            },
            {
                id:3,
			    images : "https://images-na.ssl-images-amazon.com/images/I/41GW9oLvFZL._SX317_BO1,204,203,200_.jpg",
                precio : "550",
                tittle : "El arte de Vivir",
			    description: "El arte de vivir es un libro especialmente dirigido a los jóvenes, en el que se expone una filosofía práctica de la educación. Una filosofía, una pedagogía, que tiene poco que ver con las propuestas corrientes en nuestras escuelas y colegios. Krishnamurti, delata, ante todo, las raíces del miedo."
            },
            {
                id:4,
			    images : "https://imagessl1.casadellibro.com/a/l/t0/71/9788420422671.jpg",
                precio : "750",
                tittle : "La Tregua",
			    description: "La vida cotidiana de la rutina en la oficina y la de un hogar desunido y crispado se verán alteradas cuando irrumpe en su rutina la joven Laura Avellaneda, este hombre decide abrir en su vida un paréntesis luminoso."
            },
            {
                id: 5,
			    images : "https://images-na.ssl-images-amazon.com/images/I/51%2B2v-YYYtL._SX327_BO1,204,203,200_.jpg",
                precio : "850",
                tittle : "Rayuela",
			    description: "El amor turbulento de Oliveira y La Maga, los amigos del Club de la Serpiente, las caminatas por París en busca del cielo y el infierno tienen su reverso en la aventura simétrica de Oliveira, Talira y Traveler en un Buenos Aires teñido por el recuerdo."
            },
            {
                id: 6,
			    images : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucB9L45jnsCGNvxbZpAuImEiv00uhbi6hFo1AeLjaQcjmN7C7",
                precio : "950",
                tittle : "El príncipe",
			    description: "Es una obra que contradice la tradición filosófica del pensamiento político antiguo en la cual la práctica política se encuentra ensombrecida por la idealización de gobiernos y ciudades utópicas."
		    },
            {
                id: 7,
			    images : "https://i.ytimg.com/vi/DevNudhaGv4/maxresdefault.jpg",
                precio : "350",
                tittle : "El arte de la guerra",
			    description: "Es una obra para comprender las raíces de un conflicto y buscar una solución. La mejor victoria es vencer sin combatir, nos dice Sun Tzu, y ésa es la distinción entre le hombre prudente y el ignorante."
            },
            {
                id: 8,
			    images : "https://www.popularlibros.com/imagenes_grandes/9788425/978842542859.JPG",
                precio : "960",
                tittle : "La divina comedia",
			    description: "Dante comienza su viaje imaginario, “perdido en una selva oscura” (alegoría de la vida humana, sus dificultades y tentaciones), debiendo ser guiado por el poeta Virgilio (en inglés) para conseguir salir, atravesando el infierno, el purgatorio y el paraíso."
		    },
        
		 
        ];

		deferred.resolve(list_productos);
        
        return deferred.promise;
    };

    dashFactory.getDashProdcts = _getDashProdcts;

    return dashFactory;

}]);