import mongoose, { Document, Model, Schema } from 'mongoose'

export type NoticiaAtributes = {
    title: string;
    description: string
    create_at: Date;
    update_at: Date | undefined;
}

export type NoticiaDocument = Document & NoticiaAtributes;
type NoticaModel = Model<NoticiaDocument>;

const ProdutoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        required: true
    },
    update_at: {
        type: Date,
        required: false
    },
});


export default mongoose.model<NoticiaDocument, NoticaModel>('Noticia', ProdutoSchema);