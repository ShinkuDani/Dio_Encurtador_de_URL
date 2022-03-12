import {prop, getModelForClass} from '@typegoose/typegoose'
//import {prop, Typegoose} from '@hasezoey/typegoose' dependencia depreciada substituida pela @typegoose/typegoose

export class URL  {
    @prop({required:true})
    hash:string

    @prop({required: true})
    originURL: string

    @prop({required:true})
    shortURL: string

}

export const URLModel = getModelForClass(URL)

/* devido ao pacote demonstrado na aula ter side depreciado foram realizadas algumas mudanças em relação ao original, sendo que a de baixa é a original. 
export class URL extends Typegoose  {
    @prop({required:true})
    hash:string

    @prop({required: true})
    originURL: string

    @prop({required:true})
    shortURL: string

}

export const URLModel = new URL().getModelForClass(URL) */