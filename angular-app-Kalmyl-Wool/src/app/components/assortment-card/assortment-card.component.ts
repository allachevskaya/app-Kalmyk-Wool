import { Component } from '@angular/core';

@Component({
  selector: 'app-assortment-card',
  templateUrl: './assortment-card.component.html',
  styleUrls: ['./assortment-card.component.scss']
})
export class AssortmentCardComponent {

  assortment = [
    {
      'img': 'assets/images/assortiment/Greasy sheep wool.png',
      'title': 'Greasy sheep wool',
      'description': 'Greasy sheep wool is untreated wool sheared from sheep or their skins. Greasy sheep wool of fine-, medium- and coarse-wool breeds (or their crossbreeds), that of half-fine wool breeds and that of specific sheep breeds be clustered by structure and fineness into four groups respectively -fine-, half-fine, medium-, and coarse wools.',
    },
    {
      'img': 'assets/images/assortiment/Scoured sheep wool.png',
      'title': 'Scoured sheep wool',
      'description': 'Scoured sheep wool is laboratorially or industrially washed wool that may contain some moisture and wool grease within the established norms. In periods between shearings, the wool grows and gets contaminated with outer substances that add to the weight of wool. So, wool should be washed to remove all such unwanted substances prior to further processing procedures.'
    },
    {
      'img': 'assets/images/assortiment/Coarse wool tops.png',
      'title': 'Coarse wool tops',
      'description': 'Coarse wool tops are wools thoroughly combed with different cards in a special carding machine, the former containing no guard fibers (coarse, thick, flatlock or lusterless ones).Those fibers are arranged in one direction and clustered into single wool strips. Tops are made of sliver wool that has passed through a number of primary processing stages, such as classification by type and quality, decontamination, sorting by grade and purity (after washing). Thereafter the washed wool passes through another sorting and gets prepared for carding to further take the form of wool strips'
    },
    {
      'img': 'assets/images/assortiment/Color wool tops.png',
      'title': 'Color wool tops',
      'description': 'Color wool tops are wools thoroughly combed with different cards in a special carding machine, the former containing no guard fibers (coarse, thick, flatlock or lusterless ones).Those fibers are arranged in one direction and clustered into single wool strips. The product gets industrially colored and is distinguished by silky structure and rich color.'
    },
    {
      'img': 'assets/images/assortiment/fakefur.png',
      'title': '100% wool fake fur',
      'description': '100 % wool fake fur. Fake fur is made of specifically processed and dried fibers manufactured from coal, hydrocarbon and limestone. The fibers are attached to a fabric base of wool or cotton to be further trimmed and colored as desired.'
    },
    {
      'img': 'assets/images/assortiment/Goat hair.png',
      'title': 'Goat hair',
      'description': 'Goat hair is untreated hair sheared from goats and their skins. Goat hair is considered a most popular natural filler, and is also used to produce warm clothes, felted footwear and stuffed toys.'
    },
    {
      'img': 'assets/images/assortiment/Fine goat underhair.png',
      'title': 'Fine goat underhair',
      'description': 'Fine goat underhair is a special wool characterized by high-degree softness and perfect thermal insulation properties. These natural fibers are distinguished by wonderful fineness and minor sinuosity. The underhair combed from live and healthy animals is bright enough, outer hair cells clustered tightly, very expansible, flexible and fabricable. Products made of high quality fine goat underhair are airy and exquisitely soft.'
    },
    {
      'img': 'assets/images/assortiment/Sheep fur hair.png',
      'title': 'Sheep fur hair',
      'description': 'Sheep fur hair is the most precious and soft part, transitional hair within the whole of sheep wool structure. This unique material is used to produce sheep fur hair yarns that are far softer than traditional wool ones. Sheep fur hair products are a combination of thoroughly selected materials and high-quality manufacturing efforts aimed at preserving the best properties of this remarkable substance.'
    },
    {
      'img': 'assets/images/assortiment/Woolen fabric.png',
      'title': 'Woolen fabric',
      'description': 'Woolen fabric is woven from animal fibers (hair). Natural woolen textiles enjoy a universally high demand.'
    },
    {
      'img': 'assets/images/assortiment/Sheepwoolinsulation.png',
      'title': 'Sheep wool insulation (clothes)',
      'description': 'Sheep wool insulation materials are used to produce jackets, overcoats and other outer garments, including heavy trousers, coats, and sweaters.'
    },
    {
      'img': 'assets/images/assortiment/Felting wool.png',
      'title': 'Felting wool',
      'description': 'This wool perfectly suits both for wet and dry felting techniques.'
    },
    {
      'img': 'assets/images/assortiment/Noil combing wool.png',
      'title': 'Noil combing wool',
      'description': 'Combing wool comprises fibers remaining after combed sliver — wool film. It is soft and ductile enough, gets felted evenly. Combing wool is a secondary raw material that is most often used as a base.'
    },
    {
      'img': 'assets/images/assortiment/Carded wool.png',
      'title': 'Carded wool',
      'description': 'Carded wool is wool that has been washed and dried to once pass through a carding machine. Fibers of carded wool are curvy, arranged in all directions, mixed. The fibers are delicate, soft and silken. Uncolored carded wool looks milky warm, gets dyed easily, may have a wide range of shades. It is used for wet, dry, and nuno felting techniques.'
    },

  ]
}

