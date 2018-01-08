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
