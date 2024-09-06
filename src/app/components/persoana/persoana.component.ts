import { Component, computed, effect, input, signal } from "@angular/core";

@Component({
    selector:"app-persoana",
    standalone: true,
    templateUrl: "./persoana.component.html",
    styleUrl: "./persoana.component.css"
})
export class PersoanaComponent{
    anNastere=input.required<number>({alias:"an"})
    varsta=computed(()=>2024-this.anNastere())
    yearWord=computed(()=>{
        if(this.varsta()==1)return "an"
        if(this.varsta() != 0 && (this.varsta() % 100 == 0 || this.varsta() % 100 > 19)) return "de ani"
        return "ani"
    })

    constructor(){
        effect(()=>{
            console.log(`Persoana are acum ${this.varsta()} ${this.yearWord()}`)
        })
    }

    scadeAn(){
        // this.anNastere.update(v=>v-1)
    }

    cresteAn(){
        // this.anNastere.update(v=>v+1)
    }

}