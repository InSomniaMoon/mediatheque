import { identifierModuleUrl } from '@angular/compiler';

export class PretsService {
  private livres = [
    {
      "id":"l1",
      "nom": "Le Petit Prince",
      "auteur":"St Exupéry",
      "isLent":false
    },
    {
      "id":"l2",
      "nom": "l'Iliade",
      "auteur": "Homère",
      "isLent":false
    }
  ]
  private cds = [
    {
      "id":"c1",
      "nom": "L'heure a sonné",
      "auteur":"Alee",
      "isLent":false
    },
    {
      "id":"c2",
      "nom": "Beyond",
      "auteur":"Naaman",
      "isLent":false
    },
  ]

  constructor() { }

  public getBibliotheque() {
    return this.livres
  }

  public getJukeBox() {
      return this.cds
  }

  public lend(qqc) {
    switch (qqc.id[0]) {
      case 'c':
        this.cds[qqc.id[1]-1].isLent = true
        console.log('cd prêté!')
        break;
      case 'l':
        this.livres[qqc.id[1]-1].isLent = true
        console.log('livre prété!')
        break;
      }
    }

    public return(qqc) {
      switch (qqc.id[0]) {
        case 'c':
            this.cds[qqc.id[1]-1].isLent = false
          console.log('cd rendu!')
          break;
        case 'l':
            this.livres[qqc.id[1]-1].isLent = false
          console.log('livre rendu!')
          break;
        }
  
    }
}