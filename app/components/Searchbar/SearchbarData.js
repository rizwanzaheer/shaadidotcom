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
  { dropDownType: 'motherTougue', value: 'English', label: 'English' },
  { dropDownType: 'motherTougue', value: 'Bengali', label: 'Bengali' },
  { dropDownType: 'motherTougue', value: 'Hindi', label: 'Hindi' },
  { dropDownType: 'motherTougue', value: 'Punjabi', label: 'Punjabi' },
  { dropDownType: 'motherTougue', value: 'Sindhi', label: 'Sindhi' },
  { dropDownType: 'motherTougue', value: 'Urdu', label: 'Urdu' },
  { dropDownType: 'motherTougue', value: 'Chinese', label: 'Chinese' },
  { dropDownType: 'motherTougue', value: 'French', label: 'French' },
  { dropDownType: 'motherTougue', value: 'Nepali', label: 'Nepali' },
  { dropDownType: 'motherTougue', value: 'Persian', label: 'Persian' },
  { dropDownType: 'motherTougue', value: 'Pashto', label: 'Pashto' },
  { dropDownType: 'motherTougue', value: 'Russian', label: 'Russian' },
  { dropDownType: 'motherTougue', value: 'Seraiki', label: 'Seraiki' },
  { dropDownType: 'motherTougue', value: 'Santhali', label: 'Santhali' },
  { dropDownType: 'motherTougue', value: 'Swedish', label: 'Swedish' },
  { dropDownType: 'motherTougue', value: 'Spanish', label: 'Spanish' },
  { dropDownType: 'motherTougue', value: 'Tulu', label: 'Tulu' },
  { dropDownType: 'motherTougue', value: 'Hindko', label: 'Hindko' },
  { dropDownType: 'motherTougue', value: 'Kashmiri', label: 'Kashmiri' },
  { dropDownType: 'motherTougue', value: 'Other', label: 'Other' },
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
