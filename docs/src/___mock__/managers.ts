import { Manager } from '../models'

export const managers: Manager[] = [
  {
    name: 'George',
    position: {
      name: 'Communication Manager',
      code: 'cm102',
      team: {
        name: 'radio presenters',
        num: '5'
      }
    },
    num_exp: '10'
  },
  {
    name: 'Marc',
    position: {
      name: 'Infrastructure Manager',
      code: 'im103',
      team: {
        name: 'developers',
        num: '4'
      }
    },
    num_exp: '11'
  },
  {
    name: 'Lola',
    position: {
      name: 'Art Director',
      code: 'ds102',
      team: {
        name: 'designers',
        num: '4'
      }
    },
    num_exp: '7'
  },
  {
    name: 'Maria',
    position: {
      name: 'HR Manager',
      code: 'hr102',
      team: {
        name: 'recruiters',
        num: '5'
      }
    },
    num_exp: '5'
  },
  {
    name: 'Dan',
    position: {
      name: 'Sales Manager',
      code: 'sl1044',
      team: {
        name: 'sales specialists',
        num: '5'
      }
    },
    num_exp: '9'
  },
  {
    name: 'Ayleen',
    position: {
      name: 'Customer Service Manager',
      code: 'cs102',
      team: {
        name: 'customer agents',
        num: '5'
      }
    },
    num_exp: '3'
  }
]
