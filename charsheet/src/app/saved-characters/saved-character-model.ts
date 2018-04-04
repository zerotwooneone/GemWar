import { FormModel } from '../form/form-model';

export interface SavedCharacterModel {
    key: string;
    name: string;
    form: FormModel;
}
