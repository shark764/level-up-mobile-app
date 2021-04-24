import tailwind from '@utils/tailwind';

const styles = {
  'display-1': tailwind('font-martian-extralight text-display-1'),
  'display-2': tailwind('font-martian-extralight text-display-2'),
  'heading-1': tailwind('font-martian-bold text-h1'),
  'heading-2': tailwind('font-martian-bold text-h2'),
  'heading-3': tailwind('font-martian-bold text-h3'),
  'heading-4': tailwind('font-martian-bold text-h4'),
  'heading-5': tailwind('font-martian-semibold text-h5'),
  'heading-6': tailwind('font-martian-medium text-h6 uppercase'),
  paragraph: tailwind('font-martian-extralight text-p'),
  body: tailwind('font-martian text-body'),
  'body-sm': tailwind('font-martian font-martian text-body-sm'),
  'body-md': tailwind('font-martian text-body-md'),
  'body-lg': tailwind('font-martian text-body-lg'),
  'body-semi': tailwind('font-martian-semibold text-body'),
  'body-sm-semi': tailwind('font-martian-semibold text-body-sm'),
  'body-md-semi': tailwind('font-martian-semibold text-body-md'),
  'body-lg-semi': tailwind('font-martian-semibold text-body-lg')
};

export default styles;
