import races from './races.js';

export default class Char {
    constructor(level, stats) {
        this.lvl = level;

        this.class = 'Classe';
        this.race = { name: 'Raça', modifiers: [] };

        this.setAttr(stats);
        this.applyModifers();

        console.log(this.lvl);

        this.hp = (this.vig + this.con + this.lvl * 10) * 5;
        this.mp = (this.sab + this.int + this.lvl * 10) * 5;

        this.ca = Math.floor((this.con + this.dex) / 5);
        this.mr = Math.floor((this.con + this.sab) / 5);

        this.fortitude = Math.floor(this.con / 5) < 1 ? 1 : Math.floor(this.con / 5);
        this.reflex = Math.floor(this.dex / 5) < 1 ? 1 : Math.floor(this.dex / 5);
        this.willpower = Math.floor(this.sab / 5) < 1 ? 1 : Math.floor(this.sab / 5);
        this.atackbonus = Math.floor((this.for + this.dex) / 10 + (this.lvl / 2)) < 1 ? 1 : Math.floor((this.for + this.dex) / 10 + (this.lvl / 2));
        this.grapple = Math.floor((this.for + this.dex) / 5) < 1 ? 1 : Math.floor((this.for + this.dex) / 5);
        this.surprise = Math.floor((this.con + this.per) / 10) < 1 ? 1 : Math.floor((this.con + this.per) / 10);
        this.initiative = Math.floor((this.int + this.sab) / 5 + getRandomInt(1, 12));

        this.physicaldmg = Math.floor(this.for / 1.5) < 1 ? 1 : Math.floor(this.for / 1.5);
        this.magicdmg = Math.floor(this.int / 1.5) < 1 ? 1 : Math.floor(this.int / 1.5);
        this.aim = Math.floor(this.dex / 1.5) < 1 ? 1 : Math.floor(this.dex / 1.5);
    }

    setAttr(attr) {
        this.for = attr[0] <= 1 ? 1 : attr[0];
        this.dex = attr[1] <= 1 ? 1 : attr[1];
        this.con = attr[2] <= 1 ? 1 : attr[2];
        this.int = attr[3] <= 1 ? 1 : attr[3];
        this.sab = attr[4] <= 1 ? 1 : attr[4];
        this.car = attr[5] <= 1 ? 1 : attr[5];
        this.vig = attr[6] <= 1 ? 1 : attr[6];
        this.per = attr[7] <= 1 ? 1 : attr[7];

    }

    applyModifers() {
        this.race.modifiers.forEach(modifier => {
            this[modifier.type] = ((this[modifier.type] + modifier.value) <= 1) ? 1 : this[modifier.type] + modifier.value;
        });
    }

    show() {
        console.log('Race:', this.race.name);
        console.log('Class:', this.class);

        console.log('str:', this.for);
        console.log('dex:', this.dex);
        console.log('con:', this.con);
        console.log('int:', this.int);
        console.log('sab:', this.sab);
        console.log('car:', this.car);
        console.log('vig:', this.vig);
        console.log('per:', this.per);

        console.log('HP:', this.hp);
        console.log('MP:', this.mp);

        console.log('CA:', this.ca);
        console.log('MR:', this.mr);


        console.log("Fortitude:", this.fortitude);
        console.log("Reflexos:", this.reflex);
        console.log("Vontade:", this.willpower);
        console.log("BA:", this.atackbonus);
        console.log("Agarrar:", this.grapple);
        console.log("Surpresa:", this.surprise);
        console.log("Iniciativa:", this.initiative);

        console.log("DF", this.physicaldmg);
        console.log("DM", this.magicdmg);
        console.log("Mira", this.aim);

    }

    getString() {
        let str = `
        Força:  ${this.for}<br>
        Destreza:  ${this.dex}<br>
        Constituição:  ${this.con}<br>
        Inteligencia:  ${this.int}<br>
        Sabedoria:  ${this.sab}<br>
        Carisma:  ${this.car}<br>
        Vigor:  ${this.vig}<br>
        Percepção:  ${this.per}<br>
        <br>
        HP:  ${this.hp}<br>
        MP: ${this.mp}<br>
        CA: ${this.ca}<br>
        MR:  ${this.mr}<br>`

        let str2 = `
        Fortitude: ${this.fortitude}<br>
        Reflexos: ${this.reflex}<br>
        Vontade: ${this.willpower}<br>
        BA: ${this.atackbonus}<br>
        Agarrar: ${this.grapple}<br>
        Surpresa: ${this.surprise}<br>
        Iniciativa: ${this.initiative}<br>
        <br><br>
        DF: ${this.physicaldmg}<br>
        DM: ${this.magicdmg}<br>
        Mira: ${this.aim}<br>`;

        return [str, str2];
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}