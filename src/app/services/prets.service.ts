export class PretsService {
        private livres = [
        {
            "id":"1",
            "nom": "Le Petit Prince",
            "auteur":"St Exupéry",
            "isLent":false
        },
        {
            "id":"2",
            "nom": "l'Iliade",
            "auteur": "Homère",
            "isLent":false
        }]
    private cds = [
        {
            "id":"1",
            "nom": "L'heure a sonné",
            "auteur":"Alee",
            "isLent":false
        },
        {
            "id":"2",
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
}