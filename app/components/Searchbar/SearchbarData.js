export const Gender = [
  { value: 'Woman', label: 'Woman' },
  { value: 'Man', label: 'Man', clearableValue: true },
];

export const Aged = [];
// Aged finder
(function AgeFinder() {
  for (let i = 17; i < 70; i++) {
    Aged.push({ value: i, label: i });
  }
}());
export const Religion = [
  { value: 'Muslim', label: 'Muslim' },
  { value: 'Hindu', label: 'Hindu' },
  { value: 'Christian', label: 'Christian' },
  { value: 'Sikh', label: 'Sikh' },
  { value: 'Parsi', label: 'Parsi' },
  { value: 'Jain', label: 'Jain' },
  { value: 'Jewish', label: 'Jewish' },
  { value: 'Buddhist', label: 'Buddhist' },
  { value: 'Spiritual', label: 'Spiritual' },
  { value: 'No Religion', label: 'No Religion' },
  { value: 'Other', label: 'Other' },
];
export const MotherTongue = [
  { value: 'English', label: 'English' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Punjabi', label: 'Punjabi' },
  { value: 'Sindhi', label: 'Sindhi' },
  { value: 'Urdu', label: 'Urdu' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'French', label: 'French' },
  { value: 'Nepali', label: 'Nepali' },
  { value: 'Persian', label: 'Persian' },
  { value: 'Pashto', label: 'Pashto' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Seraiki', label: 'Seraiki' },
  { value: 'Santhali', label: 'Santhali' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Tulu', label: 'Tulu' },
  { value: 'Hindko', label: 'Hindko' },
  { value: 'Kashmiri', label: 'Kashmiri' },
  { value: 'Other', label: 'Other' },
];
export const listOfDropDown = [
  {
    label: "I'm looking for a",
    options: Gender,
  },
  {
    label: 'aged',
    options: Aged,
  },
  {
    label: 'of religion',
    options: Religion,
  },
  {
    label: 'and mother tongue',
    options: MotherTongue,
  },
];
