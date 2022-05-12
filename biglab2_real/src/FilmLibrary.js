function Film(id, title, isFavourite = false, watchDate, rating){
    this.id = id;
    this.title = title;
    this.isFavourite = isFavourite;
    this.watchDate = watchDate;
    this.rating = rating;
}

function FilmLibrary(){
    this.films = [];
    this.addNewFilm = (film) => this.films.push(film);

    this.sortByDate = () => {
        // [...variableName] crea un nuovo array (di default userebbe il riferimento a quello vecchio)
        return [...this.films].sort((a,b) => {
                if(a.watchDate == undefined) return 1; //mette alla fine gli undefined
                if(b.watchDate == undefined) return -1;
                a.watchDate.isAfter(b.watchDate) ? 1 : -1;
                });
    }

    this.deleteFilm = (film) => this.films = this.films.filter( a => a != film);

    this.getRated = () => {
        return [...this.films].filter(a => a.rating != undefined).sort( (a,b) => a.rating > b.rating ? -1 : 1);
    }
}

export {Film, FilmLibrary};