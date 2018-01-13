export const Gender = [
  { dropDownType: 'gender', value: 'Female', label: 'Female' },
  { dropDownType: 'gender', value: 'Male', label: 'Male', clearableValue: true },
];

// Aged finder
function AgeFinder(type) {
  const Aged = [];
  for (let i = 17; i < 70; i++) {
    Aged.push({ dropDownType: type, value: i, label: i });
  }
  return Aged;
}
// Religion
export const Religion = [
  { dropDownType: 'religion', value: 'Muslim', label: 'Muslim' },
  { dropDownType: 'religion', value: 'Hindu', label: 'Non-Muslim' },
  { dropDownType: 'religion', value: 'Christian', label: 'Christian' },
  { dropDownType: 'religion', value: 'No Religion', label: 'No Religion' },
  { dropDownType: 'religion', value: 'Other', label: 'Other' },
];
// Mother tongue
export const MotherTongue = [
  { dropDownType: 'motherTongue', value: 'Urdu', label: 'Urdu' },
  { dropDownType: 'motherTongue', value: 'English', label: 'English' },
  { dropDownType: 'motherTongue', value: 'Punjabi', label: 'Punjabi' },
  { dropDownType: 'motherTongue', value: 'Sindhi', label: 'Sindhi' },
  { dropDownType: 'motherTongue', value: 'Pashto', label: 'Pashto' },
  { dropDownType: 'motherTongue', value: 'Seraiki', label: 'Seraiki' },
  { dropDownType: 'motherTongue', value: 'Hindko', label: 'Hindko' },
  { dropDownType: 'motherTongue', value: 'Kashmiri', label: 'Kashmiri' },
  { dropDownType: 'motherTongue', value: 'Balochi', label: 'Balochi' },
  { dropDownType: 'motherTongue', value: 'Other', label: 'Other' },
];

export const MatrialStatus = [
  { dropDownType: 'status', value: 'Single', label: 'Single' },
  { dropDownType: 'status', value: 'Divorced', label: 'Divorced' },
  { dropDownType: 'status', value: 'Married', label: 'Married' },
];

export const FamilyAffluence = [
  { dropDownType: 'familyAffluence', value: 'Affluent', label: 'Affluent' },
  { dropDownType: 'familyAffluence', value: 'Upper Middle class', label: 'Upper Middle class' },
  { dropDownType: 'familyAffluence', value: 'Middle class', label: 'Middle class' },
  { dropDownType: 'familyAffluence', value: 'Lower Middle class', label: 'Lower Middle class' },
  { dropDownType: 'familyAffluence', value: 'Lower class', label: 'Lower class' },
];

export const BloodGroup = [
  { dropDownType: 'bloodGroup', value: 'Do not know', label: 'Do not know' },
  { dropDownType: 'bloodGroup', value: 'A+', label: 'A+' },
  { dropDownType: 'bloodGroup', value: 'A-', label: 'A-' },
  { dropDownType: 'bloodGroup', value: 'B+', label: 'B+' },
  { dropDownType: 'bloodGroup', value: 'B-', label: 'B-' },
  { dropDownType: 'bloodGroup', value: 'AB+', label: 'AB+' },
  { dropDownType: 'bloodGroup', value: 'AB-', label: 'AB-' },
  { dropDownType: 'bloodGroup', value: 'O+', label: 'O+' },
  { dropDownType: 'bloodGroup', value: 'O-', label: 'O-' },
];

export const SkinTone = [
  { dropDownType: 'skinTone', value: 'Very Fair', label: 'Very Fair' },
  { dropDownType: 'skinTone', value: 'Fair', label: 'Fair' },
  { dropDownType: 'skinTone', value: 'Wheatish', label: 'Wheatish' }, // Means gandi skin/brown skin type
  { dropDownType: 'skinTone', value: 'Dark', label: 'Dark' },
];


export const BodyType = [
  { dropDownType: 'bodyType', value: 'Average', label: 'Average' },
  { dropDownType: 'bodyType', value: 'Slim', label: 'Slim' },
  { dropDownType: 'bodyType', value: 'Athletic', label: 'Athletic' },
  { dropDownType: 'bodyType', value: 'Heavy', label: 'Heavy' },
];


