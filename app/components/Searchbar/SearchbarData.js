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

export const Religion = [
  { dropDownType: 'religion', value: 'Muslim', label: 'Muslim' },
  { dropDownType: 'religion', value: 'Hindu', label: 'Hindu' },
  { dropDownType: 'religion', value: 'Christian', label: 'Christian' },
  { dropDownType: 'religion', value: 'Sikh', label: 'Sikh' },
  { dropDownType: 'religion', value: 'Parsi', label: 'Parsi' },
  { dropDownType: 'religion', value: 'Jain', label: 'Jain' },
  { dropDownType: 'religion', value: 'Jewish', label: 'Jewish' },
  { dropDownType: 'religion', value: 'Buddhist', label: 'Buddhist' },
  { dropDownType: 'religion', value: 'Spiritual', label: 'Spiritual' },
  { dropDownType: 'religion', value: 'No Religion', label: 'No Religion' },
  { dropDownType: 'religion', value: 'Other', label: 'Other' },
];
export const MotherTongue = [
  { dropDownType: 'motherTongue', value: 'English', label: 'English' },
  { dropDownType: 'motherTongue', value: 'Bengali', label: 'Bengali' },
  { dropDownType: 'motherTongue', value: 'Hindi', label: 'Hindi' },
  { dropDownType: 'motherTongue', value: 'Punjabi', label: 'Punjabi' },
  { dropDownType: 'motherTongue', value: 'Sindhi', label: 'Sindhi' },
  { dropDownType: 'motherTongue', value: 'Urdu', label: 'Urdu' },
  { dropDownType: 'motherTongue', value: 'Chinese', label: 'Chinese' },
  { dropDownType: 'motherTongue', value: 'French', label: 'French' },
  { dropDownType: 'motherTongue', value: 'Nepali', label: 'Nepali' },
  { dropDownType: 'motherTongue', value: 'Persian', label: 'Persian' },
  { dropDownType: 'motherTongue', value: 'Pashto', label: 'Pashto' },
  { dropDownType: 'motherTongue', value: 'Russian', label: 'Russian' },
  { dropDownType: 'motherTongue', value: 'Seraiki', label: 'Seraiki' },
  { dropDownType: 'motherTongue', value: 'Santhali', label: 'Santhali' },
  { dropDownType: 'motherTongue', value: 'Swedish', label: 'Swedish' },
  { dropDownType: 'motherTongue', value: 'Spanish', label: 'Spanish' },
  { dropDownType: 'motherTongue', value: 'Tulu', label: 'Tulu' },
  { dropDownType: 'motherTongue', value: 'Hindko', label: 'Hindko' },
  { dropDownType: 'motherTongue', value: 'Kashmiri', label: 'Kashmiri' },
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
