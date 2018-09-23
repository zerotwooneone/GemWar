import { FormArray, FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static dieType(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const isValid = true;
    const message = {
      'dieType': {
        'message': 'The die type is invalid'
      }
    };
    return isValid ? null : message;
  }

  static dieCount(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const isValid = true;
    const message = {
      'dieCount': {
        'message': 'The die count is invalid'
      }
    };
    return isValid ? null : message;
  }

  static rollModifier(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const isValid = true;
    const message = {
      'rollModifier': {
        'message': 'The modifier is invalid'
      }
    };
    return isValid ? null : message;
  }

  static traitName(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const isValid = true;
    const message = {
      'rollModifier': {
        'message': 'The trait name is invalid'
      }
    };
    return isValid ? null : message;
  }

  static skillName(c: FormControl): ValidationErrors {
    const strValue = String(c.value);
    const isValid = true;
    const message = {
      'skillName': {
        'message': 'The skill name is invalid'
      }
    };
    return isValid ? null : message;
  }

  static specialization(c: FormControl): ValidationErrors {
    const strValue = String(c.value);
    const isValid = true;
    const message = {
      'specialization': {
        'message': 'The specialization name is invalid'
      }
    };
    return isValid ? null : message;
  }

  static uniqueTraitName(a: FormArray): Promise<ValidationErrors> {
    const message = {
      'uniqueTraitName': {
        'message': 'The Trait Name is not unique'
      }
    };
    return new Promise(resolve => {
      let hash = {};
      // for (var control of a.controls) {
      //  let group = <FormGroup>(control);
      //  let traitNameControl = group.get('traitName');
      //  const strValue = String(traitNameControl.value);
      //  if (hash.hasOwnProperty(strValue)) {
      //    resolve(message);
      //    return;
      //  }
      //  hash[strValue] = null;
      // }
      resolve(null);
    });
  }

  static uniqueSkillName(a: FormArray): Promise<ValidationErrors> {
    const message = {
      'uniqueSkillName': {
        'message': 'The Skill Name is not unique'
      }
    };
    return new Promise(resolve => {
      // let hash = {};
      // for (var control of a.controls) {
      //  let group = <FormGroup>(control);
      //  let skillNameControl = group.get('skillName');
      //  const strValue = String(skillNameControl.value);
      //  if (hash.hasOwnProperty(strValue)) {
      //    resolve(message);
      //    return;
      //  }
      //  hash[strValue] = null;
      // }
      resolve(null);
    });
  }
}