export const HairType = [
  // Brown
  { dropDownType: 'hairType', value: 'Brown Straight long', label: 'Brown Straight long' },
  { dropDownType: 'hairType', value: 'Brown Straight medium', label: 'Brown Straight medium' },
  { dropDownType: 'hairType', value: 'Brown Straight short', label: 'Brown Straight short' },

  { dropDownType: 'hairType', value: 'Brown Wavy long', label: 'Brown Wavy long' },
  { dropDownType: 'hairType', value: 'Brown Wavy medium', label: 'Brown Wavy medium' },
  { dropDownType: 'hairType', value: 'Brown Wavy short', label: 'Brown Wavy short' },

  { dropDownType: 'hairType', value: 'Brown Curly long', label: 'Brown Curly long' },
  { dropDownType: 'hairType', value: 'Brown Curly medium', label: 'Brown Curly medium' },
  { dropDownType: 'hairType', value: 'Brown Curly short', label: 'Brown Curly short' },

  { dropDownType: 'hairType', value: 'Brown Kinky long', label: 'Brown Kinky long' },
  { dropDownType: 'hairType', value: 'Brown Kinky medium', label: 'Brown Kinky medium' },
  { dropDownType: 'hairType', value: 'Brown Kinky short', label: 'Brown Kinky short' },
  // Black
  { dropDownType: 'hairType', value: 'Black Straight long', label: 'Black Straight long' },
  { dropDownType: 'hairType', value: 'Black Straight medium', label: 'Black Straight medium' },
  { dropDownType: 'hairType', value: 'Black Straight short', label: 'Black Straight short' },

  { dropDownType: 'hairType', value: 'Black Wavy long', label: 'Black Wavy long' },
  { dropDownType: 'hairType', value: 'Black Wavy medium', label: 'Black Wavy medium' },
  { dropDownType: 'hairType', value: 'Black Wavy short', label: 'Black Wavy short' },

  { dropDownType: 'hairType', value: 'Black Curly long', label: 'Black Curly long' },
  { dropDownType: 'hairType', value: 'Black Curly medium', label: 'Black Curly medium' },
  { dropDownType: 'hairType', value: 'Black Curly short', label: 'Black Curly short' },

  { dropDownType: 'hairType', value: 'Black Kinky long', label: 'Black Kinky long' },
  { dropDownType: 'hairType', value: 'Black Kinky medium', label: 'Black Kinky medium' },
  { dropDownType: 'hairType', value: 'Black Kinky short', label: 'Black Kinky short' },

  // White
  { dropDownType: 'hairType', value: 'White Straight long', label: 'White Straight long' },
  { dropDownType: 'hairType', value: 'White Straight medium', label: 'White Straight medium' },
  { dropDownType: 'hairType', value: 'White Straight short', label: 'White Straight short' },

  { dropDownType: 'hairType', value: 'White Wavy long', label: 'White Wavy long' },
  { dropDownType: 'hairType', value: 'White Wavy medium', label: 'White Wavy medium' },
  { dropDownType: 'hairType', value: 'White Wavy short', label: 'White Wavy short' },

  { dropDownType: 'hairType', value: 'White Curly long', label: 'White Curly long' },
  { dropDownType: 'hairType', value: 'White Curly medium', label: 'White Curly medium' },
  { dropDownType: 'hairType', value: 'White Curly short', label: 'White Curly short' },

  { dropDownType: 'hairType', value: 'White Kinky long', label: 'White Kinky long' },
  { dropDownType: 'hairType', value: 'White Kinky medium', label: 'White Kinky medium' },
  { dropDownType: 'hairType', value: 'White Kinky short', label: 'White Kinky short' },
];

export const Community = [
  { dropDownType: 'community', label: 'Chauhdary', value: 'Chauhdary' },
  { dropDownType: 'community', label: 'Malik', value: 'Malik' },
  { dropDownType: 'community', label: 'Raja', value: 'Raja' },
  { dropDownType: 'community', label: 'Shakeh', value: 'Shakeh' },
  { dropDownType: 'community', label: 'Butt', value: 'Butt' },
  { dropDownType: 'community', label: 'Mir', value: 'Mir' },
  { dropDownType: 'community', label: 'Kayani', value: 'Kayani' },
  { dropDownType: 'community', label: 'Khan', value: 'Khan' },
];
export const ageOfDropDown = [
  {
    label: 'aged',
    options: AgeFinder('fromAge'),
  },
  {
    label: '',
    options: AgeFinder('toAge'),
  },
];

export const listOfDropDown = [
  {
    label: "I'm looking for a",
    options: Gender,
  },
  {
    label: 'aged',
    options: AgeFinder('fromAge'),
  },
  {
    label: '',
    options: AgeFinder('toAge'),
  },
  {
    label: 'of religion',
    options: Religion,
  },
  {
    label: 'mother tongue',
    options: MotherTongue,
  },
];
