import treeOne from '../../assets/images/png/jpg/tree-img-one.png'
import treeTwo from '../../assets/images/png/jpg/tree-img-two.png'
import treeThree from '../../assets/images/png/jpg/tree-img-three.png'
import treeFour from '../../assets/images/png/jpg/tree-img-four.png'
import { CancelBox, CheckBox } from './Icon';

export const CARD_DATA = [
  {
    heading: "Lorem ipsum",
    para: "We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. read more",
  },
];

export const SWIPER_TEST_DATA = [
  {
    imgSrc: treeOne,
  },
  {
    imgSrc: treeTwo,
  },
  {
    imgSrc: treeThree,
  },
  {
    imgSrc: treeFour,
  },
  {
    imgSrc: treeOne,
  },
  {
    imgSrc: treeTwo,
  },
  {
    imgSrc: treeThree,
  },
  {
    imgSrc: treeFour,
  },
];

export const PAY_CARD_DATA = [
  {
    heading: "Freebie",
    para: "Ideal for individuals who need quick access to basic features.",
    amountText: "$0",
    month: '/ Month',
    btn: 'Get Started Now',
    payContent: [
      { icon: <CheckBox/>, para: '20,000+ of PNG & SVG graphics' },
      { icon: <CheckBox/>, para: 'Access to 100 million stock images' },
      { icon: <CancelBox/>, para: 'Upload custom icons and fonts' },
      { icon: <CancelBox/>, para: 'Unlimited Sharing' },
      { icon: <CancelBox/>, para: 'Upload graphics & video in up to 4k' },
      { icon: <CancelBox/>, para: 'Unlimited Projects' },
      { icon: <CancelBox/>, para: 'Instant Access to our design system' },
      { icon: <CancelBox/>, para: 'Create teams to collaborate on designs' },
    ]
  },
  {
    heading: "Professional",
    para: "Ideal for individuals who need quick access to basic features.",
    amountText: "$25",
    month: '/ Month',
    btn: 'Get Started Now',
    paratextone: '20,000+ of PNG & SVG graphics',
    paratexttwo: 'Access to 100 million stock images',
    payContent: [
      { icon: <CheckBox/>, para: '20,000+ of PNG & SVG graphics' },
      { icon: <CheckBox/>, para: 'Access to 100 million stock images' },
      { icon: <CheckBox/>, para: 'Upload custom icons and fonts' },
      { icon: <CheckBox/>, para: 'Unlimited Sharing' },
      { icon: <CheckBox/>, para: 'Upload graphics & video in up to 4k' },
    ]
  },
  {
    heading: "Enterprise",
    para: "Ideal for individuals who need quick access to basic features.",
    amountText: "$100",
    month: '/ Month',
    btn: 'Get Started Now',
    paratextone: '20,000+ of PNG & SVG graphics',
    paratexttwo: 'Access to 100 million stock images',
    payContent: [
      { icon: <CheckBox/>, para: '20,000+ of PNG & SVG graphics' },
      { icon: <CheckBox/>, para: 'Access to 100 million stock images' },
      { icon: <CheckBox/>, para: 'Upload custom icons and fonts' },
      { icon: <CheckBox/>, para: 'Unlimited Sharing' },
      { icon: <CheckBox/>, para: 'Upload graphics & video in up to 4k' },
      { icon: <CheckBox/>, para: 'Unlimited Projects' },
      { icon: <CheckBox/>, para: 'Instant Access to our design system' },
      { icon: <CheckBox/>, para: 'Create teams to collaborate on designs' },
    ]
  }
]

export const TODAY_DATA = [
  {
    id: 1,
    name: 'Today Task',
    complete: false,
  },
  {
    id: 2,
    name: 'Day end progress',
    completet: true,
  }
]