class Graf {
    constructor(idPlatna, maxGrafX, maxGrafY) { // pri konstruktorju moramo podati ID platna, ki ga sicer ustvarimo v html-ju
        this.canvas = document.getElementById(idPlatna);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.strokeStyle = "#ff0000"; // določimo rdečo barvo kot polnilo
        this.x = new Array(); // ustvarimo novo polje x
        this.y = new Array(); // ustvarimo novo polje y
        this.širinaPlatna = this.canvas.width;
        this.višinaPlatna = this.canvas.height;
        this.maxGrafX = maxGrafX;
        this.maxGrafY = maxGrafY; 
        
        // napolnimo polje x; polje y polnimo sproti
        for (var i=0; i<this.maxGrafX+1; i++) {
            this.x[i] = i; // vrednost za x koordinato
        }
    }
    
    dodajVrednostAliBrišiInDodaj(yVrednost) {
        if (this.y.length == this.maxGrafX+1) { // če je platno veliko 10x10 imamo 11x11 točk (zač. z 0)
            this.y.splice(0,1); // na mestu 0 v polju y brišemo eno vrednost
            this.y[this.maxGrafX] = yVrednost; // novo vrednost dodamo na koncu polja
        }
        else {
            this.y.push(yVrednost); // če polje še ni polno potisnemo novo vrednost v polje
        }
    }
    
    izriši(yVrednost) {
        this.dodajVrednostAliBrišiInDodaj(yVrednost);
        this.ctx.clearRect(0, 0, this.širinaPlatna, this.višinaPlatna); // brišemo platno
        this.ctx.beginPath(); // za začetek izrisa

        for (var i=0; i < this.y.length; i++) {
            this.ctx.lineTo(this.x[i]/this.maxGrafX*this.širinaPlatna, (this.višinaPlatna - (this.y[i]/this.maxGrafY) * this.višinaPlatna)); // za vrednosti y pomnožimo z višino platna
                                                    // npr. 0.25 * 100 = 25
        }    

        this.ctx.stroke(); // za prikaz črte
    }
    
}