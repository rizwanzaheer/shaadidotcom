export const Gender = [
  { dropDownType: 'gender', value: 'Woman', label: 'Woman' },
  { dropDownType: 'gender', value: 'Man', label: 'Man', clearableValue: true },
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
  { dropDownType: 'skinTone', value: 'Wheatish', label: 'Wheatish' },
  { dropDownType: 'skinTone', value: 'Dark', label: 'Dark' },
];


export const BodyType = [
  { dropDownType: 'bodyType', value: 'Average', label: 'Average' },
  { dropDownType: 'bodyType', value: 'Slim', label: 'Slim' },
  { dropDownType: 'bodyType', value: 'Athletic', label: 'Athletic' },
  { dropDownType: 'bodyType', value: 'Heavy', label: 'Heavy' },
];


export const HairType = [
  { dropDownType: 'hairType', value: 'Brown Straight', label: 'Brown Straight' },
  { dropDownType: 'hairType', value: 'Black Straight', label: 'Black Straight' },
  { dropDownType: 'hairType', value: 'White Straight', label: 'White Straight' },
  { dropDownType: 'hairType', value: 'Brown Wavy', label: 'Brown Wavy' },
  { dropDownType: 'hairType', value: 'Black Wavy', label: 'Black Wavy' },
  { dropDownType: 'hairType', value: 'White Wavy', label: 'White Wavy' },
  { dropDownType: 'hairType', value: 'Brown Curly', label: 'Brown Curly' },
  { dropDownType: 'hairType', value: 'Black Curly', label: 'Black Curly' },
  { dropDownType: 'hairType', value: 'White Curly', label: 'White Curly' },
  { dropDownType: 'hairType', value: 'Brown Kinky', label: 'Brown Kinky' },
  { dropDownType: 'hairType', value: 'Black Kinky', label: 'Black Kinky' },
  { dropDownType: 'hairType', value: 'White Kinky', label: 'White Kinky' },
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
