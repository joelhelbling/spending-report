import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import LineItem from './LineItem'

describe('LineItem', () => {
  let [lineItem, key, expected] = [];

  beforeEach(() => {
    expected = {
      description: 'one of those things',
      unitCost: 1000,
      quantity: 3,
    }
    key = 1

    lineItem = shallow(
      <LineItem lineItem={expected} key={key} />
    )
  })

  describe('displays', () => {
    test('description', () => {
      expect(lineItem.find('.li-description').text())
        .to.contain(expected.description)
    })
    test('unit cost', () => {
      expect(lineItem.find('.li-unit-cost').text())
        .to.contain('1,000')
    })
    test('quantity', () => {
      expect(lineItem.find('.li-quantity').text())
        .to.contain('x3')
    })
    test('total', () => {
      expect(lineItem.find('.li-total').text())
        .to.contain('3,000')
    })
  })
})
