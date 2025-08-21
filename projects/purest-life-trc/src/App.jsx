import React, { useState } from "react";
import { NavBar } from "./NavBar.jsx";
import { HeroSection } from "./HeroSection.jsx";
import { Card } from "./Card.jsx";
import "./App.css";
import ProductDetail from "./ProductDetail.jsx";
import CreditCard from "./CreditCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer.jsx";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cards = [
    {
      title: "Whey Protein 2.2kg (chocolate)",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      longDescription:
        "Discover a healthier lifestyle with Purest Life fucker.", // for modal
      imageName: "main-desktop", // image for the card
      folderName: "Whey_Protein_22_kg", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      price: 100,
      discountPrice: 80,
      images: [
        //images for the product detail modal
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "Whey Protein 2.2kg (vainilla)",
      longDescription: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_choc",
    },
    {
      title: "Whey Protein 2.2kg (Cherry Ice)",
      longDescription: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_choc",
    },
    {
      title: "ISO+ Proteína Aislada de Suero More Than Pure sabor Vainilla",
      price: "$450.00",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "ISO_Proteína_Aislada_de_Suero_More_Than_Pure_sabor", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
      longDescription:
        "ISO+ de More Than Pure es una proteína aislada de suero de leche de alta pureza, diseñada para apoyar la recuperación muscular, el desarrollo de masa magra y el rendimiento físico. Gracias a su bajo contenido en carbohidratos y su fórmula sin azúcar añadida, es ideal para quienes buscan una nutrición limpia y efectiva. Su delicioso sabor vainilla la hace perfecta para combinar con agua, leche vegetal o en smoothies. Cada porción proporciona proteína de alta calidad de rápida absorción, favoreciendo el crecimiento muscular y la regeneración tras el entrenamiento. BENEFICIOS DESTACADOS: Alta pureza proteica: Aislado de suero de alta calidad que ayuda a optimizar la recuperación y el desarrollo muscular. Baja en carbohidratos: Ideal para dietas bajas en carbohidratos o control de peso. Sin azúcar añadida: Endulzada de forma natural, cuidando tu salud sin sacrificar sabor. Digestión rápida: Perfecta para el post-entreno gracias a su rápida absorción. Versátil y deliciosa: Sabor vainilla cremoso, ideal para batidos o recetas fitness.",
    },
    {
      title: "EXTREME FLEX - 100 CápsulasEXTREME FLEX - 100 Cápsulas",
      price: "$400.00",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "EXTREME_FLEX_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
        "01-misc-img-desktop",
        "02-misc-img-desktop",
        "03-misc-img-desktop",
      ],
      longDescription:
        "Extreme Flex Purest Life combina glucosamina y MSM para mejorar la flexibilidad, proteger el cartílago y reducir molestias en articulaciones. Beneficios: • Protege articulaciones • Mejora flexibilidad y movilidad • Reduce molestias al caminar • Apoya salud del cartílago",
    },
    {
      title: "Colágeno Hidrolizado 300gColágeno Hidrolizado 300g",
      price: "$450.00",
      longDescription:
        "Colágeno Hidrolizado de More Than Pure es un suplemento diseñado para promover la regeneración del colágeno natural del cuerpo , mejorar la elasticidad de la piel y reforzar cabello, uñas y articulaciones. Con una fórmula enriquecida con biotina, glicina, prolina y lisina , este colágeno es ideal para quienes buscan verse bien, sentirse fuertes y mantener una piel más firme y saludable. Presentación: 300 g Rinde: hasta 60 porciones Sabores disponibles: Vainilla, Kiwi, Cappuccino BENEFICIOS Piel firme y luminosa Gracias a la biotina y los péptidos de colágeno que estimulan la regeneración celular. Fortalece cabello y uñas Reduce quiebre y caída con aminoácidos esenciales para su nutrición. Apoya articulaciones y ligamentos Mejora la flexibilidad y reduce molestias al moverse. Absorción superior Su fórmula hidrolizada facilita una asimilación más rápida y eficaz. Sabor agradable, sin azúcar añadida Ideal para tomar en cualquier momento del día.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "Colágeno_Hidrolizado_300g", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "MELENA DE LEÓN - 60 CápsulasMELENA DE LEÓN - 60 Cápsulas",
      price: "$500.00",
      longDescription:
        "Melena de León Purest Life es un hongo medicinal que estimula la regeneración neuronal, mejora la memoria y concentración, y apoya la función cognitiva a largo plazo. Beneficios: • Mejora memoria y concentración • Estimula regeneración neuronal • Disminuye fatiga mental • Favorece enfoque y claridad",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "MELENA_DE_LEÓN_-_60_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "Creatina Monohidratada 1KCreatina Monohidratada 1K",
      price: "$460.00",
      longDescription:
        "Creatina 1K de More Than Pure es un suplemento de alta pureza formulado con creatina monohidratada micronizada, ideal para quienes buscan más fuerza, mayor volumen muscular y una mejor recuperación tras entrenamientos intensos. Al aumentar la producción de ATP (la principal fuente de energía celular), la creatina mejora el desempeño físico en esfuerzos cortos y explosivos, como levantamiento de pesas, HIIT o crossfit. Presentación: 1 kg Rinde: 200 porciones Sabor: Neutro BENEFICIOS Aumenta la fuerza muscular Favorece la producción de energía inmediata durante el entrenamiento. Mejora el rendimiento deportivo Ideal para atletas de fuerza, velocidad y potencia. Estimula el volumen celular muscular Promueve una apariencia más llena y definida de los músculos. Favorece la recuperación Disminuye la fatiga muscular postentreno. Fácil de mezclar No tiene sabor ni textura arenosa, se mezcla fácilmente con agua o proteína.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "Creatina_Monohidratada__More_Than_Pure__Natural_Fl", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "BCAA 1KBCAA 1K",
      price: "$460.00",
      longDescription:
        "BCAA 1K de More Than Pure es un suplemento en polvo formulado con aminoácidos esenciales (leucina, isoleucina y valina) en forma fermentada, ideales para mejorar la recuperación muscular , reducir la fatiga y proteger la masa muscular durante entrenamientos intensos. Cada porción contiene una proporción efectiva de BCAA, enriquecida con taurina y minerales clave como calcio, fósforo, magnesio, sodio y potasio, ayudando a mantener el equilibrio muscular y el rendimiento. Disponible en sabores deliciosos como cherry, frutos rojos, fresa y blue berry . BENEFICIOS DEL PRODUCTO Recuperación muscular acelerada: Favorece la reparación del tejido muscular después del ejercicio intenso. Menos fatiga y mejor resistencia: Disminuye el cansancio y mejora la capacidad de entrenamiento gracias a su combinación con taurina. Protección contra el catabolismo: Preserva la masa muscular en periodos de déficit calórico o entrenamientos de alto rendimiento. Hidratación y balance mineral: Contiene electrolitos como potasio y sodio que favorecen el rendimiento físico. Aminoácidos fermentados: Mejor absorción y pureza, sin rellenos ni azúcares añadidos.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "BCAA_1K", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "OSTEOFLEX - 100 CápsulasOSTEOFLEX - 100 Cápsulas",
      price: "$500.00",
      longDescription:
        "Osteoflex Purest Life combina glucosamina y condroitina para proteger articulaciones, reducir inflamación y mejorar la movilidad. Ideal para personas con desgaste articular o dolor crónico. Beneficios: • Fortalece articulaciones • Alivia molestias y rigidez • Protege cartílago y movilidad • Apoya recuperación articular",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "OSTEOFLEX_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "Whey Protein 2.2 kgWhey Protein 2.2 kg",
      price: "$850.00",
      longDescription:
        "More Than Pure Whey Protein es una proteína en polvo de alta calidad con 22 g de proteína por porción , enriquecida con 5 g de BCAA y 5 g de glutamina , ideal para aumentar masa muscular, mejorar el rendimiento físico y acelerar la recuperación muscular después del entrenamiento. Fácil de digerir y con sabores deliciosos, es perfecta para quienes buscan resultados reales sin sacrificar el sabor. BENEFICIOS DEL PRODUCTO Aumento de masa muscular: Estimula la síntesis de proteínas y el crecimiento muscular con 22 g de proteína de suero por scoop. Recuperación rápida: Contiene BCAA y glutamina que ayudan a reducir el daño muscular y favorecen una recuperación más eficaz. Fácil digestión: Fórmula ligera, sin azúcar añadida, que se disuelve fácilmente y es amable con el estómago. Energía limpia: Aporta energía post-entreno sin azúcares, grasas ni calorías innecesarias. Sabor irresistible: Disponible en sabores como chocolate, vainilla, galleta, ferrero, fresa y froot loops, para que tomar proteína sea un gusto.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "ISO_Proteína_Aislada_de_Suero_More_Than_Pure_sabor", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "SILICARDO - 100 CápsulasSILICARDO - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Silicardo Purest Life contiene extracto de cardo mariano, ideal para proteger el hígado, apoyar su función y promover una desintoxicación natural. Beneficios: • Desintoxica el hígado • Apoya función hepática • Reduce inflamación abdominal • Mejora digestión y metabolismo",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "SILICARDO_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "ISO WOMAN 1.8 kg",
      price: "$890.00",
      longDescription:
        "ISO WOMAN de More Than Pure es una proteína aislada diseñada especialmente para mujeres. Aporta 25 g de proteína por porción , enriquecida con colágeno hidrolizado, biotina, coenzima Q10 y vitaminas C y E , promoviendo no solo el desarrollo muscular, sino también el cuidado de la piel, uñas y cabello. Gracias a su fórmula ligera, sin azúcar ni grasa, y su rápida absorción, es ideal para complementar una rutina de entrenamiento enfocada en tonificación, firmeza y salud integral. Disponible en sabores irresistibles como chocolate, vainilla, capuchino, galleta, fresa, froot loops y ferrero . BENEFICIOS DEL PRODUCTO Tonificación y masa magra: 25 g de proteína aislada por porción que favorecen el desarrollo muscular sin grasa. Piel, cabello y uñas más saludables: Contiene colágeno y biotina para mejorar la elasticidad y fortalecer desde dentro. Antioxidantes y juventud celular: Enriquecida con coenzima Q10 y vitaminas C y E que combaten el envejecimiento prematuro. Fórmula limpia: Cero azúcar, cero grasa, baja en carbohidratos y fácil de digerir. Ideal para mujeres activas: Apoya tanto objetivos físicos como estéticos en un solo suplemento.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "ISO_WOMAN_18_kg", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title:
        "Creatina Monohidratada + More Than Pure + Natural Flavor + 300gCreatina Monohidratada + More Than Pure + Natural Flavor + 300g",
      price: "$350.00",
      longDescription:
        "Descripción del producto: Potencia tu rendimiento con la Creatina Monohidratada de More Than Pure . Formulada con creatina 100% pura y micronizada, esta presentación de 300 gramos sin sabor es ideal para quienes buscan mejorar fuerza, energía y recuperación sin aditivos ni saborizantes. Es perfecta para mezclarse fácilmente con agua, jugos o tu suplemento favorito. Ya sea que estés entrenando para ganar masa muscular, mejorar tu resistencia o acelerar tu recuperación, esta creatina es un aliado esencial en tu rutina. Beneficios destacados: Aumento de fuerza y potencia : Mejora el rendimiento en entrenamientos de alta intensidad y corta duración. Recuperación muscular más rápida : Reduce el tiempo de fatiga y mejora la regeneración muscular después del ejercicio. Mayor volumen muscular : Favorece la retención de agua intracelular para músculos más densos y con mejor apariencia. Fácil de mezclar : Su formato micronizado se disuelve fácilmente sin grumos. Libre de sabor : Se adapta a cualquier bebida o rutina nutricional.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "Creatina_Monohidratada__More_Than_Pure__Natural_Fl", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "DITOX - 100 CápsulasDITOX - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Ditox Purest Life es un detox natural que elimina toxinas, reduce inflamación, aligera la digestión y apoya al hígado y riñones. Beneficios: • Elimina toxinas del cuerpo • Reduce hinchazón e inflamación • Mejora digestión y energía • Apoya hígado y riñones",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "DITOX_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "PROBIÓTICOS - 100 CápsulasPROBIÓTICOS - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Probióticos Purest Life repuebla la microbiota intestinal, mejora la digestión, la absorción de nutrientes y refuerza el sistema inmune. Beneficios: • Equilibra la flora intestinal • Mejora digestión y absorción • Refuerza el sistema inmune • Disminuye inflamación abdominal",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "PROBIÓTICOS_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "ISO+ Proteína Aislada de Suero More Than Pure sabor Vainilla",
      price: "$450.00",
      longDescription: "More Than Pure",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "ISO_Proteína_Aislada_de_Suero_More_Than_Pure_sabor", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "Atomic Preworkout 300g",
      price: "$450.00",
      longDescription:
        "Atomic Preworkout de More Than Pure es un preentrenamiento de alta potencia diseñado para quienes entrenan con intensidad. Su fórmula combina ingredientes clave como cafeína, taurina, arginina, yohimbina y ornitina , ofreciendo un poderoso impulso de energía, enfoque mental y resistencia muscular desde la primera toma. Ideal para rutinas exigentes, este suplemento favorece una mayor congestión muscular, mejora el rendimiento físico y prepara tu cuerpo y mente para darlo todo. Disponible en sabores potentes como Blueberry, Kiwi, Cherry Ice y Pasión Fruit . BENEFICIOS DEL PRODUCTO Energía explosiva inmediata: Gracias a su alto contenido de cafeína, taurina y yohimbina, maximiza el rendimiento sin fatiga temprana. Mayor concentración mental: Mejora el enfoque durante el entrenamiento con su combinación de estimulantes y vitamina B3. Más resistencia y fuerza: La beta alanina y ornitina ayudan a retrasar el cansancio muscular y aumentar el rendimiento. Congestión muscular intensa: La arginina favorece la vasodilatación para lograr mayor bombeo y oxigenación muscular. Sabor intenso y fórmula avanzada: Diseñado para quienes buscan resultados reales en cada entrenamiento.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "Atomic_Preworkout_300g", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "ISO+ 2.2 kg",
      price: "$950.00",
      longDescription:
        "ISO+ de More Than Pure es una proteína aislada premium, diseñada para quienes buscan desarrollar masa magra, tonificar y recuperarse de forma eficaz . Con 27 g de proteína por porción y enriquecida con BCAA y glutamina , ISO+ se absorbe rápidamente y aporta lo necesario para rendir más y recuperarte mejor. Libre de grasas, con bajo contenido calórico y sin azúcar añadida. BENEFICIOS Aporta proteína limpia y efectiva 27 g de proteína aislada de alta calidad por scoop. Recuperación más rápida Gracias a su contenido de BCAA y glutamina que reducen el daño muscular. Apoya el desarrollo de masa magra Ideal para fases de definición o mantenimiento muscular. Fácil digestión y rápida absorción Perfecta para antes o después del entrenamiento. Sin azúcar ni grasa añadida Una opción ligera, efectiva y deliciosa.",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "ISO_22_kg", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "TÉ VERDE - 60 CápsulasTÉ VERDE - 60 Cápsulas",
      price: "$394.00",
      longDescription:
        "Té Verde Purest Life contiene extracto de camellia sinensis que acelera el metabolismo, mejora la digestión y favorece la quema de grasa. Ideal para quienes buscan controlar su peso y tener más energía. Beneficios: • Estimula quema de grasa • Mejora metabolismo y digestión • Aporta energía natural • Ideal para control de peso",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "TÉ_VERDE_-_60_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "RESVERATROL - 60 CápsulasRESVERATROL - 60 Cápsulas",
      price: "$500.00",
      longDescription:
        "Resveratrol Purest Life es un potente antioxidante natural extraído de la uva roja. Protege las células del envejecimiento, mejora la circulación y refuerza el sistema inmunológico. Ideal para quienes buscan longevidad, claridad mental y salud cardiovascular. Beneficios: • Potente antioxidante celular • Apoya corazón y circulación • Refuerza defensas y claridad mental • Promueve longevidad saludable",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "RESVERATROL_-_60_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "UP TEST-ON - 100 CápsulasUP TEST-ON - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Up Test-On Purest Life es una fórmula para hombres que desean recuperar vitalidad, fuerza, libido y equilibrio hormonal. Con ingredientes naturales de alta potencia. Beneficios: • Aumenta vitalidad masculina • Mejora fuerza y libido • Apoya testosterona natural • Eleva rendimiento físico",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "UP_TEST-ON_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "PEPTONAS - 100 CápsulasPEPTONAS - 100 Cápsulas",
      price: "$550.00",
      longDescription:
        "Peptonas Purest Life es un suplemento premium con hidrolizado de proteínas que favorece la regeneración celular, mejora la firmeza de la piel y acelera la recuperación muscular. Ideal para personas activas, en rehabilitación o que buscan tonificar su cuerpo desde adentro. Beneficios: • Regenera músculos y tejidos • Tonifica y mejora la firmeza de la piel • Aporta energía y acelera recuperación • Refuerza el sistema inmune",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "PEPTONAS_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "KIDNEY CLEANSE - 100 CápsulasKIDNEY CLEANSE - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Kidney Cleanse Purest Life apoya la salud renal, reduce la retención de líquidos y promueve una limpieza profunda del sistema urinario. Beneficios: • Limpia y fortalece riñones • Disminuye retención de líquidos • Elimina toxinas naturales • Mejora función urinaria",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "KIDNEY_CLEANSE_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "CORDYCEPS - 60 CápsulasCORDYCEPS - 60 Cápsulas",
      price: "$400.00",
      longDescription:
        "Cordyceps Purest Life mejora el rendimiento físico, la oxigenación y la energía celular. Ideal para personas activas y deportistas. Beneficios: • Aumenta rendimiento físico • Mejora oxigenación celular • Apoya sistema inmune • Aporta energía constante",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "CORDYCEPS_-_60_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "MULTIVITAMÍNICO - 100 CápsulasMULTIVITAMÍNICO - 100 Cápsulas",
      price: "$450.00",
      longDescription:
        "Multivitamínico Purest Life reúne vitaminas y minerales esenciales para apoyar tu energía, fortalecer defensas y cubrir deficiencias nutricionales del día a día. Beneficios: • Refuerza defensas y vitalidad • Mejora concentración y energía • Previene deficiencias comunes • Apoya metabolismo y sistema inmune",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "MULTIVITAMÍNICO_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
    {
      title: "MAGNESIO CITRATO - 100 CápsulasMAGNESIO CITRATO - 100 Cápsulas",
      price: "$400.00",
      longDescription:
        "Magnesio Citrato Purest Life ayuda a relajar los músculos, mejorar el descanso y aliviar calambres. Apoya funciones neuromusculares y el sistema nervioso. Beneficios: • Relaja músculos y alivia calambres • Mejora sueño y descanso • Apoya sistema nervioso • Disminuye fatiga y tensión",
      shortDescription: "High-quality whey protein for muscle growth.", // for card
      imageName: "main-desktop", // image for the card
      folderName: "MAGNESIO_CITRATO_-_100_Cápsulas", // folder name for the card and modal
      subtitle: "Subtítulo del producto",
      rating: 4.8,
      reviews: 120,
      discountPrice: 80,
      images: [
        "main-desktop",
        "secondary-desktop",
        "nutritional-table-desktop",
      ],
    },
  ];

  return (
    <div>
      <NavBar />
      <HeroSection />
      <section className="cards-section">
        <h2 className="text-center">Catálogo</h2>
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedProduct({
                  id: index,
                  title: card.title,
                  subtitle: "Subtítulo del producto",
                  rating: 4.8,
                  reviews: 120,
                  price: 100,
                  discountPrice: 80,
                  description: card.longDescription,
                  folderName: card.folderName,
                  images: card.images,
                })
              }
              style={{ cursor: "pointer" }}
            >
              <Card
                price="$100"
                description={card.shortDescription}
                imageName={card.imageName}
                folderName={card.folderName}
              >
                {card.title}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-3">
              <button
                className="btn-close ms-auto"
                onClick={() => setSelectedProduct(null)}
              ></button>
              <ProductDetail product={selectedProduct} />
            </div>
          </div>
        </div>
      )}
      <h2 className="text-center">Métodos de pago</h2>
      <CreditCard />
      <Footer />
    </div>
  );
}

export default App;
