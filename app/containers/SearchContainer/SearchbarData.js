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
  { dropDownType: 'non-muslim', value: 'Hindu', label: 'Non-Muslim' },
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
